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
        stabbed: "We don't know who dunnit, so to speak. I assume that's WHY \
                  you're here.",
        why: "It is? Good. Well, before you do your INVESTIGATION and \
              I give you the STAFF of Accusation, \
              I'm afraid I must ask a personal FAVOR. I'm sure you'll \
              forgive me.",
        investigation: "I recommend starting by asking everybody in town \
                        three questions. Ask about the MURDER, WHERE they \
                        were at the time, and WHAT they were doing.",
        murder: "Everyone should have something to say about the murder. \
                 Look for someone who has MOTIVE and no ALIBI.",
        what: "I personally was reviewing case notes when the murder happened. \
               Are you taking notes on your investigation, by the way? If not, \
               grab some paper and a pen! You won't regret it, I'm sure.",
        where: "I was here at the courthouse, by myself.",
        motive: "That's right. The killer must have had some quarrel with Gregory.",
        alibi: "Find someone whose location at the time of the murder cannot \
                be vouched for by someone else.",
        staff: "Yes, it's an old tradition in these parts. To formally \
                accuse a potential crime-doer of a crime, one must declare \
                it with the Staff of Accusation in hand. You'll need it, \
                I'm sure, since you intend to solve our mystery.",
        favor: "Please bring me a croissant from Samantha's bakery! I do \
                love them. They're proper croissants you see, chewy on \
                the outside, gooey inside, and a touch of tartness.",
        warning: "That's right. You can only accuse someone using the \
                  staff just once. After that, the GAME will end!",
        game: "I mean the a metaphorical game that you're playing \
               in your search for Gregory Miller's killer."
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
                  in Crows' Rest Square.",
    north: "start",
    west: "oceanAveWest",
    east: "oceanAveEast",
    south: "crowsrestSquare"
  },

  oceanAveWest: {
    name: "Intersection of Market and Ocean",
    description: "The east-west cobblestone Ocean Avenue intersects \
                  here with the north-south overgrown path of \
                  Market Street.",
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
    west: "oceanAveEast",
    description: "To the east, the road leads out of Dusk. The river and \
                  the road wind through increasingly hilly planes, on and \
                  on and out of sight. The Gray Mountains, the eventual \
                  destination of the road, loom on the horizon, hazy and \
                  vague. Your quest won't lead you into those mountains, \
                  so you should turn back into town and not wander off.",
    npc: {
      name: "Emily Fisher",
      dialog: {
        talk: "Hi! Don't tell my mom and dad I'm out here. I'm thinking of running AWAY.",
        away: "Yeah, I don't want to get murdered, so, maybe I'll go live in the PLAINS.",
        plains: "Dad said an 8 year old wouldn't survive out there. I'll show him!",
        murder: "I can't believe it! I heard about murderers but I didn't think they were real...",
        where: "Yesterday? Ummmm..... I don't REMEMBER.",
        remember: "Oh yeah! I was playing by myself by the river.",
        what: "I was playing, and um, I tried to get WESLEY to play with me, but he wouldn't...",
        wesley: "I saw him and Sarah go to the park, and he was MAD...",
        mad: "Yeah, he said something about Gregory trying to STEAL Sarah...",
        steal: "How do you steal a person? I don't get it!"
      }
    }
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
                  becoming replaced with swaying tall grasses. The flavor \
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
    leave: "homesteadStVeryNorth",
    description: "This barn, though as tidy as they come, is heady \
                  with the earthy aroma of the bovine that moo lazily \
                  in stalls down both sides of the structure. An \
                  audible buzz can be heard from the fat and happy black \
                  flies that zigzag through the air. Fresh bales of hay \
                  are stacked high in the back of the barn, and a variety \
                  of interesing tools hang from pegs whereever they will fit.",
    npc: {
      name: "Wesley Archer",
      dialog: {
        talk: "Sigh... farm WORK isn't for me.",
        work: function(game) {
          if (game.state("smoked")) {
            game.talk("I'm getting a PLACE to stay in exchange for cleaning this barn, \
                       but I can barely stand it!");
          }
          else {
            game.talk("I'm getting a PLACE to stay in exchange for cleaning this barn, \
                       but I can barely stand it! \
                       Ugh, I'm going to have a smoke. WANT one?")
          }
        },
        place: "I'm staying at the Inn, for now anyway.",
        want: function(game) {
          if (game.state("smoked")) {
            game.talk("I don't have any more, sorry!");
          }
          else {
            game.talk("Here you go.");
            game.givePlayerItem({
              name: "a tobacco cigarette",
              description: "You could OFFER this to someone.",
              command: "offer",
              effect: function(game, item) {
                if (game.room.npc && game.room.npc.name === "Edward Ames") {
                  game.talk("Thank you very kindly! I owe you a DEBT for this.");
                  game.removeItem(item);
                }
                else if (game.room.npc) {
                  game.talk("No, thank you.");
                }
                else {
                  game.respond("No one is here to offer your cigarette to.");
                }
              }
            });
            game.state("smoked", true);
          }
        },
        murder: "I haven't been in town long, so I barely knew Gregory, but we, ah, got along fine.",
        what: "I was with SARAH at the time of the murder. She can vouch for me.",
        where: "I was at the park. It was a beautiful evening...",
        sarah: "I love her, I really do, but I don't know how I can stay in DUSK.",
        dusk: "There is no work for a singer like me, and the bargoers stopped tipping me after the first week."
      }
    },
    item: {
      name: "a bag of coffee beans",
      description: "You could GRIND these.",
      command: "grind",
      effect: function(game, item) {
        if (game.room.name === "Cat's Coffee Cup Cafe") {
          game.removeItem(item);
          game.respond("You turn the crank and grind the beans.");
          game.givePlayerItem({
            name: "ground coffee beans",
            description: "you could BREW these",
            command: "brew",
            effect: function(game, item) {
              if (game.room.name === "Cat's Coffee Cup Cafe") {
                game.removeItem(item);
                game.talk("Wow! You brew a mean cup of coffee! You should WORK here!");
              }
              else {
                game.respond("You lack the proper tools to grind the beans.");
              }
            }
          });
        }
        else {
          game.respond("You lack the proper tools to grind the beans.");
        }
      }
    }
  },

  marketNorth: {
    name: "Market Street",
    description: "This overgrown dirt path leads through the busiest \
                  part of town. Residents, dressed tidily in crimson or \
                  gray or straw, walk about pushing wooden carts, or hauling \
                  burlap bags, or hugging armfuls of books, or leading \
                  ponies or goats. To the west is the humble town library, \
                  mostly hidden behind young elm trees. To the east a \
                  freestanding vinework iron gate leads into Crows' Rest \
                  Square.",
    north: "oceanAveWest",
    east: "crowsrestSquare",
    west: "library",
    south: "marketMiddle"
  },

  marketMiddle: {
    name: "Market Street",
    description: "Here Market Street splits, creating an uneven circle \
                  around an open air market. A variety of stalls are set \
                  up, pawning squash, carrots, potatos, tea leaves, \
                  dried beans, sheep's wool, ironwork tools, and more. \
                  Goats and sheep bleat in protest at being auctioned. \
                  To the west is a circular stone hut with a wooden sign \
                  painted with a coffee cup, and to the east is the \
                  grassy hill of the town park.",
    north: "marketNorth",
    east: "park",
    west: "cafe",
    south: "marketBridge"
  },

  marketBridge: {
    name: "Market Bridge",
    description: "This is the western of the two bridges that cross \
                  the Clear River in Dusk. The river is about 50 feet \
                  wide, splashing long at a hurried pace. True to its \
                  name, the water is absolutely transparent, and the \
                  smooth riverstones and myriad fishes below are quite \
                  visible. The bridge itself is two arches of sturdy \
                  granite, with a circular landing in the middle.",
    north: "marketMiddle",
    south: "marketSouth"
  },

  marketSouth: {
    name: "Market Street",
    north: "marketBridge",
    east: "inn",
    west: "bar",
    description: "Market street ends at a small \
                  plaza not large enough to bear a name. To the west is \
                  a wide building with a slanted roof, from which the sound \
                  of muted chatter eminates. \
                  Above the double doors is a sign featuring a fat sow with a \
                  black spot on one ear. To the east, looking rather precarious, \
                  is a rare two-storied building, identified by a crooked sign \
                  that reads \"Dusk Inn\".",
    npc: {
      name: "Edward Ames",
      dialog: {
        talk: "Got any spare TOBACCO? I could really use a smoke.",
        tobacco: "It's tough being an out-of-work butler. Plenty of scraps to eat, but no smokes.",
        murder: "Awful news! Gregory was quite kind to me. I'll miss the old chap.",
        what: "I was begging at the time of the murder. Not having any luck at it, I'm afraid.",
        where: "Right here, sitting outside the bar as I am now.",
        debt: "Well, you're investigating Gregory's murder, right? Maybe I do have a TIP.",
        tip: "Gregory, he was a swell guy, but I heard he hadn't paid is bar TAB in weeks.",
        tab: "If I were Henry, I'd be awfully mad. Did he off him for it? Can't say. Hope that helps you."
      }
    }
  },

  library: {
    name: "Dusk Town Library",
    east: "marketNorth",
    description: "The town library is a minor labyrinth of narrow passages \
                  between tall, overfull bookshelves. The claustrophobia \
                  is worsened by the smell of stale air and mildew. A few \
                  shelves wobble when touched, perhaps alluding to a major \
                  collapse in the library's future. Near the door is the \
                  librarian's desk, topped with precarious towers of \
                  leather-bound books and papers.",
    npc: {
      name: "Ellie Stone",
      dialog: {
        talk: "H-hi... can I help you...?",
        murder: "Oh... I don't like to think about it...",
        what: "I was... having dinner with Samantha...",
        where: "At the b-bakery..."
      }
    }
  },

  crowsrestSquare: {
    name: "Crows' Rest Square",
    west: "marketNorth",
    north: "oceanAveMiddle",
    east: "homesteadStMiddle",
    south: "park",
    description: "Crows' Rest Square is a well-tended tangle of cobblestone \
    paths and dense gardens around a central fountain at the heart of the \
    town of Dusk. In the center of the fountain is a dramatic brown marble \
    statue of a beatific figure with four angelic wings, arms stretched \
    outward and head raised to the sky. Benches surround this central \
    fountain and residents often stop here to take a meal or a restful \
    break from their day's labors.",
    npc: {
      name: "Sarah Flowers",
      dialog: {
        talk: "Sigh...",
        murder: "I don't want to DISCUSS it...",
        discuss: "Sigh... fine... Gregory was a FOOL and I won't miss him. There? You happy?",
        fool: "That's right. Just the other day I saw him brawling with Jack over DARTS.",
        darts: "Darts! A silly GAME! Of all the things you could get worked up about.",
        game: "There is a dart board at the Spotted Ear. A bad mix with ales, if you ask me.",
        what: "I was with WESLEY...",
        where: "I was here... in the park...",
        wesley: "I do love him so. I hope he can find WORK here in Dusk...",
        work: "It's a small town for a singer, he says. I hope he can make it work..."
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
                game.talk("Oh! So delicious! Thank you so much! I will give \
                           you the Staff of Accusation. But a \
                           WARNING to you: You can only use it once!");
                game.removeItem(item);
                game.givePlayerItem({
                  name: "Staff of Accusation",
                  description: "An oak staff with a detailed carving of a \
                                pointing finger at its head. You could use \
                                this to ACCUSE someone, but only once!",
                  command: "accuse",
                  effect: function(game, item) {
                    if (game.room.npc) {
                      if (game.room.npc.name === "Jon Fisher") {
                        game.goto("outsideJail");
                        game.respond("LATER THAT DAY...");
                      }
                      else {
                        game.respond("The Staff of Accusation shrivels and melts \
                                      in your hands, falling to the ground, becoming \
                                      a puddle of brown goo on the floor. \
                                      You were wrong! Refresh to play again.");
                      }
                      game.removeItem(item);
                    }
                    else {
                      game.respond("No one is here to accuse!");
                    }
                  }
                });
              }
              else if (game.room.npc) {
                game.talk("No thanks!");
              }
              else {
                game.respond("No one is here to give it to.");
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

  homesteadStMiddle: {
    name: "Homestead Street",
    description: "Homestead, the residential street in Dusk, is a quiet \
                  packed dirt path lined with quaint boxy houses with \
                  steeply pitched roofs. Most of the homes have front \
                  porches and flower gardens, occupied by chatting residents \
                  or prowling cats. Birdbaths and feeders are common, resulting \
                  in sweet birdsong most times of day, and flutters of color \
                  when the birds flit from pirch to pirch.",
    west: "crowsrestSquare",
    north: "oceanAveEast",
    east: "house1",
    south: "homesteadStSouth"
  },

  homesteadStSouth: {
    name: "Homestead Street",
    description: "An overgrowth of elm trees provides sparse shade over \
                  this part of the street. The path is gradually declining \
                  as it leads south toward the river; the steeper dropoffs \
                  are alleviated by sets of five or six stone stairs.",
    west: "park",
    north: "homesteadStMiddle",
    east: "house2",
    south: "homesteadBridge"
  },

  homesteadBridge: {
    name: "Homestead Bridge",
    description: "This is the eastern of the two bridges that cross \
                  the Clear River in Dusk. At this crossing the river \
                  narrows, and thus the crystalline water is deeper \
                  and more swift than usual. The bridge itself is an \
                  arch of dark gray granite, stained by the water level \
                  of floods gone by.",
    north: "homesteadStSouth",
    south: "homesteadVerySouth"
  },

  homesteadVerySouth: {
    name: "Homestead Street",
    description: "Homestead ends in a mostly vacant yard. Wagons, \
                  wheelbarrows, spare yokes, barrels, blocks of \
                  hewn stone, and piles of bricks are scattered about. \
                  It's not clear how much of it is abandoned and how \
                  much is being carelessly stored here. An old building \
                  with boarded up windows is to the east.",
    north: "homesteadBridge",
    east: "abandoned"
  },

  bar: {
    name: "The Spotted Ear Tavern",
    east: "marketSouth",
    description: "The Spotted Ear is a small tavern, windowless and dim \
                  at all hours. Oak casks line the wall behind the bar, \
                  and patrons help themselves to the amber ale they \
                  contain, dropping a silver coin in a bowl as they do \
                  so. The floor is covered in the sawdust thrown down \
                  to soak up the tavern's frequent spills. The majority \
                  of the room is taken up by unmatching tables and chairs \
                  of all sizes. A dart board hangs in one corner, the wall \
                  behind it covered in holes.",
    npc: {
      name: "Henry Headboard",
      dialog: {
        talk: "Howdy stranger. I run this here TAVERN.",
        murder: "Ol' GREG bit it? Hrmph.",
        where: "I was here, tending the Ear. It was a quiet night. I think TWO people were here.",
        what: "Just tending bar. Cleaning up spills.",
        two: "Yeah. FRANCIS the fisherman, and some STRANGER.",
        francis: "He comes by here every day. Never causes trouble.",
        stranger: "Yeah. Nautical man by the looks of him. Kept to himself.",
        greg: "Never liked the guy. I heard that he was constantly stealing books \
               from the library. Ellie was complaining about that the other night.",
        tavern: "Yep, the ol' Spotted Ear, founded by my grandfather Jack Headboard. \
                 Plenty of locals and visitors alike gather here."
      }
    }
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
                 muffins, cinnamon buns, coffee cakes, croissants, \
                 and apple bread."
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
             is not immediately clear.",
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
    name: "The Miller House",
    west: "homesteadStSouth",
    description: "This modest home is decorated with trinkets and \
                  treasures of the sea. Even a fishing net is hung \
                  from the ceiling, from which baubles and glass \
                  ornaments hang. A few prize catches are mounted \
                  on wooden plaques, including a host of whiskered \
                  catfish and one particularly massive silver and \
                  white perch.",
    npc: {
      name: "Francis Miller",
      dialog: {
        talk: "Hello stranger, I'm Francis. I fish the river, mostly.",
        murder: "I can't believe it, such a violent thing in our town. \
                 I never expected something like this to happen here.",
        what: "What, am I under suspicion? I was just having a drink at \
               the time.",
        where: "I was at the bar when the murder happened. The bartender \
                should be able to vouch for me."
      }
    }
  },

  cafe: {
    name: "Cat's Coffee Cup Cafe",
    east: "marketMiddle",
    description: "A wooden counter circles the rough stone wall of \
                  this small cafe. A few patrons \
                  stand at this counter, sipping black coffee from colorful \
                  ceramic mugs. The tall conical roof has a hole at the top, \
                  letting out steam from the ulta-modern wood-and-brass \
                  coffee MACHINE.",
    features: {
      machine: "This impressive device is responsible for grinding, \
                extracting, and pouring coffee into a single mug sitting \
                below it. A hand crank on the side sets the whole process \
                in motion with loud clanks and spinning gears."
    },
    npc: {
      name: "Cat Holiday",
      dialog: {
        talk: "Welcome! Would you like a cup of COFFEE?",
        coffee: function(game) {
          if (game.state("coffee")) {
            game.talk("You only get one for free! Sorry!");
          }
          else {
            game.state("coffee", true);
            game.talk("Enjoy!");
            game.givePlayerItem({
              name: "a cup of hot coffee",
              description: "Perhaps DRINK it?",
              command: "drink",
              effect: function(game, item) {
                game.removeItem(item);
                game.respond("You drink the coffee and feel a little jittery...");
                game.state("jittery", true);
              }
            });
          }
        },
        murder: "I know, it's so awful! Poor Gregory, he didn't deserve to die like that.",
        what: "I took an early nap last night, must have been asleep when the murder happened.",
        where: "I was at home. No one else was around.",
        work: "Oh, you're just visiting town? Trying to SOLVE the murder? Hmm...",
        solve: "Well, come to think of it, I do know SOMETHING...",
        something: "I don't want you to put too much importance on it, but Gregory and Francis had an ARGUMENT the day before the murder.",
        argument: "They were arguing over a NECKLACE they found by the river. Don't know if it was worth anything.",
        necklace: "Silver, I think, but probably not worth much. Don't know why they got so worked up about it."
      }
    }
  },

  park: {
    name: "Riverfront Hill",
    description: "This park is a gentle hill that lazily rolls down into \
                  the Clear River to the south. The hillside is spattered with \
                  thousands of crimson poppy flowers, drawing the attention of \
                  occasional honey bees. The flowers have no aroma; instead, the \
                  scent of fresh-cut grass fills the air. Here and there the \
                  local children have abandoned dolls and fighting-sticks, \
                  surely to be happily stumbled upon another day.",
    west: "marketMiddle",
    north: "crowsrestSquare",
    east: "homesteadStSouth"
  },

  abandoned: {
    name: "Abandoned Building",
    west: "homesteadVerySouth",
    description: "Half the roof of this old building has collapsed, \
                  and no one ever bothered to even clear the shattered roof \
                  tiles away. The furniture has all been removed though, \
                  and there are less-dusty shapes on the floor where furniture \
                  once stood. In one corner, under the remaining intact \
                  roof, is a pile of old quilts and a traveller's \
                  backpack.",
    npc: {
      name: "Jack Baxter",
      dialog: {
        talk: "Oh. Wasn't expecting to see anyone here. \
               Are you the OWNER of this building?",
        owner: "You're not? Oh, good. I've been SLEEPING here \
                while in town, and I thought no one would bother \
                me.",
        sleeping: "Aye, I've been TRAVELLING looking for a new crew \
                   to sail with. I'm a sailer by trade.",
        travelling: "I'm heading toward Coldwater, hoping to find \
                     a crew to join there. I'm running low on \
                     money, so I sure hope I find work there.",
        murder: "Murder? I'm just passing through, not interested in \
                 local gossip, to be honest.",
        what: "Was having a few pints at the local bar. Don't remember \
               much of the night, if you catch my meaning.",
        where: "What's that local bar called again? The Pig's Ear? \
                That's where I was."
      }
    }
  },

  outsideJail: {
    name: "Outside a Jail Cell",
    north: "jail",
    description: "This is a small basement room outside of a single \
                  jail cell. The room is sparse: there is only a bare \
                  wooden desk and chair, as well as a peg on the wall \
                  that holds a single ring and key. The air is stagnant \
                  and smells of must.",
    npc: {
      name: "Judge Headswell",
      dialog: {
        talk: "Well, you did it! The staff is never wrong, and I trust \
               in your investigation as well. Of course Jon confessed. \
               You should talk to him, and tell me when you're DONE.",
        done: function(game) {
          if (game.state("done")) {
            game.goto("end");
            game.respond("Thanks for playing!");
          }
          else {
            game.talk("Say DONE again and we'll head out. Talk to Jon \
                      first if you haven't yet.");
            game.state("done", true);
          }
        }
      }
    }
  },

  jail: {
    name: "Jail Cell",
    south: "outsideJail",
    description: "A plain jail cell with cold stone walls, a cot, and a \
                  desk with a single open BOOK. A candle sconce on the wall \
                  and a small barred window near the roof provide all the \
                  light that is present.",
    features: {
      book: "This book is titled \"The Staff of Accusation and The Law: \
             Can The Fabled Staff Be Appealed\"."
    },
    npc: {
      name: "Jon Fisher",
      dialog: {
        talk: "Looks like you got me. I thought it was the perfect CRIME!",
        crime: "Who'd have thought that everyone in the town would have \
                either an alibi or no motive! Or did you just make a lucky \
                GUESS?",
        guess: "Either way, you got me. Now please leave me to my shame."
      }
    }
  },

  end: {
    name: "The End",
    description: "I hope you enjoyed this adventure! \
                  Check out the \
                  <a href=\"https://github.com/incompl/dusk\">source</a> \
                  and have a look at my other \
                  <a href=\"http://incompl.com\">projects</a>."
  }

});