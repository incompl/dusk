window.dream = (function() {

  var directions = ["north", "east", "south", "west", "enter", "leave"];
  
  var game = {
  
    story: null,
    room: null,
    items: [],
    state: {},
    acceptingInput: true,
    
    respond: function(text) {
      var $response = $("#response");
      $response.empty();
      $response.append(text);
    },
    
    _drawItems: function() {
      var $items = $("#items");
      $items.empty();
      _.each(game.items, function(item) {
        $items.append("<div class='item'>" + item.name +
              "<br>" + item.description + "</div>");
      });
    },
    
    givePlayerItem: function(item) {
      this.items.push(item);
      this._drawItems();
    },
  
    removeItem: function(item) {
      if (typeof item === "string") {
        item = _.chain(game.items).filter(function(it) {
          return it.name === item;
        }).first().value();
      }
      this.items = _.without(game.items, item);
      this._drawItems();
    },
    
    addItemInRoom: function(item) {
      this.room.item = item;
    },
    
    playerHasItem: function(name) {
      return _.chain(this.items).pluck("name").contains(name).value();
    },
    
    state: function(key, value) {
      if (value !== undefined) {
        this.state[key] = value;
      }
      return this.state[key];
    },
    
    goto: function(room) {
      game.room = game.story[room];
    },
    
    describeRoom: function(text) {
      var $text = $("#text");
      $text.append(text);
      $text.append("<br>");
    },
    
    exits: function() {
      var result = "[";
      _.each(directions, function(dir) {
        if (game.room[dir]) {
          if (dir === "enter") {
            result += "En";
          }
          else if (dir === "leave") {
            result += "Le";
          }
          else {
            result += dir.substr(0, 1).toUpperCase();
          }
        }
      });
      result += "]";
      return result;
    },

    talk: function(message) {
      game.respond(game.room.npc.name + ' says "' + message + '"');
    },
    
    loop: function() {
    
      // render current room
      $("#text").empty();
      game.describeRoom("<div class='roomName'>" + game.room.name +
                        " " + this.exits() + "</div>");
      game.describeRoom("<div class='roomDescription'>" + game.room.description + "</div>");
      
      // show exits
      var exitsStr = "";
      _.each(directions, function(dir) {
        if (game.room[dir]) {
          if (exitsStr.length !== 0) {
            exitsStr += ", ";
          }
          exitsStr += dir;
        }
      });
      if (exitsStr.length === 0) {
        game.describeRoom("No obvious exits");
      }
      else {
        game.describeRoom("Exits: " + exitsStr);
      }
      
      // show npcs
      if (game.room.npc) {
        game.describeRoom("You see " + game.room.npc.name + ".");
      }
      
      // show items
      if (game.room.item) {
        game.describeRoom("You see " + game.room.item.name + ".");
      }
      
      // show hints
      if (game.room.hint) {
        game.describeRoom(game.room.hint);
      }
          
    }
    
  };
  
  $("#input").submit(function(e) {
    e.preventDefault();
    
    var command;
    var target;
    var response;
    
    var itemCommands = _.chain(game.items)
                        .pluck("command")
                        .value();
    
    if (game.acceptingInput) {
      game.acceptingInput = false;
      command = $("#inputValue").val().toLowerCase();
      
      // no spaces
      if (command.match(/\s/)) {
        game.respond("All commands are one word long. Don't type multiple words.");
      }
      
      // movement
      else if (command === "n" || command === "north" ||
          command === "e" || command === "east" ||
          command === "s" || command === "south" ||
          command === "w" || command === "west" ||
          command === "en" || command === "enter" ||
          command === "le" || command === "leave") {
        if (command === "n") command = "north";
        if (command === "e") command = "east";
        if (command === "s") command = "south";
        if (command === "w") command = "west";
        if (command === "en") command = "enter";
        if (command === "le") command = "leave";
        if (game.room[command]) {
          game.room = game.story[game.room[command]];
          if (command === "enter") {
            response = "You head inside";
          }
          else if (command === "leave") {
            response = "You leave";
          }
          else {
            response = "You head " + command;
          }
          game.loop();
          response += " and arrive at " + game.room.name + " " + game.exits();
          game.respond(response);
        }
        else {
          game.respond("You can't go that way.");
        }
      }
      
      // get
      else if (command === "get") {
        if (game.room.item && !game.room.item.heavy) {
          game.respond("You get " + game.room.item.name);
          game.givePlayerItem(game.room.item);
          delete game.room.item;
          game.loop();
        }
        else if (game.room.item) {
          game.respond(game.room.item.heavy);
        }
        else if (game.room.npc) {
          game.respond(game.room.npc.name + " wouldn't appreciate that.");
        }
        else {
          game.respond("Nothing to get here.");
        }
      }

      // item commands
      else if (_.contains(itemCommands, command)) {
        target = _.chain(game.items).filter(function(item) {
          return item.command === command;
        })
        .first().value();
        target.effect(game, target);
        game.loop();
      }
      
      // item in room
      else if (game.room.item && game.room.item.command === command) {
        game.room.item.effect(game, game.room.item);
        game.loop();
      }
      
      // talk
      else if (command === "talk") {
        if (game.room.npc && typeof game.room.npc.dialog === "string") {
          game.talk(game.room.npc.dialog);
        }
        if (game.room.npc && typeof game.room.npc.dialog === "object") {
          game.talk(game.room.npc.dialog.talk);
        }
        else {
          game.respond("No one to talk to here.");
        }
      }

      // npc topic
      else if (game.room.npc && game.room.npc.dialog[command]) {
        game.respond(game.room.npc.name + ' says "' + game.room.npc.dialog[command] + '"');
      }

      // room feature
      else if (game.room.features && game.room.features[command]) {
        game.respond(game.room.features[command]);
      }
      
      // caps
      else if (command === "caps") {
        game.respond("Very clever.");
      }
      
      // Invalid command
      else {
        if (command) {
          game.respond("You can't " + command + ".");
        }
        else {
          game.respond("Punch the keys for god's sake.");
        }
      }
      $("#inputValue").val("");
      game.acceptingInput = true;
    }
  });
  
  this.begin = function(storyJson) {
    game.story = storyJson;
    game.goto("start");
    game.loop();
  }
  
  return this;

})();