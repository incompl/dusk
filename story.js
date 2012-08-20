dream.begin({

  start: {
    name: "Courthouse",
    south: "oceanAveMiddle",
    description: "This old courthouse could easily be mistaken for \
                  a schoolhouse or church. The bulk of the room is \
                  occupied by two rows of long wooden benches. At \
                  the head of the room is a huge DESK behind which \
                  the judge sits. Behind the desk is a single huge \
                  oil PORTRAIT.",
    features: {
      desk: "The judge's desk has nothing on it but a gavel.",
      portrait: "A portait of Judge Green, first elected judge of Dusk."
    },
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
                I'm sure, since you intend to solve our mystery.",
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
    description: "This cobbled road is the main thoroughfare through the \
                  town of Dusk. Weeds and occasional crimson poppy \
                  flowers peek between the stones and line both sides \
                  of the road. To the north stands the stately courthouse, \
                  from the south comes the splashing sound of the fountain \
                  in Crowsrest Square.",
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
    description: "The east-west cobblestone Ocean Avenue intersects here \
                  with the north-south dirt path of Homestead Street.",
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
    description: "Here the packed dirt path leads out of town and toward \
                  the spelt fields and ranches to the north. Ocassionally \
                  goats and small ponies trot purpousfully down the path, \
                  apparently of their own direction.",
    south: "oceanAveEast",
    north: "homesteadStVeryNorth"
  },

  homesteadStVeryNorth: {
    name: "Homestead Street",
    description: "Homestead Street comes to a lazy end here, gradually \
                  becoming replaced with swaying tall grasses. The stench \
                  of cattle hangs in the air, save for when a cool breeze \
                  clears it from the west. Moos, bleats, and goatcries \
                  sound all round from fenced fields and pens. A barn is \
                  here, the closest \
                  one to town, painted a rambunctious shade of turquoise.",
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
    description: "This barn, though as tidy as they come, is heady \
                  with the earthy aroma of the bovine that moo lazily \
                  in stalls down both sides of the structure. An \
                  audible buzz can be heard from the fat and happy black \
                  flies that zigzag through the air. Fresh bales of hay \
                  are stacked high in the back of the barn, and a variety \
                  of interesing tools hang from pegs whereever they will fit.",
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
    west: "marketSouth",
    description: "The perimeter of this stone-walled lobby is cluttered \
                  with little wodden tables, which are in turn cluttered with \
                  pots of poppy flowers, tulips, herbs, and ferns. The \
                  warm aroma of sweets and breads wafts through the room from \
                  the adjecant kitchen. In the back of the room a COUNTER is \
                  set up, and behind that, a spiral STAIRCASE. In the \
                  center of the room a table is covered with a white \
                  tablecloth and an array of PASTRIES.",
    features: {
      counter: "A bell, an old book, and an inkwell sit on this counter. \
                A sign is hung on the front of it, which reads \
                \"No Vacancy\".",
      staircase: "A narrow spiral staircase with thin metal rails winds up \
                  to the second floor. A rope is hung from rail to rail at \
                  the bottom, prohibiting access.",
      pastries: "A wide variety of pastries rest neatly on ornate blue and \
                 white ceramic plates, including lemon scones, blackberry \
                 muffins, cinnamon buns, coffee cakes, and apple bread."
    },
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
        buy: "Oh, you don't seem to have any money...",
        murder: "Ghastly, don't you think? I didn't know Gregory well, \
                but of course I saw him around. Frightening that this could \
                happen in our little town...",
        where: "Last night I was here, cleaning up. ELLIE was here \
                too, reading. She's nice company, but quiet.",
        what: "I was cleaning up the kitchen, getting ready for an early \
               morning of baking. I get to bed quite early these days.",
        ellie: "Ellie is the town librarian. Honestly she keeps to \
                herself too much. I'd like to know more about her!",
        jon: "Jon says hello? How nice! I wish I heard more from him \
              in person, to be honest, but I know how busy he is, and \
              sometimes it's HARD on him.",
        hard: "Oh, I shouldn't have said anything, but he has been too \
               generous lending out money. In fact, Gregory owed him a \
               fair amount of money. I suppose we won't be seeing it now \
               that he's gone."
      }
    }
  },

  house1: {
    name: "The Fisher House",
    west: "homesteadStMiddle",
    description: "This cozy home is ornately furnished with \
                  laquored wood, brass ornamentation, and a variety \
                  of scenic oil paintings of all sizes. In one corner, \
                  by an old wood stove, is a hefty and grand DESK. \
                  Behind that is a tall BOOKSHELF that reaches the ceiling, \
                  filled with leather tomes and unchecked layers of dust.",
    features: {
      desk: "The papers, pens, inkwells, and notebooks covering this desk \
             are meticulously organized according to some framework that \
             is not immidiately clear.",
      bookshelf: "Even a brief perusal reveals that these books are of \
                  the dryest subject matter imaginable. \"Understanding \
                  International Trade Agreements\" and \"Uses for Second \
                  or Third Pressing Groundnut Oil\" are a couple of the \
                  more interesting ones."
    },
    npc: {
      name: "Jon Fisher",
      dialog: {
        talk: "I beg your pardon, but I'm quite busy with these permits. \
               Shipping COFFEE beans to overseas is so meddlingly overtaxed!",
        coffee: "I don't touch the stuff myself. Breaks me out into an awful \
                 sweat. Spirits are the substance of gentlemen, anyhow.",
        murder: "Gregory Miller, killed, you say? Hmph. Never liked the chap, \
                 but had no quarrel with him. A shame, I have to say.",
        where: "Yesterday evening? I was here, in my office, by myself. There \
                is no end to the BUSINESS I must attend to.",
        what: "Filling out tax documents. This is no simple BUSINESS.",
        business: "Yes, I deal in imports and exports of spices, oils, and \
                   other high value goods. My WIFE's little side business \
                   complicates things even further.",
        wife: "Yes, Samantha. I do love her dearly, of course, but baking \
               is a business for peasants, and it brings no non-negligable \
               INCOME into this household.",
        income: "Yes, but I shouldn't be so hard on her. She does love her \
                 sweets. If you stop by her shop, would you mind telling her \
                 JON says hello?",
        jon: "Tell Samantha hello, not me!"
      }
    }
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