dream.begin({

  start: {
    name: "Courthouse",
    description: "TODO",
    south: "oceanAveMiddle",
    npc: {
      name: "Judge Headswell",
      dialog: {
        talk: "Welcome to DUSK. Are you here about the MURDERS?",
        dusk: "Yes, that is the name of our little town. It is named \
               for the INN that sat on the river, on its lonesome, for \
               many years before the town sprung up about it.",
        inn: "The inn... It's still there, of course. No one remembers why \
              it was named the Dusk Inn, but our town bears the name to \
              this day.",
        murders: "Gregory Miller. STABBED to death in the prime of his life.",
        stabbed: "We don't know who dunnit, so to speak. So, is that why \
                  you're here? YES or no?",
        yes: "Good, good. Well, before I give you the STAFF of Accusation, \
              I'm afraid I must ask a personal FAVOR. I'm sure you'll \
              forgive me.",
        staff: "Yes, it's an old tradition in these parts. To formally \
                accuse a potential crime-doer of a crime, one must declare \
                it with the Staff of Accusation in hand. You'll need it, \
                I'm sure, since you intend to solve our mystery222.",
        favor: "Please bring me a CROISSANT from Samantha's bakery! I do \
                love them. They're proper croissants you see, chewy on \
                the outside, gooey inside, and a touch of tartness.",
        croissant: "Yes, how I love those croissants from Samantha's bakery...",
        warning: "That's right. You can only accuse someone using the \
                  staff just once. After that, the GAME will end!",
        game: "I mean the a metaphorical game that you're playing \
               in your search for Gregory Miller's killer."
      }
    },
    item: {
      name: "a single penny",
      description: "You could BUY something with this.",
      command: "buy",
      effect: function(game, item) {
        if (game.room.name === "Dusk Inn & Bakery") {
          game.respond("You buy a croissant.");
          game.removeItem(item);
          game.givePlayerItem({
            name: "a flaky croissant",
            description: "You're not hungry. Maybe GIVE it to someone?",
            command: "give",
            effect: function(game, item) {
              if (game.room.name === "Courthouse") {
                game.talk("Oh! So delicious! Thank you so much! But a \
                           WARNING to you: You can only use it once!");
                game.removeItem(item);
                game.givePlayerItem({
                  name: "Staff of Accusation",
                  description: "TODO",
                  command: "accuse",
                  effect: function(game, item) {
                    // TODO
                  }
                });
              }
              else {
                game.respond("No one here wants it.");
              }
            }
          });
        }
        else {
          game.respond("Nothing to buy here.");
        }
      }
    }
  },

  oceanAveMiddle: {
    name: "Ocean Avenue",
    description: "TODO",
    north: "start",
    west: "oceanAveWest",
    east: "oceanAveEast",
    south: "crowsrestSquare"
  },

  oceanAveWest: {
    name: "Intersection of Market and Ocean",
    description: "TODO",
    east: "oceanAveMiddle",
    west: "roadToColdwater",
    south: "marketNorth"
  },

  oceanAveEast: {
    name: "Intersection of Homestead and Ocean",
    description: "TODO",
    west: "oceanAveMiddle",
    east: "roadToGrayMountains",
    north: "homesteadStNorth",
    south: "homesteadStMiddle"
  },

  roadToColdwater: {
    name: "Road to Coldwater",
    description: "To the west, the road leads out of Dusk, along the \
                  Clear River and through the grassy flats. A few days' \
                  journey would lead you to Coldwater, a small city \
                  on the coast of the Saffron Sea, at the outlet of the \
                  river. Your adventures won't be leading you this way, \
                  however, so you'd best remain in town.",
    east: "oceanAveWest"
  },

  roadToGrayMountains: {
    name: "Road to the Gray Mountains",
    description: "To the east, the road leads out of Dusk. The river and \
                  the road wind through increasingly hilly planes, on and \
                  on and out of sight. The Gray Mountains, the eventual \
                  destination of the road, loom on the horizon, hazy and \
                  vague. Your quest won't lead you into those mountains, \
                  so you should turn back into town and not wander off.",
    west: "oceanAveEast"
  },

  homesteadStNorth: {
    name: "Homestead Street",
    description: "TODO",
    south: "oceanAveEast",
    north: "homesteadStVeryNorth"
  },

  homesteadStVeryNorth: {
    name: "Homestead Street",
    description: "TODO",
    south: "homesteadStNorth",
    enter: "barn"
  },

  homesteadStMiddle: {
    name: "Homestead Street",
    description: "TODO",
    north: "homesteadStNorth",
    west: "park"
  },

  barn: {
    name: "Inside a Barn",
    description: "TODO",
    leave: "homesteadStVeryNorth"
  },

  marketNorth: {
    name: "Market Street",
    description: "TODO",
    north: "oceanAveWest",
    east: "crowsrestSquare",
    west: "library",
    south: "marketMiddle"
  },

  marketMiddle: {
    name: "Market Street",
    description: "TODO",
    north: "marketNorth",
    east: "park",
    west: "cafe",
    south: "marketBridge"
  },

  marketBridge: {
    name: "Market Bridge",
    description: "TODO",
    north: "marketMiddle",
    south: "marketSouth"
  },

  marketSouth: {
    name: "Market Street",
    description: "TODO",
    north: "marketBridge",
    east: "inn",
    west: "bar"
  },

  library: {
    name: "Library",
    description: "TODO",
    east: "marketNorth"
  },

  crowsrestSquare: {
    name: "Crows' Rest Square",
    description: "TODO",
    west: "marketNorth",
    north: "oceanAveMiddle",
    east: "homesteadStMiddle",
    south: "park"
  },

  homesteadStMiddle: {
    name: "Homestead Street",
    description: "TODO",
    west: "crowsrestSquare",
    north: "oceanAveEast",
    east: "house1",
    south: "homesteadStSouth"
  },

  homesteadStSouth: {
    name: "Homestead Street",
    description: "TODO",
    west: "park",
    north: "homesteadStMiddle",
    east: "house2",
    south: "homesteadBridge"
  },

  homesteadBridge: {
    name: "Homestead Bridge",
    description: "TODO",
    north: "homesteadStSouth",
    south: "homesteadVerySouth"
  },

  homesteadVerySouth: {
    name: "Homestead Street",
    description: "TODO",
    north: "homesteadBridge",
    east: "abandoned"
  },

  bar: {
    name: "Bar",
    description: "TODO",
    east: "marketSouth"
  },

  inn: {
    name: "Dusk Inn & Bakery",
    description: "TODO",
    west: "marketSouth",
    npc: {
      name: "Samantha Fisher",
      dialog: {
        talk: "Hello! Welcome to my BAKERY. And I'm looking after \
               Erica's INN while she's out of town.",
        bakery: "Yes! I love to bake, and if you don't mind a bit of \
                 hubris, I might say my neighbors like what I make!",
        inn: "That's right. This building is the Dusk Inn, but Ms. \
              Walker, bless her heart, lets me use her kitchen and \
              sell my baked goods here as well.",
        croissant: "Oh, I reckon someone told you about my famous \
                    croissants? Please BUY one! Only a penny each.",
        buy: "Oh, you don't seem to have any money..."
      }
    }
  },

  house1: {
    name: "House 1",
    description: "TODO",
    west: "homesteadStMiddle"
  },

  house2: {
    name: "House 2",
    description: "TODO",
    west: "homesteadStSouth"
  },

  cafe: {
    name: "Coffee Shop",
    description: "TODO",
    east: "marketMiddle"
  },

  park: {
    name: "Park",
    description: "TODO",
    west: "marketMiddle",
    north: "crowsrestSquare",
    east: "homesteadStSouth"
  },

  abandoned: {
    name: "Abandoned Building",
    description: "TODO",
    west: "homesteadVerySouth"
  },

});