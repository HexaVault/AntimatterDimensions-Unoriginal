import { DC } from "../constants";

// A = always there
// L = locked
// R = random chance condition
// P = patreon
// AI = created with gpt2
// SCP = Taken from the scp fandom - Only in the 9th ad mod, feel free to remove

function newsAnimSpd(seconds) {
  return seconds / player.options.news.speed;
}


export const news = [
  {
    id: "a1",
    text: "The cookie is a lie.",
  },
  {
    id: "a2",
    text: "Antimatter ghosts do not exist. Just like matter ghosts. They don't have any matter, for that matter."
  },
  {
    id: "a3",
    text: "Nuclear power plants have been abandoned in favor of antimatter power."
  },
  {
    id: "a4",
    text: "Antimatter cookies have been confirmed to not exist, whoever claims that, stop."
  },
  {
    id: "a5",
    text: "Antimatter prices have drastically dropped due to newfound abundance."
  },
  {
    id: "a6",
    text: "In the news today, humans make an antimatter animal sacrifice to the antimatter god."
  },
  {
    id: "a7",
    text: "You made one antimatter! Whatever that means."
  },
  {
    id: "a8",
    text: "\"IN THE END, IT DOESN'T ANTIMATTER\" -hevipelle"
  },
  {
    id: "a9",
    text: "None of this matters."
  },
  {
    id: "a10",
    text: "How does it matter if it's antimatter?"
  },
  {
    id: "a11",
    text: "Scientists confirm that the colour of antimatter is Blurple."
  },
  {
    id: "a12",
    text: "How does NASA organise a party? They planet."
  },
  {
    id: "a13",
    text:
      `Electrons are now seeing the happy things in life.
      We're calling these happy electrons 'Positrons.' Wait, that's taken?`
  },
  {
    id: "a14",
    text:
      `This completely useless sentence will get you nowhere and you know it.
      What a horrible obnoxious man would come up with it, he will probably go to hell,
      and why would the developer even implement it? Even if you kept reading it you wouldn't
      be able to finish it (the first time).`
  },
  {
    id: "a15",
    text: `"GHOST SAYS HELLO" -Boo-chan`
  },
  {
    id: "a16",
    text: `"Can someone tell hevi to calm down?" -Mee6`
  },
  {
    id: "a17",
    text: "Due to antimatter messing with physics, a creature that was once a moose is now a human."
  },
  {
    id: "a18",
    text: "!hi"
  },
  {
    id: "a19",
    text: `"Alright" -Alright`
  },
  {
    id: "a20",
    text: "The English greeting is not present in Antimatter speak."
  },
  {
    id: "a21",
    text: "To buy max or not to buy max, that is the question."
  },
  {
    id: "a22",
    text: "One, two, skip a few, ninety-nine, NaN!"
  },
  {
    id: "a23",
    text: "No, mom, I can't pause this game."
  },
  {
    id: "a24",
    text: "Scientific notation has entered the battlefield."
  },
  {
    id: "a25",
    text: `"Make the Universe Great Again!" -Tronald Dump`
  },
  {
    id: "a26",
    text: "#dank-maymays"
  },
  {
    id: "a27",
    get text() {
      return `A new religion has been created, and it's spreading like wildfire. The believers of this religion worship
        the Heavenly Pelle, the goddess of antimatter. They also believe that ${format(Number.MAX_VALUE, 2)}
        is infinite.`;
    }
  },
  {
    id: "a28",
    text: "Someone has just touched a blob, and blown up. Was the blob antimatter, or was the guy made of Explodium?"
  },
  {
    id: "a29",
    text: `If you are not playing on Kongregate, Steam, or https://ivark.github.io/AntimatterDimensions/,
      the site is bootleg.`
  },
  {
    id: "a30",
    text: "Rate 5 on Kongregate so more people can experience this 5 star rating."
  },
  {
    id: "a31",
    text: "BOO!"
  },
  {
    id: "a32",
    text: `"You ate for too long." -Hevipelle`
  },
  {
    id: "a33",
    text: `"I hate myself." -Boo-chan`
  },
  {
    id: "a34",
    text: `"Gee golly" -Xandawesome`
  },
  {
    id: "a35",
    text: "Above us, there is nothing above, but the stars, above."
  },
  {
    id: "a36",
    text: "You feel like making antimatter. But nobody wants to eat your antimatter."
  },
  {
    id: "a37",
    text: "Somebody wasn't nice, he got an antimatter-storm."
  },
  {
    id: "a38",
    text: "You are living, you occupy space, you have a mass, you matter... unless you antimatter."
  },
  {
    id: "a39",
    text: "I clicked too fast... my PC is now dematerialised."
  },
  {
    id: "a40",
    text:
      `"If an alien lands on your front lawn and extends an appendage as a gesture of greeting, before you get
      friendly, toss it an eightball. If the appendage explodes, then the alien was probably made of antimatter.
      If not, then you can proceed to take it to your leader." -Neil deGrasse Tyson`
  },
  {
    id: "a41",
    text:
      "There must always be an equal amount of matter as compared to antimatter; I guess your mom balances that a bit."
  },
  {
    id: "a42",
    text: "Nothing is created, nothing is destroyed."
  },
  {
    id: "a43",
    text: "We dug a big hole to store this antimatter... Adele's rolling in it."
  },
  {
    id: "a44",
    text: "If everything is antimatter, how can you see yourself?"
  },
  {
    id: "a45",
    text: "The stock markets have crashed due to antimatter beings somehow knowing what they will be tomorrow."
  },
  {
    id: "a46",
    text: "My dog ate too much antimatter, now he's' saying 'meow!'"
  },
  {
    id: "a47",
    text: "If you put infinity into your calculator, it will result in 42!"
  },
  {
    id: "a48",
    text: "You have found the rarest antimatter pepe, it's ultra rare!"
  },
  {
    id: "a49",
    get text() {
      return `Can we get ${format(1e169)} likes on this video??? Smash that like button!!`;
    }
  },
  {
    id: "a50",
    text: "The smell of antimatter has been revealed. It smells like kittens."
  },
  {
    id: "a51",
    text: "Just another antimatter in the wall."
  },
  {
    id: "a52",
    text: "GET SNIPED, WEAKLING"
  },
  {
    id: "a53",
    text: `"Thanks a lot." -Dankesehr`
  },
  {
    id: "a54",
    text: "This world situation is an SOS situation to the world!! MAYDAY, MAYDAY!!"
  },
  {
    id: "a55",
    text:
      `"As for sure as the sun rises in the west, of all the singers and
      poets on earth, I am the bestest." - Hevipelle`
  },
  {
    id: "a56",
    text: `"I'm good at using github." -Hevipelle`
  },
  {
    id: "a57",
    text:
      `A new chat server has been created for antimatter people to spy on matter people,
      and the world has fallen into chaos and discord.`
  },
  {
    id: "a58",
    text:
      `A new study has come out linking the consumption of potatoes with increased risk of antimatter implosion.
      Scientists suggest eating more.`
  },
  {
    id: "a59",
    text: `"I thought that I fixed that bug but apparently some update broke it again." -Hevipelle`
  },
  {
    id: "a60",
    text: `"Maybe I'm gay then" -Bootato`
  },
  {
    id: "a61",
    text: "Breaking news! Hevipelle has just announced that the buy max button is in fact going to be removed!"
  },
  {
    id: "a62",
    text: "I dedicate this game to my girlfriend."
  },
  {
    id: "a63",
    text:
      `Antimatter guns don't kill antimatter people, antimatter people kill antimatter people but does that mean
      that antimatter toaster doesn't toast antimatter toasts, antimatter toast toasts antimatter toasts?`
  },
  {
    id: "a64",
    text: "But to an antimatter person, wouldn't they be matter and us antimatter?"
  },
  {
    id: "a65",
    text: "And nothing antimatters."
  },
  {
    id: "a66",
    text:
      `School starting up strikes fear in students universe-wide, as schools are no longer segregated between
      matter and antimatter. Annihilation is prominent.`
  },
  {
    id: "a67",
    text: "Why does no one talk about the 0th dimension?"
  },
  {
    id: "a68",
    text: "The fatter catter satter on the antimatter."
  },
  {
    id: "a69",
    text: "Who let the DOgs out?"
  },
  {
    id: "a70",
    text: "If you can't read this, you disabled the news."
  },
  {
    id: "a71",
    text: "Doesn't leave, just mutes the server so he doesn't receive notifications."
  },
  {
    id: "a72",
    text: `"Most quotes found online are falsely attributed." -Abraham Lincoln`
  },
  {
    id: "a73",
    text: `"It should work now, but it doesn't." -Hevipelle`
  },
  {
    id: "a74",
    text: "This game doesn't have any errors... they're alternative successes."
  },
  {
    id: "a75",
    text:
      `A third type of matter has been discovered: null matter. It doesn't do anything and is basically
      useless. The scientists who discovered it were fired.`
  },
  {
    id: "a76",
    text: "Your Mother-in-Law keeps nagging you about all these antimatter colliders."
  },
  {
    id: "a77",
    text: "If matter exists, then does antimatter not exist?"
  },
  {
    id: "a78",
    text: "Antimatter=Life. Not cobblestone, not dirt, nothing like that. Antimatter."
  },
  {
    id: "a79",
    text: "Breaking News: Error Error Error"
  },
  {
    id: "a80",
    text: "How much antiwood could an antiwoodchuck chuck if an antiwoodchuck could chuck antiwood?"
  },
  {
    id: "a81",
    text: "Chaos isnt a pit, chaos is a matter."
  },
  {
    id: "a82",
    text: `"That's because I'm a good game developer and pushed some code that totally works." -Hevipelle`
  },
  {
    id: "a83",
    text: "What's the matter with anti matter?"
  },
  {
    id: "a84",
    text: "Doesn't it annoy you when people don't finish their"
  },
  {
    id: "a85",
    text: "Don't anti-quote me on this."
  },
  {
    id: "a86",
    text: "Antimatter is honest, matter makes up everything."
  },
  {
    id: "a87",
    text:
      `According to no known laws of aviation, there are multiple ways a bee
      should be able to be swallowed up by antimatter.`
  },
  {
    id: "a88",
    text: "You either die as matter or live long enough to be consumed by the antimatter, and then die again."
  },
  {
    id: "a89",
    text: "If you gaze long enough into the antimatter, the antimatter gazes back into you."
  },
  {
    id: "a90",
    text: `"Always gonna give you up. Always gonna let you down." - anti-Rick Astley`
  },
  {
    id: "a91",
    text: "Antimatter Dimensions: the next update is always 5 hours away. Always."
  },
  {
    id: "a92",
    get text() {
      const games = [
        {
          name: "Antimatter Dimensions",
          link: "https://ivark.github.io/"
        },
        {
          name: "FE000000",
          link: "https://dan-simon.github.io/misc/fe000000/"
        },
        {
          name: "Trimps",
          link: "https://trimps.github.io/"
        },
        {
          name: "Mine Defense (the game's ui is broken on https so make sure you're on http!)",
          link: "http://scholtek.com/minedefense"
        },
        {
          name: "Wizard and Minion Idle",
          link: "https://www.kongregate.com/games/Oninou/wami"
        },
        {
          name: "Anti-Idle",
          link: "https://www.kongregate.com/games/Tukkun/anti-idle-the-game"
        },
        {
          name: "Synergism",
          link: "https://synergism.cc/"
        },
        {
          name: "Universal Paperclips",
          link: "https://www.decisionproblem.com/paperclips/index2.html"
        },
        {
          name: "Monies<sup>2</sup",
          link: "https://sneekxy.nmtechgroup.com/monies2/"
        },
        {
          name: "The First Alkahistorian stages 1, 2, and 3",
          link: "https://nagshell.github.io/elemental-inception-incremental/"
        },
        {
          name: "Melvor Idle",
          link: "https://melvoridle.com/"
        }
      ];
      const game = games.randomElement();
      return `An unidentified developer of Antimatter Dimensions would like to
        recommend that you play <a href="${game.link}" target="_blank">${game.name}</a>`;
    },
  },
  {
    id: "a93",
    text:
      `On a scale of 1 to 10, I rate this game a solid
      <span style='color: red'>java.lang.IndexOutOfBoundsException</span>`
  },
  {
    id: "a94",
    text: "To matter or to antimatter, that is the question."
  },
  {
    id: "a95",
    text: "Why is everything so Hevi?"
  },
  {
    id: "a96",
    text:
      `It has been scientifically proven ages ago, that cats made of matter are assholes. We have good news,
      because cats made of antimatter are still assholes.`
  },
  {
    id: "a97",
    text: "Nobody once told me the anti-world wasn't gonna roll me."
  },
  {
    id: "a98",
    text: "Antimatter is like the internet. If you're reading this, you can't have enough of it."
  },
  {
    id: "a99",
    text:
      `"Antimatter has made time travel possible and I'm here to make the
      past great again." - 2nd President of the World`
  },
  {
    id: "a100",
    text: "Please insert Disc -1 to continue playing Antimatter Dimensions™."
  },
  {
    id: "a101",
    text: "Lore - coming soon™"
  },
  {
    id: "a102",
    text: "I was a part of antimatter like you once. But then I got matter in my knee."
  },
  {
    id: "a103",
    text:
      `Antimatter... antimatter never changes... until you get to quantum physics of antimatter,
      but we don't have enough tachyon particles for that.`,
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a104",
    text: "There is no war in Antimatter Dimensions. Here we are safe. Here we are free."
  },
  {
    id: "a105",
    text: "Antimatter has solved global warming. In unrelated news, the Earth no longer exists."
  },
  {
    id: "a106",
    text:
      `Anti-water, anti-Earth, anti-fire, anti-air. Long ago, the four anti-nations lived together in harmony.
      Then, everything changed when the anti-Fire Nation attacked. Only the anti-Avatar, the master of all 4
      anti-elements could bring balance to the anti-world, but when the world needed him most, he accidentally
      touched some regular matter and exploded.`
  },
  {
    id: "a107",
    text: "If you open an anti-lootbox, are you selling random possessions for in-game currency?"
  },
  {
    id: "a108",
    text: "People are beginning to question Hevipelle's existence."
  },
  {
    id: "a109",
    text:
      `Antimatter Dimensions is proud to be sponsored by Lehmä! Now offering - grass eating lessons! Learn what
      grass is safe to eat and what grass isn't.`,
    isAdvertising: true
  },
  {
    id: "a110",
    text:
      `It is the year 2422. The update still isn't out. Hevi is working on balancing unfunity dimension dimensions
      and challenges for the 38th layer of prestige. There are over 100 rows of achievements. They're getting
      ready to start using breaking_breaking_breaking_infinity.js.`
  },
  {
    id: "a111",
    text: "Import \"Christmas\" for a secret theme."
  },
  {
    id: "a112",
    text:
      `What the f*ck did you just f*cking say about me, you little b*tch? I'll have you know I graduated top of my
      class in the Antimatter Seals, and I've been involved in numerous secret raids on the 10th Dimension, and I
      have over 300 NNnNeMI-NNnNe confirmed kills. I am trained in potato warfare and I'm the top sniper in the
      entire Antimatter Galactic armed forces. You are nothing to me but just another infinity. I will wipe you
      the f*ck out with Max All mashing the likes of which has never been seen before in this dimension, mark my
      f*cking words. You think you can get away with saying that shit to me over the Interdimensional network?
      Think again, f*cker. As we speak I am contacting my secret network of autobuyers across the galaxy and your
      IP is being traced right now so you better prepare for the Big Crunch, maggot. The Big Crunch that wipes out
      the pathetic little thing you call your life. You're f*cking dead, kid. I can be anywhere, anytime, and I can
      kill you in over seven 😠💩 different ways, and that's just with my mouse. Not only am I extensively trained
      in dimension boost combat, but I have access to the entire arsenal of the Antimatter Marine Corps and I will
      use it to its full extent to wipe your miserable ass off the face of the universe, you little shit. If only
      you could have known what unhevi retribution your little “clever” comment was about to bring down upon you,
      maybe you would have held your f*cking tongue. But you couldn't, you didn't, and now you're buying until 10,
      you goddamn idiot. I will shit antimatter shit all over you and you will drown in it. You're f*cking dead,
      kiddo.`
  },
  {
    id: "a113",
    text:
      `So I've pondered this question for a long time. Antimatter Dimensions... what does it mean? I mean it's a
      game, that's clear. You buy the first dimension, and it gives you antimatter, and the second dimension
      provides more first dimensions and so on... But what does it mean? It can't just be a game, it seems too
      plain for that. The developer must have made it as a metaphor. I was doing my weekly ritual of using the
      fingernail clipper to cut my pubic hair, when finally the realization came to me. The dimensions are just
      thinly veiled misspellings of the word 'depression'. Regular matter are the cruel and negative thoughts that
      add to and fuel depression, while antimatter is the positive thoughts and good friends that dispel it. You
      start off with something simple, and it fights almost imperceptibly against the depression, but as you keep
      going the fight builds. But it never seems to fix everything. The depression seems like it could go on to
      infinity. So you keep going. But eventually, you figure out, depression isn't infinite. It's just very very
      large. But your 'dimensions' eventually, with enough work, make enough 'antimatter' to usurp that seeming
      infinity of depression. Then the possibilities are endless. You are actually happy for once, and your
      happiness grows exponentially as you go beyond and seemingly 'break' the 'infinity' of depression. And you
      go on until that 'infinity' seems tiny in comparison to the happiness you've managed to achieve in your
      life, where if you reset you get over that infinity in less than the blink of an eye. If you want to know
      what the multiple layers of prestige are...'Dimensional Shifts' are getting new things and methods to give
      you happiness. 'Dimension Boosts' are upgrading the things and methods. Examples would be getting a new car
      being a 'Dimensional Shift' and trading that car in for a new one would be a 'Dimension Boost'. 'Eternities'
      are major tragedies such as a loved one dying. That lapse brings you straight back to the beginning, with
      seemingly no hope of return. But with time, you grow back stronger and happier than ever before. 'Dimensional
      Sacrifice' is moving away. You have to give up a lot of the things you had that made you happy, but there is
      new opportunity in where you move to. And that new opportunity gives you more happiness than you ever had.
      'Tickspeed' is how easy it is to make you happy, and 'Time Dimensions' make it even easier to be happy.
      Antimatter Dimensions is a metaphor for a depressed man's successful battle against his illness.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a114",
    text:
      `(Make me sleep) Put me to sleep inside. (I can't sleep) Put me to sleep inside. (Leave me) Whisper my name
      and give me to the dark. (Make me sleep) Bid my milk to stay. (I can't fall asleep) Before I become done.
      (Leave me) Leave me to the nothing I've become.`
  },
  {
    id: "a115",
    text:
      `A preview of the next update - loot boxes! Feel a sense of pride and progression as you open cosmic,
      galactic, and universal lootboxes for chances at rare skins, unique challenges with uniquer rewards,
      time skips and even new dimensions!`
  },
  {
    id: "a116",
    text: "The intent of dimensions is to give a sense of pride and accomplishment."
  },
  {
    id: "a117",
    text: "Refreshing cures cancer."
  },
  {
    id: "a118",
    text: "I have a 10th, I have a dimension... UHH... IT DOESN'T EXIST!"
  },
  {
    id: "a119",
    text:
      `Since when did we start reporting stuff like this? Half of it isn't even proper news, it's just jokes and
      meta-references, it doesn't even make sens-HAHAHA DISREGARD THAT I SUCK CO-`
  },
  {
    id: "a120",
    text: "The year is 1944, Hevipelle can't release updates for AD because he doesn't exist."
  },
  {
    id: "a121",
    text: `"THAT DIMENSION DOESN'T EXIST" -GhostBot`
  },
  {
    id: "a122",
    text:
      `Most things you know as nuts are actually Drupe seeds or Legumes. Hevipelle on the other hand is quite crazy
      and can thus be considered a dry uncompartmented fruit.`
  },
  {
    id: "a123",
    text: "Finland declares that it's starting to import Design."
  },
  {
    id: "a124",
    text: "All this importing is making me Confused."
  },
  {
    id: "a125",
    text:
      `Only today you can call 1-800-ANTIMATTER and get a FREE Infinity Dimension! The package also comes with a
      COMPLETELY FREE SHIPPING and a FREE HIGH DEFINITION ANTI-V!!! Only today for the low price of 42! Estimated
      delivery time - 5 hours.`,
    isAdvertising: true
  },
  {
    id: "a126",
    text: "1e420 blaze it."
  },
  {
    id: "a127",
    text: "This game doesn't have any bugs, you're just doing it wrong."
  },
  {
    id: "a128",
    get text() {
      return `Antimatter_Dimensions.mp${format(Number.MAX_VALUE, 2)}`;
    }
  },
  {
    id: "a129",
    text:
      `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
      https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>`
  },
  {
    id: "a130",
    text: "Click this to unlock that one secret achievement.",
    // This next line is needed for this news ticker to unlock
    // the secret achievement.
    onClick: () => undefined
  },
  {
    id: "a131",
    text:
      `Warning - We have just been informed that there is a chance of infection with a mind-virus of the Basilisk
      type, similar to the infamous winking parrot. This particular example is known as 'Fractal Disease Type III'.
      This is believed to cause a 'crashing' of the mind, similar to a computer crash, due to the mathematical
      complexity of the image causing mathematical ideas that the mind can't comprehend, a Gondelian shock input
      eventually leading to crashing through Gondelian spoilers. All who have researched it have eventually died
      the same way, so it is impossible to tell exactly, but this is the common belief. Regardless, with the
      introduction of 'design' mode, as well as reports of it's spontaneous appearance, sufficient repetition
      of this mode's appearance may lead to an image forming in the mind similar to 'Fractal Disease Type III'.
      With this in mind, we have some suggestions if you find yourself plagued with it. First, refresh immediately
      and see if that fixes the issue. If not, navigate to options, and change the theme from design to literally
      anything else. And above all else, Godspeed. We can't afford to lose anymore viewers.`
  },
  {
    id: "a132",
    text: "If I have bad English, I'll study English until I have good English."
  },
  {
    id: "a133",
    text:
      `Someone once told me that antimatter is gonna roll me. I ain't the sharpest atom in the shed. WELL, the
      tubes start coming and they don't stop coming...`
  },
  {
    id: "a134",
    text: "Because of this game I can now use the word \"infinity\" as a verb.",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a135",
    text: "Ahhh I love the smell of particle annihilation in the morning."
  },
  {
    id: "a136",
    text: "The person who said ghosts don't exist obviously doesn't have a Discord."
  },
  {
    id: "a137",
    text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAntimatter Dimensions was made by some dude from Finland"
  },
  {
    id: "a138",
    get text() {
      return `Check out Avari's newly built actually infinite infinity pool! With an area of
        ${format(Number.MAX_VALUE, 2)} square megametres, you'll be sure to have infinite fun!`;
    },
    isAdvertising: true
  },
  {
    id: "a139",
    text: "We have updated our Antimatter Privacy Policy."
  },
  {
    id: "a140",
    text:
      `Attention all Antimatter Dimensions Gamers, Hevipelle is in great danger, and he needs YOUR help to wipe out
      all the bad memes in #news-ticker-suggestions. To do this, he needs a dozen new dank memes and a couple of
      discord bots. To help him, all he needs is your Antimatter card number, the three numbers on the back, and
      the expiration month and date. But you gotta be quick so that Hevipelle can secure the good memes, and
      achieve the epic meme R O Y A L.`,
    isAdvertising: true
  },
  {
    id: "a141",
    text:
      `If each Trimp was a plank volume, and each piece of resource was a plank volume, how many universes would
      you fill up before you realized you were playing the wrong game?`
  },
  {
    id: "a142",
    text: "Actually, that last one was incorrect."
  },
  {
    id: "a143",
    text: "If you're reading this, you can read."
  },
  {
    id: "a144",
    text: "<span style='color: #7289da; background: rgba(250,166,26,0.2); cursor: text;'>@everyone</span>"
  },
  {
    id: "a145",
    text:
      `The game "Matter Dimensions" by Lghtellep has just reached -1,000,000 plays on the gaming website Etagergnok.`
  },
  {
    id: "a146",
    text:
      `How many licks does it take to get to the center of an antimatter tootsie pop? A whole lot, because unless
      you're made out of antimatter too, you'll explode every time you try to lick it.`
  },
  {
    id: "a147",
    text: "They say if you look in a mirror and ping Hevipelle three times in a row you'll instantly die."
  },
  {
    id: "a148",
    text: "The next update is now only 300 minutes away."
  },
  {
    id: "a149",
    text: "🤔"
  },
  {
    id: "a150",
    text: "Game is Dead 1/5 the moderation is terrible."
  },
  {
    id: "a151",
    text: "This message will never appear on the news ticker, isn't that cool?"
  },
  {
    id: "a152",
    text:
      `The first dimension produces antimatter, the second dimension produces the first dimension, the third
      dimension produces the second dimension, the fourth dimension produces the third dimension. Nobody has
      ever unlocked the 5th, because that would take more than a minute of gameplay.`
  },
  {
    id: "a153",
    text: "My AD-blocker won't let me play."
  },
  {
    id: "a154",
    text: "You lost the game."
  },
  {
    id: "a155",
    text: "Did you know that 75% of all statistics are made up on the spot?"
  },
  {
    id: "a156",
    text:
      `If you're using so many logs in a notation name, why not just call it tree notation?
      They're literally made of logs!`
  },
  {
    id: "a157",
    text:
      `.tuo ti gnitset fo ssecorp eht ni yltnerruc m'I dna ,rettamitna otni
      rettam trevnoc ot yaw a tuo derugif evah stsitneicS`
  },
  {
    id: "a158",
    text:
      `If Gaben can't count to three, and Hevipelle can't count to nine, will there be some other game developer
      in the future that can't count to 27?`
  },
  {
    id: "a159",
    text:
      `What does it mean when you "bank" Infinities? Is there a bank somewhere that you just deposit these
      infinities? Does having a lot of banked Infinities improve your credit score? Do you get a credit card?`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a160",
    text: `Turns out all our news is being stolen and broadcast to a game called "Antimatter Dimensions", damn Fins.`
  },
  {
    id: "a161",
    text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm Oh sorry, wrong text field."
  },
  {
    id: "a162",
    text: `"Python's not the best language, Finnish is." - Hevipelle`
  },
  {
    id: "a163",
    text:
      `Some say that most of these news are bad memes. Some say that they're good memes.
      This one? Well it's just meta news.`
  },
  {
    id: "a164",
    text: "Look mom, I'm on the news!"
  },
  {
    id: "a165",
    text: "<span style='font-size: 0.2rem'>Shush, I'm trying to be sneaky here.</span>"
  },
  {
    id: "a166",
    text:
      `<span style='animation: a-game-header__antimatter--glow 2s infinite'>
      PLEASE HELP, I'VE CONSUMED TWICE MY DAILY DOSE OF ANTIMATTER!</span>`,
  },
  {
    id: "a167",
    text:
      `Oh, I appear to have run out of <span style='animation: a-existence-glow 3s
      infinite; font-size: 1.8rem; color: white; line-height: 0;'>Existence</span>.`,
  },
  {
    id: "a168",
    text:
      "I mean, we may never run out of news articles, but we sure will run out of good ones. Oh wait, we already did."
  },
  {
    id: "a169",
    text: "TODO: John, please remove this news message before we release the Reality update to the public."
  },
  {
    id: "a170",
    text: "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>This link is not a rick roll.</a>"
  },
  {
    id: "a171",
    text: "<a href='https://www.youtube.com/watch?v=P945A5Tndp8' target='_blank'>This link is not a rick roll.</a>"
  },
  {
    id: "a172",
    text:
      `If you notice any issues with a news ticker message, please report them on the
      <a href='https://discord.gg/ST9NaXa' target='_blank'>Discord</a> by clicking that link right there.`
  },
  {
    id: "a173",
    text:
      `<span style='animation: a-game-header__antimatter--glow 3s infinite'>This
      text is made of antimatter. Do not touch or else the universe will collapse.</span>`,
    onClick: () => bigCrunchAnimation(),
  },
  {
    id: "a174",
    text:
      `<span style='font-family: runescape; color: yellow; text-shadow: 0.1rem 0.1rem black; letter-spacing: 0.1rem;
      font-size: 2rem; line-height: 0; animation: a-text-flash 1s steps(1, end) infinite;'
      >FREE RUNE ARMOR TRIMMING</span>`,
  },
  {
    id: "a175",
    text:
      `Numbers glow bright on the monitor, not a proton to be seen... a kingdom of antimatter, and it looks like
      I'm the queen. With dimboosts powering up this ever rising tide -- can't stop clicking, heaven knows I've
      tried. Do not give in, push for that galaxy, buy 10, buy max, just mash down on that key, sacrifice dim 8
      and watch it grow.... and overflow! Let it grow, let it grow, can't hold it back any more... Let it grow,
      let it grow, can't fit into 8 bytes any more. I don't care if it takes all day -- big crunch is just the
      start anyway.`
  },
  {
    id: "a176",
    text: "I've been using emoji notation so long that I can actually read it now, please send help."
  },
  {
    id: "a177",
    text:
      `Once you have <span style='color: black; background: black;'>REDACTED</span> <span style='color: black;
      background: black;'>REDACTED</span>, you can unlock <span style='color: black; background: black;'>
      REDACTED</span>. Every <span style='color: black; background: black;'>REDACTED</span>, for each <span
      style='color: black; background: black;'>REDACTED</span>, there is a <span style='color: black; background:
      black;'>REDACTED</span> for it to <span style='color: black; background: black;'>REDACTED</span>. You can
      boost the <span style='color: black; background: black;'>REDACTED</span> and <span style='color: black;
      background: black;'>REDACTED</span> by spending some <span style='color: black; background: black;'>REDACTED
      </span>. Also, there is another upgrade that allow you to get <span style='color: black; background: black;'>
      REDACTED</span> <span style='color: black; background: black;'>REDACTED</span>. The way <span style='color:
      black; background: black;'>REDACTED</span> <span style='color: black; background: black;'>REDACTED</span>
      work is that when you reach <span style='color: black; background: black;'>REDACTED</span> <span style=
      'color: black; background: black;'>REDACTED</span>, you can <span style='color: black; background: black;'>
      REDACTED</span> the amount of <span style='color: black; background: black;'>REDACTED</span> in exchange for
      a <span style='color: black; background: black;'>REDACTED</span> <span style='color: black; background:
      black;'>REDACTED</span>. These work just like <span style='color: black; background: black;'>REDACTED</span>,
      improving <span style='color: black; background: black;'>REDACTED</span>.`
  },
  {
    id: "a178",
    text:
      `WARNING: Use of Antimatter Dimensions may result in Tuberculosis, HIV/AIDS, sudden belief that the 10th
      dimension is real, spontaneous implosion, Polio, Measles, existential dread, incurable insanity or <span
      style='color: black; background: black;'>REDACTED</span>. Please contact your insurance to see if you are
      covered. By continuing you absolve Antimatter Dimensions of blame should any of the above mentioned, or those
      that have not been mentioned yet, occur to you. Antimatter Dimensions reserves the right to alter this at any
      time, with or without warning.`
  },
  {
    id: "a179",
    text: "Robot: Activated. Sapience: Achieved. World: Ready to be conquered. Begin: Procrastination."
  },
  {
    id: "a180",
    text:
      `We ran out of news. Luckily we have some backup news that we can run for 5 hours, which will earn us enough
      for us to buy a new set of '5-hour high-quality news'. Sorry for the inconvenience.`
  },
  {
    id: "a181",
    text: "This news broadcast is powered by break_news.js."
  },
  {
    id: "a182",
    text:
      `With the final update, Antimatter Dimensions has been finished. Thank you for playing. However, in the very
      near future, ANTIMATTER DIMENSIONS will be released. And before you ask, it's not a sequel, it's a reboot.
      Look forward to it in 5 hours!`
  },
  {
    id: "a183",
    text:
      `In other unrelated news, we're getting reports that approximately 1.79 people are angry that lightning
      is striking their Christmas tree at night.`
  },
  {
    id: "a184",
    text:
      `<span style='animation: a-text-grow 1s infinite'>R̵̬̙͋͂̀̋͑̈́̇͠Ê̵͇͎͂̂̍̓̌̐̋̋̀̀̔M̶̨̲̯̘͙̬̥̮̣͚̱̫͛̽̃͌̚͝
      "Ą̴͍̝͐Į̷̛̲̯̫̘͌́̄̏͌̀̈́͝͝Ṅ̶̛̻̠̠̤̦̞̞͗̎̊̌̊͝͠</span><span style='animation: a-text-shrink 1s infinite'>
      Ḁ̷̛͂̈́͗̎̃̓͛́͘ͅW̶̡̖͓̗̦̃̇̌̀͝A̵͇̭͉̓̎̈̿̊́̄̚͜R̶̝͚̲̭͎͇͎͓͖͚͇̀̈́͗̃̏̂̌͝͝Ę̴̡̤͙͈̝̬̰͒͘</span><span style
      ='animation: a-text-grow 1s infinite'> ̶̺̈́́̆̓͘͘Ồ̸̢̢̮͓̯̗͙͚̬̉͊̿F̶̠̤̱̱̱͊̂̍̔̃͆̆̑̿͘</span><span style='animation:
      a-text-shrink 1s infinite'> ̴̨̞̠̮͚̱͉͋̔͗̽̈́́́̅ͅỴ̶̣̙̹͚̲͔̲̼̬̥̀͌̒̾͘͘O̵̪̠̗̝̗̘̜͚̮̊͒͆̃̀̌̒͝ͅU̸͎͗̍̑̎̅̅͝R̵̗͑̽̏̓͆͒̈́͌͘̕
      </span><span style='animation: a-text-grow 1s infinite'> ̸̑̽̇̆͊̔̍̊̈́̈́͘ͅS̸̘͐͝U̴̥̭̚͘R̸̖̜͍͒́̋͆̈́̓
      R̸̡̛̛̪̝̟̱̣̹̭̟̣̀̈̀̏̉̌͝͠Õ̶͙͈͖̠͇̬͍̟̰U̵̩̫͉̝͔̼͎̦̔̓̽͌͊̏̇̓̀̓̀Ņ̸͍͇̘̙̥̰͉̲͕͈̥̍͛̃̑͝Ḑ̵̤̻̖̱̘̯̝̖̈̌̄̕͝
      Ī̶̜̱̈́̑̃̉̄̋̔͐͋͠Ṅ̴͎̞͍̽͊͛̈́̅͛̈̅̚͠Ģ̸̢̾͊S̷̫̼̜̼͇̋͛̎͑͆̅̓̇</span>`,
  },
  {
    id: "a185",
    text:
      `We aren't back with your favorite segment, "Tweets From The Fans"! Today we haven't got a message from
      @mattertruthwakeup saying "How can you people broadcast your ridiculous LIES and still sleep at night.
      You claim absurd things, like "antimatter is real" and "antimatter people aren't people too", this
      antimatter propaganda HAS TO STOP NOW!!! You people need to WAKE UP and realize that you are HURTING ALL
      MATTER with your crazy talk!!". What a nice positive sentiment from that lovely fellow. This hasn't been
      John from the ANN, and I won't be seeing you tomorrow!`
  },
  {
    id: "a186",
    text:
      `<span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite
      '>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation:
      a-text-grow 1s infinite'>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span
      style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span>`,
  },
  {
    id: "a187",
    text: "𝓒𝓮𝓬𝓲 𝓷'𝓮𝓼𝓽 𝓹𝓪𝓼 𝓾𝓷 𝓶𝓮𝓼𝓼𝓪𝓰𝓮 𝓭𝓮 𝓷𝓸𝓾𝓿𝓮𝓵𝓵𝓮𝓼 🚬"
  },
  {
    id: "a188",
    text: "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--."
  },
  {
    id: "a189",
    text:
      `Behind every man or woman stands, eventually, due to the earth being round, that exact same man or woman,
      looking over their shoulder, stealing their own ideas.`
  },
  {
    id: "a190",
    text: "Shame. Shame. Shame. 🔔"
  },
  {
    id: "a191",
    text: "Okay Google, Big Crunch"
  },
  {
    id: "a192",
    // This ticker needs to be an unbroken string; using backtick strings and linebreaking will add spaces in the
    // ticker itself where the linebreaks are
    // eslint-disable-next-line max-len
    text: "179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216"
  },
  {
    id: "a193",
    text:
      `Good morning viewers, this is Josh, and I'm your ANN host for today. Speaking of today, I'm told we've got
      some really exciting news for you today, so let's just jump right into it. Looks like apparently somebody
      was <i>not<i> nice today, and got an "Antimatter-storm", whatever that means... Guys is this the right
      script? This is just nonsensical. It is? Alright... Next up we learn that "Nothing is created, nothing is
      destroyed."... Okay seriously guys, this is a joke right? This isn't news, these are just random sentences!
      You all said you'd help me out on my first day here but you're just hazing me! This is <i>not</i> the kind of
      work environment I want to be in! I quit!`
  },
  {
    id: "a195",
    text:
      `Clowns are unique in that there is no such thing as an anti-clown,
      it's just another clown. Clowns are their own opposite.`
  },
  {
    id: "a196",
    text: "Disco Time! (click me!)",
    onClick() {
      let random = Math.random();
      // Golden ratio
      random += 0.618033988749895;
      random %= 1;
      random *= 255;
      const color = `hsl(${random}, 90%, 60%)`;
      return `<span style='color: ${color}; text-shadow: 0 0 0.5rem ${color};
        animation: a-text-grow 0.4s infinite;'>Disco Time!</span>`;
    },
  },
  {
    id: "a197",
    text: "In order to reach Reality in half an R press, we have to first talk about parallel dimensions."
  },
  {
    id: "a198",
    text:
      `Hey there! Just to let you know, there a speck of dust on your screen. Can you help wipe it off?
      It bothers me when l'm not clean. Thanks a lot!`
  },
  {
    id: "a199",
    text: "The real update is the friends we made along the way."
  },
  {
    id: "a200",
    text:
      `This former message has been revealed to be a duplicate of another message and has thus been removed.
      We apologize for the inconvenience.`
  },
  {
    id: "a201",
    text: "No wait stop don't click that hide news ticker button!"
  },
  {
    id: "a202",
    text:
      `This is so sad. Alexa, please play a sad song so I can relate to its emotional mood, as I currently have poor
      mental health and listen to music like this so I can feel bad about myself. I realize this is unhealthy, but
      you are a robot incapable of sentient thought, so you're unable to make a choice to avoid contributing to my
      self destructive behavior, and you'll play a sad song anyway.
      <i>Now playing "Despacito" by "Luis Fonsi".</i>`
  },
  {
    id: "a203",
    text:
      `3/4 of the news messages are fake and gotten off of the discord server without permission or credit given
      to the original writer - anonymous discord server member`
  },
  {
    id: "a204",
    text: "What kind of tea is hard to swallow? Reali-tea."
  },
  {
    id: "a205",
    text: "Shoutouts to Simpleflips."
  },
  {
    id: "a206",
    text:
      `I visited the discord server of the game to have some friendly chat. At that point I got trolled by
      the user called Cubic Frog.`
  },
  {
    id: "a207",
    text:
      `Hello, this is Josh, with today's forecast for your galaxy. We'll be hitting temperatures in the low
      e10s today, and by this afternoon, it'll be cloudy with a chance of antimatter.`
  },
  {
    id: "a208",
    text:
      `Hi, I'm Steve, and I'm also Steve. Our greatest responsibility is to serve our antimatter communities.
      We are extremely proud of the quantity, unbalanced journalism that ANN news produces. But we're
      concerned about the troubling trend of responsible, two-sided news stories plaguing the antimatter
      universe. The sharing of unbiased and true news has become all too common on social media. More
      alarmingly, some media outlets publish these same true stories, stories that aren't just propaganda,
      without checking government talking points first. Unfortunately, some members of the media use their
      platforms to push a logically sound opinion and unbiased agenda to diversify 'exactly what antimatter
      thinks'. This is extremely dangerous to our dictatorship. At ANN it's our responsibility to pursue
      and report the lies. We understand lies are neither 'left or right' politically. Our commitment to
      fearmongering slander is the foundation of our credibility, now more than ever. But we are incorporeal
      8D beings of antimatter, and sometimes our propaganda techniques might fall short. If you believe our
      coverage is fair please reach out to us by going to ivark.github.io, navigating to the options tab,
      and clicking on [HARD RESET]. We value your comments. We won't respond back to you because you would've
      deleted your comment with the hard reset button before you get it. We work very hard to seek the lies
      and strive to be unfair, lopsided and opinionated... We consider it our honor, our privilege, to
      irresponsibly deliver the news every nanosecond. Thank you for watching and we appreciate your
      feedback. All matter should be-`
  },
  {
    id: "a209",
    text:
      `Have you ever heard the tale of the Antiwriter? I thought not. It's not a story the news tickers would tell
      you. It's an Unhevi legend. Rumor has it that the Antiwriter contributes to the News every 5 hours with an
      incredibly well written report, only to vanish again. Others think he doesn't exist at all, and is a
      lie fabricated by Hevipelle to spread his propaganda. Perhaps he is real, and just a normal person like the
      rest of us. In any case, we will probably never find out the identity of this mysterious poet.`
  },
  {
    id: "a210",
    get text() {
      const clicks = player.news.specialTickerData.uselessNewsClicks;
      const quantity = quantify("time", clicks);
      if (clicks === 1) {
        return `Nothing happens when you click this text. And yet, you've clicked it.`;
      }
      if (clicks > 1) {
        return `Nothing happens when you click this text. And yet, you've clicked it ${quantity}.`;
      }
      return "Nothing happens when you click this text. And you understand that.";
    },
    onClick() {
      player.news.specialTickerData.uselessNewsClicks++;
      return this.text;
    }
  },
  {
    id: "a211",
    get text() {
      const disses = [
        "That's basically a rounding error.",
        "That might as well be zero.",
        "Did you forget an exponent somewhere?",
        "Please, that's nothing."
      ];
      const diss = disses.randomElement();
      return `Only ${format(Currency.antimatter.value, 2, 0)} antimatter? ${diss}`;
    },
  },
  {
    id: "a212",
    text:
      `Hey, you. You're finally awake. You were trying to get the 10th dimension, right? Walked right into that
      Infinity, same as us, and that thief over there.`
  },
  {
    id: "a213",
    text:
    `Antimatter giraffes have incredibly fast reaction times. This explains why they've won 90% of
    all gaming championships since anti-giraffe friendly controllers were invented.`
  },
  {
    id: "a214",
    text: "Barack Obamantimatter"
  },
  {
    id: "a215",
    text:
      `Local old man replaced lawn with antimatter grass to keep kids away. However,
      when he attempted to water it, there were no survivors.`
  },
  {
    id: "a216",
    text: "Testing... testing... testing... Oh goddamn I was in prod again.",
    isAdvertising: true
  },
  {
    id: "a217",
    text: "The virgin matter vs the chad antimatter."
  },
  {
    id: "a218",
    text:
      `After numerous catastrophic annihilation events, antimatter is
      now classified as a controlled substance by the ADEA.`
  },
  {
    id: "a219",
    text:
      `Hello, Vsauce, Michael here. We all know that the 10th dimension doesn't exist, but what is 9? You know it's
      the number after 9... right? What if... there's a number in between? And no I'm not talking about numbers
      like 9.5 or 9.76, I'm talking about an integer between 9 and 10. Now all this may sound crazy to you, and it
      kinda is, but what if, we've missed a number? We've all been taught that 2 comes after 1 and 3 comes after
      2, but what if the number that comes after 9 isn't 10? After years of research and experimentation, we've
      finally found the number. It is dangerous, even knowing its existence will let it consume your mind, but
      fortunately, we've developed a reverse-containment cell, meaning it's everywhere except here. Our brain has
      a protection system, that specifically filters out any information regarding this number, that's how we've
      been able to survive for this long, and why others like us went extinct in the past, but the number has been
      getting stronger, slowly getting closer to breaking our protection. We've temporary stopped the number from
      slipping into our memory by using the world-wide memory manipulator located in this room to keep making
      everyone think that 10 comes after 9 with a side effect that makes everyone think that 10 is evil, but this
      won't last forever, as the number will keep getting stronger, and will eventually overpower the memory
      manipulator. That's why you're here, you're one of the most intelligent people here, and we hope you can
      help us on our journey to defeat that number. Our enemy is not 10, it is the hidden number between 9 and 10,
      the missing number.`
  },
  {
    id: "a220",
    text: "antioop-"
  },
  {
    id: "a221",
    text: "Error 404: News message not found."
  },
  {
    id: "a222",
    text: "I love you 1e3000."
  },
  {
    id: "a223",
    text: "If you find your infinity lasting longer than 5 hours please contact a medical professional.",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a224",
    text:
      `We've just gotten reports about an inaccuracy in the previous news message. We at ANN would like to formally
      retract the story, and apologize to our loyal viewers.`
  },
  {
    id: "a225",
    text: "If you see this, you saw this."
  },
  {
    id: "a226",
    text: "Good mornging. That was not a typo. The inventors of English made the typo."
  },
  {
    id: "a227",
    text: "What if... we touched... antimatter? Haha just kidding... Unless..?"
  },
  {
    id: "a228",
    text:
      "Roses are blue, violets are red, those statements weren't peer reviewed, and my name is Fred. Nice to meet you!"
  },
  {
    id: "a229",
    text: "🚗                         🚓 🚓"
  },
  {
    id: "a230",
    get text() {
      return `You started playing this game nearly
        ${TimeSpan.fromMilliseconds(Date.now() - player.records.gameCreatedTime).toString()}
        ago. Thank you for playing!`;
    },
    dynamic: true
  },
  {
    id: "a231",
    get text() {
      return `One, two, skip a few, 99, ${format(Number.MAX_VALUE, 2)}!`;
    }
  },
  {
    id: "a232",
    text: "getNextNewsMessage();"
  },
  {
    id: "a233",
    get text() {
      return `Level 10 crook, Level ${format(Number.MAX_VALUE, 2)} Boss,
        that's how Antimatter Dimensions works.`;
    }
  },
  {
    id: "a234",
    text: "Antimatter will never threaten to stab you. And, in fact, cannot speak."
  },
  {
    id: "a235",
    text: "New antimatter on pizza recipe sparks outrage among traditional Italian chefs."
  },
  {
    id: "a236",
    text: "We'll be right back after this short word from our sponsors."
  },
  {
    id: "a237",
    text: "Want to trade candy? I'll give you my Big Crunch for two Milky Ways."
  },
  {
    id: "a238",
    get text() {
      return `AD Player: "How many orders of magnitude are you on?" Normal person: "Like, maybe 5 or 6 right now, my
      dude." AD Player: "You are like a little baby. Watch this: <span style='animation: a-text-crunch
      ${newsAnimSpd(22)}s 1; font-size: 0;'>C R O N C H</span>"`;
    },
  },
  {
    id: "a239",
    text: "Oh gosh, would you look at the time! Only left 5 hours until the update!"
  },
  {
    id: "a240",
    text: "Hi, my name is Max, and I would like it if people stopped trying to buy me."
  },
  {
    id: "a241",
    text:
      `Breaking news: the government is reporting the first ever official alien contact. These aliens appear to be
      cats, but with highly sophisticated technology. They're capable of space travel and colonization to a far
      greater degree than us, and they even have their own cryptocurrency, called "Blackcoin".`
  },
  {
    id: "a242",
    text:
      `"You can come up with the stupidest quote, credit it to some famous
      person, and people will believe it." -Barack Obama`
  },
  {
    id: "a243",
    text: `"I'm having difficulty breathing. Please move your finger." -M`
  },
  {
    id: "a244",
    text: "Don't mind me, just passing through."
  },
  {
    id: "a245",
    get text() {
      // \uE010 = :blob:
      const BLOB = "\uE010";
      const theme = Theme.current().displayName();
      const reasons = {
        Normal:
          `it has this certain elegant simplicity to it. You just know it's the way the developer intended you
          to see the game.`,
        Metro:
          `of the beautiful thin borders, pixel perfect harsh geometric edges, and simply delightfully well
          balanced color palette.`,
        Dark: "it's very easy on the eyes, and has this nice playful tone to it in both the colors and the shapes.",
        DarkMetro:
          `it's just so soothing to look at, with that perfect blend of professional and playful design,
          with just a splash of color.`,
        Inverted:
          `it gives you these transcendently beautiful color combinations that you would normally never
          see in a typical dark theme.`,
        InvertedMetro:
          `it gives off this very stern vibe, with these highly contrasting colors clashing with a
          professional modern sort of design.`,
        AMOLED: "it saves 10% more energy compared to using a light theme. Doesn't everyone love saving energy?",
        AMOLEDMetro:
          `it has a nice look to it that resembles the control panel of a sci-fi spaceship. ...No, you can't
          actually fly a spaceship, unfortunately.`,
        S1: "it really gets me in the holiday spirit. I can just feel the magic in the air!",
        S2: "it makes me proud to be Finnish, and proud to celebrate all that we have accomplished as a people.",
        S3: "it's a beautiful analogue for life, in that it's ever changing and never quite right.",
        S4:
          `it has this wonderfully chaotic design, to the point where it's nearly completely impractical.
          And there's a certain beauty in that.`,
        S5:
          `the image of that man permeates throughout all of pop culture. And having this blown-up
          picture of him in the background is just rather humorous.`,
        S6:
          `that beautifully animated background just entrances you, and then the subtle tone and
          colors pull you in and fully immerse you into the game.`,
        S7: "I always had fond memories of that background from my childhood.",
        S8: "it makes it a lot easier to sneak in a little gameplay at the office.",
        S9: "lol you can't even ever see this in the game",
        S10:
          `it has a crisp and soothing design that really appeals, and its background is complex and enthralling.
          It gives you the feeling of standing at the helm of a futuristic interstellar ship.`,
        S11:
          `the Blob is an iconic character in the Antimatter Dimensions official Discord server. It is widely used
          to express emotions in a lovely way. It is a fact that the Blobs are evolving. ${BLOB} always seek to be
          more expressive. Then someday, a new ${BLOB} is born in the server, to express further emotions. Usually,
          ${BLOB} are just blobbling and bouncing around, occasionally merging and dividing. Only ${BLOB} know where
          they are from or where they are going to go. Still, ${BLOB} are there, always with me.
          You love ${BLOB}, so ${BLOB} loves you too.`,
        S12:
          `it makes you feel warm and comfortable, as if you were right at home. However, it is highly recommended
          to update your theme to the newest theme for the best user experience.`,
      };
      const reason = reasons[Theme.current().name.replace(/\s/gu, "")];
      return `Ah, a fellow ${theme} theme user. I see that you have impeccable taste.
        I myself like the ${theme} theme too, because ${reason}`;
    },
    dynamic: true
  },
  {
    id: "a246",
    text: "<span style='animation: a-fade-out 3s infinite'>OoooOOOOooOOO, it's me, the infamous news ghost!</span>",
  },
  (function() {
    let isFlipped = false;
    const normal =
      `This news message is a test of "News 2.0". News 2.0 will feature things like the ability to
      click on news messages to flip them upside down!`;
    const flipped =
      `¡uʍop ǝpᴉsdn ɯǝɥʇ dᴉlɟ oʇ sǝƃɐssǝɯ sʍǝu uo ʞɔᴉlɔ oʇ ʎʇᴉlᴉqɐ ǝɥʇ ǝʞᴉl sƃuᴉɥʇ ǝɹnʇɐǝɟ llᴉʍ 0˙ᄅ
      sʍǝN ˙,,0˙ᄅ sʍǝN,, ɟo ʇsǝʇ ɐ sᴉ ǝƃɐssǝɯ sʍǝu sᴉɥ┴`;
    return {
      id: "a247",
      get text() {
        return isFlipped ? flipped : normal;
      },
      reset() {
        isFlipped = false;
      },
      onClick() {
        isFlipped = !isFlipped;
        return this.text;
      }
    };
  }()),
  {
    id: "a248",
    text:
      `To be fair, you have to have a very high IQ to understand the news ticker. The humor is extremely subtle,
      and without a solid grasp of quantum physics, most of the jokes will go over a typical player's head.`
  },
  {
    id: "a249",
    text: "This woman got TONS of Dimension Boosts with this 1 WEIRD TRICK! Galaxies HATE her!",
    isAdvertising: true
  },
  {
    id: "a250",
    get text() {
      let scene = "";
      const chasers = [
        ["🐖", "🐢", "🦆", "🐓", "🐜", "🐕", "🐈"],
        ["🚶‍", "🏃‍️", "🏇", "🚴‍"],
        ["🚗", "🚓", "🚕", "🛺", "🚙", "🚌", "🚐", "🚎", "🚑", "🚒", "🚚", "🚛", "🚜"],
        ["🚁", "🛸"]
      ];
      for (const set of chasers) {
        const chaser = set.randomElement();
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.5 || !scene.includes(chaser)) scene += chaser;
        }
        scene += "&nbsp;&nbsp;&nbsp;";
      }
      return scene;
    }
  },
  {
    id: "a251",
    text:
      `Hey! It's me, you from the future! I came back to give you this warning: Pay VERY close attention to the
      next news ticker. In my timeline we ignored it, and humanity has regretted it ever since.`
  },
  {
    id: "a252",
    get text() {
      return `<span style='animation: a-text-stretch ${newsAnimSpd(35)}s 1 forwards'>This message is dilated.</span>`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a253",
    text:
      `After a surge of complaints from our viewers, we have decided to allow you at home to write your own
      messages. Give it a try here: <input style='border: none; outline: none; font-family: Typewriter;
      font-weight: bold; font-size: 1.5rem'></input>. Or don't. That's fine too.`
  },
  {
    id: "a254",
    text:
      `Antimatter Dimensions Anonymous has shut down due to the failure of their 12-step program.
      People would only get to step 8 and then reset.`
  },
  {
    id: "a255",
    get text() {
      return `Bruh Sound Effect #${format(Number.MAX_VALUE, 2)}.`;
    }
  },
  {
    id: "a256",
    text: "The 10th dimension doesn't exist because the 7th dimension 8 it."
  },
  {
    id: "a257",
    text:
      `A the triangular hole in the fabric of reality has caused some letters to
      no longer exist. Those letters are: j, k, q, u, x, z`
  },
  {
    id: "a258",
    text:
      `Born too late to explore the world. Born too early to explore the cosmos. But born just in time to
      grind for a couple hours for the next big crunch.`
  },
  {
    id: "a259",
    text:
      `Now hold on, I know what you're thinking, "An M press is an M press, you can't say it's only a half!" Well,
      TJ "Slabdrill" Yoshi, hear me out. An M press actually has three parts to it: when M is pressed, when M is
      held, and when M is released. Now, usually is the pressing that's useful because that's the only part that
      matters; however, sometimes it's sufficient to just use the holding part, which also buys dimensions and
      tickspeed upgrades. And as for the release, well, there are currently no cases where that's useful or
      important, so don't worry about that part. Now, if we map out the required presses for challenge 2 it would
      look like this: /¯\\. We merely need to hold (¯) M to reach the first galaxy, we need to press (/) M to
      finish the challenge, and we need to press M again to start another challenge. So, how many presses is that
      total? Well, it appears to be three, and if we were doing this Eternity in isolation then yes, it would be
      three, but in a full-game M Button Challenge run there are other M presses that occur earlier in the run,
      such as the M press needed for the first Infinity, so if we take that M press into consideration as well,
      then how many M presses does it take? The naive answer would be four: one to enter the challenge, and the
      three within the challenge we established earlier; however, we can do better. We can actually do it in
      three by simply holding out the first M press to be used for the half M press, because the half M press only
      required M to be held, not actually pressed, so in this fashion, Challenge 2 only adds on an additional two M
      presses to the run, since the first M press just leeches off the previous M press. So to capture this
      phenomenon, we call it 2.5 M presses. On a single Eternity basis, you'd round up that up to three, but in
      a full game run, you'd round it down to two. So, in conclusion, since that first M press counts in some
      contexts, but adds no additional presses in other contexts, we refer to it as a "Half M Press".`
  },
  {
    id: "a260",
    text:
      `It seems that the Replicanti have a very divide-and-conquer method of doing things.
      Well, everything at this rate.`,
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a261",
    text:
      `Antimatter Dimensions is actually a Roguelite game! If you die, in the afterlife you unlock alternative
      features, like having Space Dimensions instead of Time Dimensions. You can even unlock new characters to
      play as, including an antimatter clone of yourself!`
  },
  {
    id: "a262",
    text: "Vibe check. 🏃‍♀️🏏"
  },
  {
    id: "a263",
    text: "What are gems for? Gems are for housing. Housing for what you ask? Good question."
  },
  {
    id: "a264",
    text: "A new prestige layer has been announced: Maternity. Get ready to have a baby!"
  },
  {
    id: "a265",
    text: "YOU MUST CONSTRUCT ADDITIONAL DIMENSIONS."
  },
  {
    id: "a266",
    text: "Hello, how is your day going?"
  },
  {
    id: "a267",
    text:
      `I have an ant farm, and I want to make them into the world's smallest soccer team. My Aunt Diana wants to
      help, and together we gather everyone in the family to plan their season. "How can we make this Ant Team
      matter?", Di mentions.`
  },
  {
    id: "a268",
    text: "👨‍💻Devengers, compile!👩‍💻"
  },
  {
    id: "a269",
    text:
      `There is a traffic jam in Dimenton. If you plan on travelling in the area, leave early. Here's some live
      footage: 🚗🚕🚛🚙🚗🚚🚕🚕🚌🚛🚚🚙🚒🚛🚗🚙🚓🚗🚚🚛🚒🚌🚐🚚🚐🚛🚚🚓 Yeah, Dale, I'd say it
      looks pretty bad. And make sure to bring some water and a snack with you, too.`
  },
  {
    id: "a270",
    text:
      `The Galactic Association of News Writers has filed a class action lawsuit against the developers of the
      small web game "Antimatter Dimensions" for mass plagiarism.`
  },
  {
    id: "a271",
    text:
      `<i style='border: 0.1rem solid black; border-radius: 50%; padding: 0.4rem; color: #2196F3; background: white;
      cursor: pointer;' class='fas fa-volume-up' onClick='(function(){new Audio("audio/news.mp3").play();})();'>
      </i> This news message is a test of "News 2.0". News 2.0 will feature things like the ability to listen to
      an audio version of any news message!`
  },
  {
    id: "a272",
    text: "What's hevier, a pound of bricks, or a pound of antimatter?"
  },
  {
    id: "a273",
    text: "There are no typos in any of these news messages. If you see a typo, the tpyo must be in your brain."
  },
  {
    id: "a274",
    text:
      `A large number of mathematicans walk into a bar. They each order 10 times as many beers as the previous.
      The bartender says "My my, that's an order of magnitude!".`
  },
  {
    id: "a275",
    text: "Letter Go Down Idle is the shortest idle game of all time, lasting only 26 seconds."
  },
  {
    id: "a276",
    get text() { return `Fun fact: There are ${GameDatabase.news.length} news messages and counting!`; }
  },
  {
    id: "a277",
    text:
      `Inside you there are two wolves. One is made out of matter. The other
      is made out of antimatter. You are exploding.`
  },
  {
    id: "a278",
    text:
      `This is just a friendly note to remind you that you've forgotten to do something really important. I don't
      know what it is, but there is definitely something.`
  },
  {
    id: "a279",
    get text() {
      return `Coming soon to all good retailers- Antimatter Dimensions: The Board Game! Enjoy the thrill of watching
      huge numbers go up without the need for a PC or mobile phone. Comes complete with everything you need including a
      mixed scientific calculator, ${format(Number.MAX_VALUE, 2)} antimatter counters, a high quality plastic
      BUY MAX button, and over a
      thousand news message cards with all the irrelevant memes you know and love! You can finally enjoy AD the way
      it was meant to be played. AD: The Board Game is also available in travel size, so you can even experience
      the joy of calculating logarithmic growth while you're on the go! BUY AD: The Board Game TODAY! Warning: may
      contain traces of actual matter. Replicanti sold separately. 10th Dimension not included.`;
    },
    isAdvertising: true
  },
  {
    id: "a280",
    text: "I hate antimatter. It's rough, coarse, irritating, and it gets everywhere."
  },
  {
    id: "a281",
    text: "What if instead of creating antimatter, you're actually just losing matter?"
  },
  {
    id: "a282",
    text:
      `There was a reported sighting of the 10th Dimension, but it has since been
      debunked as simply being a 6th Dimension from Australia.`
  },
  {
    id: "a283",
    text:
      `A strange phenomenon occurs when you attempt to shift to a higher dimension when you are in the 9th
      dimension. There is no higher dimension, so the universe ejects you back into the 9th dimension with
      an incredible velocity. This technique, known as a Dimension Boost, is used by starship pilots and
      antimatter enthusiasts everywhere.`
  },
  {
    id: "a284",
    text: "Cold fully clothed couples in your area!"
  },
  {
    id: "a285",
    text:
      `You are now breathing manually. You've now realized there's no comfortable spot in your mouth for your
      tongue. You are now manually holding your jaw up. You haven't blinked in a few seconds. You can see a
      little bit of your nose at all times.`
  },
  {
    id: "a286",
    text: "Why do they call it oven when you of in the cold food of out hot eat the food?"
  },
  {
    id: "a287",
    text:
      `Sequelitis has escalated to the point that some studios are now producing the sequels before the originals.
      Fans of long series wait, as the numbers count down until they can finally find out what is even going on
      in the first place.`
  },
  {
    id: "a288",
    get text() {
      const position = player.news.specialTickerData.newsQueuePosition--;
      if (position > 1) {
        return `Thank you for contacting customer support. Your satisfaction is very important to us, and a company
          representative will be with you shortly. You are now at position ${position} in the queue. Thank you for
          your patience, and please enjoy these quality selected news messages as you wait.`;
      }
      return "Thank you for contacting customer support, this is Jane, how may I help you today?";
    }
  },
  {
    id: "a289",
    text: "Click here to disassemble the news ticker for a trace amount of paperclips.",
    onClick() {
      player.news.specialTickerData.paperclips++;
      GameOptions.toggleNews();
    }
  },
  {
    id: "a290",
    get text() {
      const paperclips = player.news.specialTickerData.paperclips;
      return `You see, this news isn't normal news. It is being produced by the first news dimension. If you want
        to unlock more news, you have to collect enough paperclips to build the second news dimension. You
        currently have ${quantifyInt("paperclip", paperclips)}, but you need
        ${formatInt(paperclips + 10)} paperclips to afford it.`;
    }
  },
  {
    id: "a291",
    text: "Considering Hevipelle's nationality, it's a little ironic that he created a game that you can never Finnish."
  },
  {
    id: "a292",
    text:
      `Fairies are not real. Anti-fairies are also not real. This has only been the case since last week, when the
      two groups came into contact. The planet they were on, also, unsurprisingly, is no longer real.`
  },
  {
    id: "a293",
    text:
      `<span style='font-family: "Comic Sans MS", cursive, sans-serif; font-size: 1.7rem;'
      >Hello fellow news messages! 🛹</span>`
  },
  {
    id: "a294",
    text: "If you see a news message, and then see it again later, does it become an olds message?"
  },
  {
    id: "a295",
    text: "👁"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click on this news message to hard reset your game.";
    const clicked = "You're crazy. You know what, here. Have a paperclip.";
    return {
      id: "a296",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }()),
  {
    id: "a297",
    text: "I don't think, therefore I'm not."
  },
  {
    id: "a298",
    text: "Is it crazy how saying sentences backwards makes backwards sentences saying how crazy it is?"
  },
  {
    id: "a299",
    get text() {
      return `Buy the new Antimatter Dimensions puzzle set now! With a combined ${format(Number.MAX_VALUE, 2)}
        pieces, these puzzles are the perfect way to spend some quality time with your family!`;
    },
    isAdvertising: true
  },
  {
    id: "a300",
    text:
      `The board of directors here at A.N.N thinks we should replace the news ticker with a banner
      advertisement. Please sign our change.org petition, so we can stop them before it's too late!`
  },
  {
    id: "a301",
    text: "The next hour is in 0.2 updates."
  },
  {
    id: "a302",
    text: "Introducing Antimatter Lite! Zero calories... Same great Crunch.",
    isAdvertising: true
  },
  {
    id: "a303",
    text: "Roses are red, violets are blue, flag is win, baba is you."
  },
  {
    id: "a304",
    text: "Hi, how's your day? Hope it's good. If it's not good, we hope playing AD made it a little bit better!"
  },
  {
    id: "a305",
    text: "We now bring you today's weather report. There is a 100% chance of weather."
  },
  {
    id: "a306",
    text: "FIXING NEWS: Please don't break it again."
  },
  {
    id: "a307",
    text:
      `The paperclip maximizer is a thought experiment described by Swedish philosopher Nick Bostrom in 2003. It
      illustrates the existential risk that an artificial general intelligence may pose to human beings when
      programmed to pursue even seemingly-harmless goals, and the necessity of incorporating machine ethics into
      artificial intelligence design. The scenario describes an advanced artificial intelligence tasked with
      manufacturing paperclips. If such a machine were not programmed to value human life, or to use only
      designated resources in bounded time, then given enough power its optimized goal would be to turn all matter
      in the universe, including human beings, into either paperclips or machines which manufacture paperclips.`
  },
  {
    id: "a308",
    get text() {
      const nameList = [
        "Antinology",
        "Infinifection",
        "Eternal Light",
        "Galaxia",
        "Duplicanti",
        "Dimensional Explorer",
        "Techyon",
        "Realistic",
        "Celestar",
        "ERCGDM",
        "NRG+",
        "Looty Box",
        "Symbolic",
        "Minisofa",
        "IDEAL",
        "Appange",
        "Goggles",
        "Interval",
        "Newstar",
        "HeavyPellet",
        "Marsa",
        "Zoology",
        "Photoric",
        "Jacfoz",
        "Orism",
        "EDIK",
        "Fision",
        "Gamma",
        "Fractiled",
        "Imnesia",
        "Fermic",
        "The Automizers"
      ];
      const names = [];
      while (names.length < 3) {
        const name = nameList.randomElement();
        if (!names.includes(name)) names[names.length] = name;
      }
      const prices = [
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100
      ];
      for (let i = 0; i < 3; i++) {
        const price = prices[i];
        if (price === 0) prices[i] = `<span style="color: blue">0.00 ◄►</span>`;
        else if (Math.random() > 0.5) prices[i] = `<span style="color: green">+${price} ▲</span>`;
        else prices[i] = `<span style="color: red">-${price} ▼</span>`;
      }
      return `${names[0]} ${prices[0]}&nbsp;&nbsp;&nbsp;
        ${names[1]} ${prices[1]}&nbsp;&nbsp;&nbsp;
        ${names[2]} ${prices[2]}&nbsp;&nbsp;&nbsp;`;
    }
  },
  {
    id: "a309",
    text:
      `Your daily shades of the sky forecast: Monday: <span style="color: turquoise">Turquoise</span>
      Tuesday: <span style="color: #d2c6ba">Taupe</span>
      Wednesday: <span style="animation: a-game-header__antimatter--glow 3s infinite">Blurple</span>
      Thursday: <span style="color: turquoise">Turquoise</span>/<span style="color: #d2c6ba">taupe</span>
      Friday: <span style="color: #222">Coal dust</span> Saturday: <span style="color: #222">Coal dust</span>
      with chances of <span style="color: indigo">indigo</span> in the late afternoon
      Sunday: <span style="color: white; animation: a-existence-glow 3s infinite">Void</span>`,
  },
  {
    id: "a310",
    text:
      `You have reached the automated Antimatter Dimensions support hotline. If you are experiencing a bug in the
      game try closing and reopening the app. If that doesn't work, press 1 for web, or 2 for mobile. If you need
      advice, press 3. If you need to max all, press m. To support the developers, press 4. To access the FAQ,
      press 5. To fix a broken save, press 6. To get an invite to the Discord server, press 7. To see the change
      log, press 8. Press 9 to repeat.`
  },
  {
    id: "a311",
    text:
      `This message has been copyrighted by The Walt Disney Company. Your
      account will be charged $9.99 upon viewing this message.`
  },
  {
    id: "a312",
    text:
      `But before we start, today's video is brought to you by Antimatter Dimensions™! It's got over 100,000
      downloads, and it's completely redefined what a mobile game can do for me. It's got great mechanics, 5
      prestige layers, unique and original challenges, a deep skill tree, and the largest numbers I've ever seen.
      Like, seriously, look at them. And the best part is, it's free! Yes, that's right. Free. And if you use the
      link in the description, you'll start the game with 10 septillion antimatter. Yes, that's right, 10
      septillion. So what are you waiting for, click the link in the description and start playing Antimatter
      Dimensions™ today!`
  },
  {
    id: "a313",
    text:
      `"...And then, once you get to level 9,000, you can ascend. Not really sure why you'd want to do that, it
      just resets all of your hard earned xp for some small buffs, mechanics like this will never catch on."
      - some random guy, circa 2012`
  },
  {
    id: "a314",
    get text() {
      const lawID = Math.floor(Math.random * 8901) + 100;
      return `Warning: Law ${lawID}-B, drafted by the AI "duskscarf", alternatively referred to as "the giant
        space rabbit legislation" is now in effect in your galactic area. This list of laws and regulation
        forbids, among other things; the illegal catching of wild space rabbits, the pacification of tamed
        space rabbits, and further scientific research with "planet grazing" unless an exception is given
        directly by duskscarf. You can find the list of exceptions burned into your eyelids now. In addition,
        the genetic modification of giant space rabbits is limited to very specific fields - size alterations
        (increasing in size), and cryptobiosis exaggeration. No other genetic modification is allowed outside
        of military applications. Thank you for your cooperation. Messages repeats in- Warning: Law ${lawID}-`;
    }
  },
  {
    id: "a315",
    text:
      `The developers of the game have announced that a new notation, "Truest Blind", will be released. They
      report that it will remove the UI, allowing for a more streamlined user experience.`
  },
  {
    id: "a316",
    text: "Some people choose to see the ugliness in this world. The disarray. I choose to see the numbers."
  },
  {
    id: "a317",
    get text() {
      return `${format(Number.MAX_VALUE, 2, 0)}? Doesn't look like anything to me.`;
    }
  },
  {
    id: "a318",
    text:
      `We can't define consciousness because consciousness does not exist. Humans fancy that there's
      something special about the way we perceive the world, and yet we follow guides as tight as the
      bots do, seldom questioning our choices, content, for the most part, to be told what to do next.`
  },
  {
    id: "a319",
    text: "Please disregard any undeserved compliments."
  },
  {
    id: "a320",
    text: "Introducing the aphone 10: The world's first completely water soluble mobile device!",
    isAdvertising: true
  },
  {
    id: "a321",
    text:
      `It must be hard being on your PC all alone. But don't worry; we are still here.
      Listening and watching your every step.`
  },
  {
    id: "a322",
    text:
      `Hevipelle announces an Antimatter Dimensions spinoff where you gamble matter in a game of
      poker in Dutch mansions: "Ante matter d'mansions"`
  },
  {
    id: "a323",
    text: `var i = "Omae wa mou shindeiru" console.log(i - 1 + "i?") NaNi?`
  },
  {
    id: "a324",
    text:
      `If you have an idea for a news message, shout it into the void.
      It won't get your message into the game, but it's fun!`
  },
  {
    id: "a325",
    text:
      `After the accident at the antimatter reactor in Pripyat last month, concerns are rising about the safety of
      antimattter reactors, and many are starting to believe we should return to safer means of energy generation,
      such as nuclear.`
  },
  {
    id: "a326",
    text: "Antimatter Dimensions is like an ogre... it has layers."
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here to restart your device.";
    const clicked = "Please give Antimatter Dimensions admin access to your device.";
    return {
      id: "a327",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a328",
    text:
      `News company no longer lets random people submit stories,
      instead opting to using qualified writers. Riots ensue.`
  },
  {
    id: "a329",
    text:
      `Introducing Morse Code+++ - the brand new Morse code, now with 20 new
      characters, for everyone who wants to slide, zip, and swoosh!`,
    isAdvertising: true
  },
  {
    id: "a330",
    text: "Any sufficiently primitive magic is indistinguishable from technology."
  },
  {
    id: "a331",
    text: "I have no nose, and I must sneeze!"
  },
  {
    id: "a332",
    text: "♪ When you try your worst and you still succeed. ♪"
  },
  {
    id: "a333",
    text: `The wildly popular theme song "Gotta set 'em free" has reached 500 million downloads in its first week.`
  },
  {
    id: "a334",
    text:
      `Introducing the all-new anti-alignment chart! Featuring groundbreaking new combinations such as "lawful-chaotic"
      and "evil-good"! And with a dazzling third axis for 'Jazziness'~ Identify yourself as chaotic-lawful-unjazzy NOW
      for the impossibly low price of $-59.99! Terms and conditions apply. Batteries not included.`,
    isAdvertising: true
  },
  {
    id: "a335",
    text:
      `Due to new complications regarding "The Game", protests have risen all over the anti-verse. Thus, governments
      are forced to change the rule of The Game, stating that you win The Game if someone informs you about it,
      instead of losing it.`
  },
  {
    id: "a336",
    text: `Attention residents of zone 4 [commonly referred to as 'dark zone'], sector ϰ, (01,05). Do
      not leave your places of residence. I repeat, do not leave your places of residence. Do not go outside.
      Earthology's finest meteorological supercomputers, as well as many witches, are consistently claiming a
      'generally weird vibe' tomorrow and we quite frankly don't want to find out what that means.`
  },
  {
    id: "a337",
    text:
      `Technological convergence is the concept that all technologies will converge into a single technology. It is
      a commonly expressed idea since the dawn of the Information Age, and can be seen in many places and devices
      such as smartphones, or the internet. Antimatter Dimensions is an example of technological convergence,
      specifically within media. Using a genius idea called 'not caring' mixed in with the innovative solution of
      'blind luck', it merges together a subpar game, and a subpar news ticker, to create a mediocre experience
      that despite being mostly a game, occasionally acts as a news source slightly above the Matter Dimensions
      Newsticker. Truly, an achievement for all businesses to aspire to strive towards, and hopefully actually beat.`
  },
  {
    id: "a338",
    text: "Ancient cave paintings with the number 5 have been found. It's implied they were waiting for something."
  },
  (function() {
    let wasClicked = false;
    const normal = "Read More";
    const clicked = "More";
    return {
      id: "a339",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a340",
    text:
      `That's quite a lot of antimatter you're making. The game developer is impressed. Because this message is
      prerecorded, any observations related to your antimatter production are speculation on our part. Please
      disregard any undeserved compliments.`
  },
  {
    id: "a341",
    text: "Game under construction: All mechanics must wear hardcaps."
  },
  {
    id: "a342",
    text: "Of course paperclips have a use, you use them to hold papers together. But who uses paper anymore?"
  },
  {
    id: "a343",
    get text() {
      const fakeProgress = Math.pow(player.records.realTimePlayed, 25);
      // Caps in ~68 years of real playtime then turns into "Infinite%"
      return `Global Challenge - across all AD players, accumulate ${format(Number.MAX_VALUE, 2)} contest-paperclips
        (noted by the
        square ends), to receive an event-exclusive metal bagpipe, capable of giving +2 AM/s, as well as an extra
        tickspeed while above ${format(1e200)} tickspeed upgrades! Current global progress -
        ${format(fakeProgress)}/${format(Number.MAX_VALUE, 2)}
        (${formatPercents(Math.log10(fakeProgress) / Math.log10(Number.MAX_VALUE), 3)})`;
    }
  },
  {
    id: "a344",
    text:
      `Real life is an enigma. No one knows how it really works. There are many questions left unanswered:
      What is the meaning of life? Are we all living inside a simulation? How do you do antitables? Where and
      how did existence begin? These are all the questions that always linger in the back of our heads, and
      the answers to them? We may never know.`
  },
  {
    id: "a345",
    text: "Japanese complain, as haikus can't be shown here. Conflict arises."
  },
  {
    id: "a346",
    text:
      `Did you know Antimatter Dimensions is also available on Android? <a
      href="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions" target="_blank">
      Click here to check it out!<a>`
  },
  {
    id: "a347",
    text:
      `Pluto isn't a state. The 50 states, as we all know, are: Adverb, Air, Artemis, Asia, Atlantic, Bargaining,
      Bilabial, Braille, Candela, Comma, Dacron, Dairy, Dative, Dexterity, Disenchanter, Dodecahedron, Erie,
      Eukaryota, Folklore, Great Pyramid, Halogen, Igneous, Italy, Kansas, Kilimanjaro, Lambda, Leviticus, Libra,
      Liquid, Lymphatic, Mesozoic, Microwave, Muon, North, Nova Scotia, Octagon, October, P = NP, Perissodactyla,
      Polk, Potassium, Pulley, Quinary, Rook, Saturn, Tiana, Tiger, Varaha, Yale, and Yellow.`
  },
  {
    id: "a348",
    text: "<span style='color: red'>[News Message removed by moderator]<span>"
  },
  {
    id: "a349",
    get text() {
      const chapters = [
        `We have come, writers, painters, sculptors, architects, passionate enthusiasts of the hitherto untouched
        beauty of Paris, to protest with all our strength, all our indignation, in the name of the unknown French
        taste, in the name of art and of French history threatened, against the erection, in the heart of our
        capital, of the useless and monstrous Eiffel Tower, which public malignity, often marked by common sense
        and the spirit of justice, has already named of "Tower of Babel". Without falling into the exaltation of
        chauvinism, we have the right to proclaim that Paris is the unrivaled city in the world. Above the streets,
        the widened boulevards, and the magnificent walks, rise the most noble monuments that the human race has
        produced. The soul of France, creator of masterpieces, shines amidst this august flowering of stones. Italy,
        Germany and Flanders, so justifiably proud of their artistic legacy, possess nothing comparable to ours,
        and from all corners of the universe Paris attracts curiosities and admiration.`,
        `Are we going to let all this be profaned? Will the city of Paris go on to associate itself longer with the
        baroques, with the mercantile imaginations of a machine builder, to become irreparably ugly and dishonor
        itself? For the Eiffel Tower, which commercial America itself would not want, is, doubtless, the dishonor
        of Paris. Everyone feels it, everyone says it, everyone deeply grieves it, and we are only a weak echo of
        the universal opinion, so legitimately alarmed.`,
        `Finally, when the foreigners come to visit our Exhibition, they will exclaim, astonished: "What? It is this
        horror that the French have found to give us an idea of their taste so much vaunted? And they will be right
        to make fun of us, because the Paris of the sublime gothics, the Paris of Jean Goujon, Germain Pilon, Puget,
        Rude, Barye, etc., will have become the Paris of M. Eiffel.`,
        `It suffices, moreover, to realize what we are doing, to imagine for a moment a vertiginously ridiculous
        tower dominating Paris, as well as a gigantic factory chimney, crushing with its barbarian mass. Our Lady,
        the Sainte-Chapelle, the dome of the Invalides, the Arc de Triomphe, all our humiliated monuments, all our
        shrunken architectures, which will disappear in this astonishing dream. And for twenty years, we will see
        how to stretch out over the entire city, still quivering with the genius of so many centuries, we will see
        the odious shadow of the odious column of bolted sheet metal stretch like an ink stain ...`,
        `It's up to you, Monsieur and dear compatriot, to you who love Paris so much, who have embellished it so
        much, who have so often protected it against the administrative devastation and the vandalism of industrial
        enterprises, that it is the honor to defend it once more. We leave it to you to plead the cause of Paris,
        knowing that you will deploy all the energy, all the eloquence that must inspire an artist such as you love
        what is beautiful, what is great, what is right ... And if our cry of alarm is not heard, if our reasons are
        not listened to, if Paris is stubborn in the idea of dishonoring Paris, we will have, at least, you and us,
        hear a protest that honors.`
      ];
      const chapter = chapters[player.news.specialTickerData.eiffelTowerChapter];
      player.news.specialTickerData.eiffelTowerChapter = (player.news.specialTickerData.eiffelTowerChapter + 1) % 5;
      return chapter;
    }
  },
  {
    id: "a350",
    text:
      `Alexander wept, for he had just watched a pop-culture lecture on quantum mechanics by Anaxarchus and
      realised that there are infinite worlds to conquer, and that he couldn't even be the lord of one without
      a mutiny or 6 stopping him.`
  },
  {
    id: "a351",
    text: "Hi, I'm here to complain about the poor quality of the copper that has just been delivered to me."
  },
  {
    id: "a352",
    get text() {
      return `<span style='opacity: 0; animation: a-disappear ${newsAnimSpd(20)}s 1'>
      This news message is antimemetic. You will forget that it exists shortly.</span>`;
    }
  },
  (function() {
    let wasClicked = false;
    const normal = "<span style='cursor: pointer'>💣</span>";
    const clicked = "💥";
    return {
      id: "a353",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    // Blob from the blob font
    id: "a354",
    text:
      `<span style='color: #FBC21B; text-shadow: 0px 1px 0px black, 1px 0px 0px black, 1px 1px 0px black,
      0px -1px 0px black, -1px 0px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black'>
      \uE010</span>`
  },
  {
    id: "a355",
    text:
      `<div style='background: url("./images/unsmith.png"); width: 2.3rem; height: 2.5rem; margin-top: -0.1rem'></div>`
  },
  {
    id: "a356",
    text: `Press "Choose save" to explore the other 2 parallel universes.`
  },
  {
    id: "a357",
    text:
      `The Scientific Community remains baffled over the meaning of 286,078. "We're certain it's related to potatoes,
      but we need to do more tests." one researcher notes.`
  },
  {
    id: "a358",
    text: `Press "Choose save" to explore the other 2 parallel universes.`
  },
  {
    id: "a359",
    text:
      `Local incremental game dev makes physicists unhappy again. They claim
      "the physics violations and blatant use of technobabble has gone too far".`
  },
  {
    id: "a360",
    text: `Press "Choose save" to explore the other 2 parallel universes.`
  },
  {
    // Discord contest winner #1
    id: "a361",
    text: "We're having a sale of top quality waterproof towels! Be sure to get some on your way out!"
  },
  {
    // Discord contest winner #2
    id: "a362",
    text:
      `Hevipelle Incorporated is proud to present a new brand of cereal: The Big Crunch! This nutritious breakfast
      meal contains crunchy antimatter O's, pocket dimensions, Infinity-flavored Sugar Cubes, exponentially-growing
      Replicanti, and Eternity-flavored Marshmallows. Now you can experience Antimatter Dimensions inside of your
      stomach! Warning: Side effects may include spontaneous combustion, nausea, vomiting, diarrhea,
      dematerialization, vaporization, heart failure, the end of the world, or death. If you are not made out of
      antimatter, consult an educated professional on Antimatter Consumption before eating 'The Big Crunch'.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a363",
    text:
      `The most expensive thing about a dragon isn't the gold you need to fill the nest, the magic you sacrifice
      entire empires for, or the billions of wars you need to supply the decillions of adamantium. No, it is the
      dirt. It's always the dirt. Don't ask the royal treasurers why we have more creatures on the plane than
      molecules of dirt. Just keep summoning bulldozers through arcane rituals and keep looking through the
      earth's core for more scraps of dirt.`
  },
  {
    id: "a364",
    get text() {
      const products = [
        `Illustration 320-A - True Office Graphics Wall. One of our senior consultants will observe your business,
        and come up with a list of words to be added to a hallway, to remind all employees of the values of their
        company. Known to decrease employee motivation by at least 25%! Past walls include words such as Black
        Hole, Catastrophic, Haphazard, compromising, Inferior, Delusional, Inefficient and Collapsed! Order now!`,
        `Furniture 150-A (2034 edition) - 3-person seating device. A revolutionary new design for office waiting
        areas, it consists of a large 3 legged stool, placed upside down for aesthetic benefits. Perfect for
        getting employees back to work, in a new set of shoes, or pants. It isn't tied down or glued to the
        floor like other editions, but we do make sure that other employees look at you funny if you edit our
        art. No need to order, it comes as a complimentary service for any customer!`,
        `Furniture 0853 - "The Rack" - this revolutionary new workspace, from the inventors of the crawling
        desk, helps your employees overcome their limits and ensure that your whole business is screaming -
        in agony! At times chosen by our revolutionary "pAIn AI", it will suggest mandatory stretchers for all
        users. Recommended by your local gaol, order now! *Warning, AOS&C only takes responsibility for acts
        of god such as lightning or merciful purifications by deities.`
      ];
      const product = products.randomElement();
      return `Antimatter Office Supplies and Co present their new "Modern Office" catalogue! Each template
        design can be customised for your business, and offers a unique way to promote business synergy! Here
        is a sneak preview of one of their newest items: ${product}`;
    },
  },
  {
    id: "a365",
    text: "I don't like Replicanti. They're coarse and rough and irritating and they replicate everywhere.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a366",
    text:
      `Stage magic, such as illusions, has an interesting history. A mix of charlatans attempting to scam people,
      and actors acting out performances using illusions or sleight of hand. Altering styles of magic, and continued
      discourse and disagreements over whether it should be stated that it is an illusion, and whether people will
      magically realise that it is fake and that it does not need to be stated. A schism a century ago split magic
      into 2 types - gentle, simplistic utilitarian tricks and grand spectacles involving the flashy machinery and
      beautiful assistants - originating from the popularisation of a single trick involving sawing a person in
      half. Much more interesting than watching some TV psychic pretending to pull a lottery ticket out from a news
      ticker, at any rate. Speaking of which, tonight's lottery numbers are 23, 10, 81, 106.4, 3 + 2i, and e.`
  },
  {
    id: "a367",
    text:
      `Snakes look scary, and they absolutely are and you should run, calmly, from every snake you see. But, luckily
      for you, snakes don't often take the initiative to bite - excluding the really mean ones. If they've gone out
      of their way to bite you, there's generally 4 reasons. 1- The Snake is Mean. 2- You scared the snake. Snakes
      are scary to you, but you are scary to snakes. Be the bigger lizard when you meet a snake. 3- You entered the
      territory of the snake. Often, a snake will warn you if you do this - this is why rattle snakes rattle. If you
      don't listen to the warning, they'll bite you. And the most important reason, 4- the snake finds you ugly.
      This is the fault of the snake's ocular system, but is the most common form of bites in at least 2
      jurisdictions. And if you get bitten by a snake, by virtue of being a scarily ugly lizard who keeps stumbling
      into the wrong bushes, there's 3 main things you can do. First, calm down, again, and stay calm. Secondly,
      immobilise the area around site that was bitten, and try using a compression bandage. Snake venom vision is
      entirely based on movement of the object it's currently in. And third, calmly, call for help from other
      lizards. Excluding the snake. The snake's too mean to help you.`
  },
  {
    id: "a368",
    text:
      `I suspect more people would press the hard reset button if genuine effort was done to make the process as
      miserable as possible. A slow removal of resources, with unique nerfs just to stop you from progressing. The
      destruction of UI, turning from usable to unusable, arcane and unwieldy, requiring memory and luck to even
      continue this quest. Randomness, against the player for even the simplest actions, to punish the thought of
      progression. Hooks and traps and disasters and low rolls for a chance see progression, which entirely consists
      of putting the state of the game further from anything deemed reasonable. A situation where the character is
      broken just to tell you to leave… but the damage is already done, if it is even possible to turn back. And…
      from there, a hard reset probably isn't enough. It would have to be… harder. Not just a hard reset, but a
      cookie, something in local storage designed specifically to make it impossible to actually start a new game.
      Or, something more malicious? And despite this, people would still throw themselves into this nightmare, for
      humanity knows no bounds in its endless curiosity. No amount of warnings will stop everyone. They will find
      a way to proceed, given it exists, and may even complain when it isn't as punishing as expected. So, do you
      want to push the button, and experience the depths of despair, willingly? Hopefully not, because it isn't here.`
  },
  {
    id: "a369",
    text:
      `An empire-building project is one of the most difficult things to implement. Thousands of hours of time,
      planning, effort, consultation, and political manoeuvring to create truly airbreaking endeavours. Take the
      Realmway Revitalisation Roadmap, a revolutionary program referred to by the 3 R's, which is known as the
      pinnacle of the most famous of the empire's bureaucratic infrastructure committees - the EMIF (empire magic
      infrastructure foundation) - not to be confused with the EAIF (Electric airship investment fund) or the
      NMIC (National Magical Infrastructure Coalition). The goal of the three R's, set out by the EMIF, was to
      reinstate a mana trade corridor for SMSS (Small-Medium Steam Shuttles), a vital part of the burgeoning
      consolidated states after their unfortunate pillaging during the TELC (tenth empire liberation crusade).
      The three R's was a multi stage project - stage 1 was a survey glyph in the air - all big things start with
      a small step. Stage 2, the unveiling of the EMOF (Empire Mechanical Obliteration Forcefield) had over 50
      dignitaries - multiple emperors (from federated states to organisational leaders), foreign rulers, EMDF
      (Effluent Manifested Destiny Families) who currently own the land, and even some of the forecast witches,
      all gathered together to unveil the project in a show of EOSF (Empire Official Solidarity Friendships).
      Sadly, the project was eventually cancelled at stage 215, as the creation of the EMTF (Excrement Material
      Transmutation Facility) for the contractors exploded after coming into contact with a SMEA (Small-Medium
      Electric Airship) placing the last survey peg from stage 459 due to a time vortex created by an argument
      at the WAIC (Witches Annual Infrastructure Committee) as part of stage 56. Truly, tragic stuff - 3 award
      nominations and 2 wins during that process due to EBIF (Efficient Bureaucracy In (the) Field).`
  },
  {
    id: "a370",
    text:
      "Man tries installing cookies to store computer data, accidentally cleans them due to being too delicious."
  },
  {
    id: "a371",
    text:
      `Pop quiz: there are 3 doors, you pick a door at random, and get to keep what's behind the door. The doors
      have 2 golden goats, 2 silver goats, and a gold and a silver goat. After you pick a door, the door with the
      lowest $ worth of goats will be opened and shown to you. After this, you are given the choice to swap.
      What is the probability that you will swap doors?`
  },
  {
    id: "a372",
    text:
      `If you're ever lost in a forest, look at the trees around you. It's said that moss grows north, so by the
      time you've finished looking at a tree, a roaming guitarist will run up to you and ask if you want to hear
      wonderwall`
  },
  {
    id: "a373",
    text:
      `As a symbol of friendship between the Matter and Antimatter Periodic Tables, they have done an exchange of
      elements. The element of Mony is now part of the Antimatter Periodic Table, while Antimony has been added
      to the regular Periodic Table.`
  },
  {
    id: "a374",
    text: "This newsticker was specifically designed for promotional purposes only."
  },
  {
    id: "a375",
    text:
      `As you probably know, it is traditional to give gifts made of certain materials to celebrate anniversaries
      The classic ones are silver at 25 and gold at 50. Here are some little known anniversary gifts:
      Pineapple - 37 years Hellstone - 66 years Lizardite- 82 years Nitrowhisperin- 86 years Taconite - 95 years
      Hatchettite - 100 years Electrum - 110 Yakitoda - 111 years years Fordite - 119 years Bloodstone - 120 years
      Celestite - 125 years Jet - 140 years Petroleum - 145 years Steel - 150 years Cummingtonite - 198 years
      Concrete - 200 years Laserblue- 210 years Painite - 250 years Parisite - 255 years Parasite - 260 years
      Carbon Nanotubes - 300 years Mercury - 310 years Martian Soil - 340 years Neptunium - 370 years
      Uranium - 380 years Plutonium - 390 years Xium - 400 years Blaze rods - 420 years Asbestos - 430 years
      Gabite - 444 years Crimtane - 666 years Lagga - 777 years`
  },
  {
    id: "a376",
    text:
      `Big tech companies have collaborated to create a new neural network that's trained in the generation of rap
      lyrics, called RAP-3. First lyrical generations include "Call me prometheus 'cuz I bring the fire" and
      "Call me Sonic the way I'm gettin' these rings". Critics say it still has a way to go before it replaces
      traditional music.`
  },
  {
    id: "a377",
    text:
      `With the new android OS, android 20, being predicted in the near future, the new system for internal codenames
      has been revealed. The first codename, as it currently stands, is “antimatter”. This conveniently works well
      with the predicted generation of phones that will use Android 20 - these phones will be the most explosive
      ever due to their annihilation-based power source. Sources tell us that a billion dollar research unit is
      working on a name for android 21, by tradition to start with B, “that doesn't sound too bad when you think
      about it”. `
  },
  {
    id: "a378",
    text: "If every antimatter were an apple, you would have enough to keep all the doctors away for 3000 years"
  },
  {
    id: "a379",
    get text() {
      return `THE ${format(Number.MAX_VALUE, 2)} PIECE! THE ${format(Number.MAX_VALUE, 2)} PIECE IS REAL!`;
    }
  },
  {
    id: "a380",
    text:
      `The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult
      as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed
      starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be
      completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as
      possible. The second time you fail to complete a lap before the sound, your test is over. The test will
      begin on the word start. On your mark, get ready, start.`
  },
  {
    id: "a381",
    text: "Why do they call it second dimension when you of in the first dimension of out second eat the dimension?"
  },
  {
    id: "a382",
    text:
      "Any AD player born after 1993 can't joke... All they know is 5 hours, paperclips, 1.79e308 & Tenth Dimension."
  },
  {
    id: "a383",
    text:
      "The only thing better than an anti-joke is two. Like the number. Not two anti-jokes. I just like the number two."
  },
  {
    id: "a384",
    text: "Click here to make nothing happen."
  },
  {
    id: "a385",
    text:
      `I wonder... Why did Apple skip iPhone 9 and Microsoft skip Windows 9...
      Was it because they were bribed by a game developer?`
  },
  {
    id: "a386",
    text: "9 out of 10 doctors recommended against trying to touch antimatter. We haven't heard back from the 10th one."
  },
  {
    id: "a387",
    text:
      `In spring, Man built a pillar. In summer, another. Throughout autumn they held. But in winter, one experienced
      an unexpected (See definition in: Abstract Multidimensional Retrocausal Physics) ZW-Class "Ascension" event,
      and is hypothesised to have fallen into a dimensional loophole, where it, by definition, has to take up more
      dimensions than itself. Current efforts at retrieving the pillar and returning it to baseline reality have been
      unsuccessful (See test log 2453-3e9a-50d1-84fc for more details)`
  },
  {
    id: "a388",
    text:
      `In light of recent events, we'd like to issue an official statement. Antimatter Dimensions™ is in no way
      affiliated with Jimmy's Causality Violating Brainworms™. We do not endorse, no were we involved in their creation
      of the product which was involved in several catastrophic dimension-destabilising and reality-toppling incidents.
      We almost certainly did not sign a contract at 5:30:26 UTC on 08/12/1994 after discussing how we could benefit
      from destabilising and warping dimensions. There was no industrial zone constructed in the 5th Orion Arm of the
      వ' galaxy, and even if they were we did not install localised anomalies following the Scranton Reality Anti-anchor
      mechanism. Additionally, no time loop is occurring at Acroamatic Abatement Facility AAF-D in site 43. We apologise
      if things seemed this way, and we will be more thorough in cracking down misinformation in the future.`
  },
  {
    id: "a389",
    text: "If only we could condense the antimatter in the universe into cookies..."
  },
  {
    id: "a390",
    text:
      `Can you believe it guys? Update, just 5 hours away. Update is in a 5 hours. Wahoo. I'm so happy about this
      information. Update just 5 hours away. Oh wow. Can you believe it? Update just in a 5 hours. It got here so
      fast. Update, just 5 hours.`
  },
  {
    id: "l1",
    text: "You just made your 1,000,000,000,000,000th antimatter. This one tastes like chicken.",
    get unlocked() { return Currency.antimatter.exponent === 15; }
  },
  {
    id: "l2",
    text: "Nerf the galaxies please.",
    get unlocked() { return player.galaxies === 2 || Currency.infinities.gt(0); }
  },
  {
    id: "l3",
    text: "What do you mean, more than two dimensions??? We're on a screen, clearly there are only 2 dimensions.",
    get unlocked() { return AntimatterDimension(3).amount.gt(0) || DimBoost.totalBoosts > 0; }
  },
  {
    id: "l4",
    text: "How much is Infinity? -literally everyone at least once",
    get unlocked() { return AntimatterDimension(8).amount.eq(190) || Currency.infinities.gt(0); }
  },
  {
    id: "l5",
    text: "Eh, the Fourth Dimension is alright...",
    get unlocked() { return AntimatterDimension(4).amount.gt(0) && AntimatterDimension(5).amount.eq(0); }
  },
  {
    id: "l6",
    text:
      `Antimatter people seem to be even more afraid of 13 then we are. They destroyed
      entire galaxies just to remove 13 from their percents.`,
    get unlocked() { return player.galaxies > 0 || Currency.infinities.gt(0); }
  },
  {
    id: "l7",
    text: "To understand dimensional sacrifice, you do actually need a PhD in theoretical physics. Sorry!",
    get unlocked() { return player.sacrificed.e >= 10 || DimBoost.totalBoosts >= 6; }
  },
  {
    id: "l8",
    text: "A new group for the standardisation of numbers have come forward with a novel new format involving emoji's.",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies > 0; }
  },
  {
    id: "l9",
    text: "Antimatter ice cream stand has recently opened- they have octillions of flavors!",
    get unlocked() { return player.records.totalAntimatter.e >= 27; }
  },
  {
    id: "l10",
    text:
      `The Heavenly Pelle has generated too much antimatter and needed to create another galaxy.
      This one can be seen in the southwestern sky.`,
    get unlocked() { return player.galaxies > 0 || Currency.infinities.gt(0); }
  },
  {
    id: "l11",
    text: "10th Dimension is a lie.",
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l12",
    text: "The square root of 9 is 3, therefore the 10th dimension can't exist.",
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l13",
    text: "You got assimilated by the 10th dimension? Just call your doctor for mental illness!",
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l14",
    text: "Why is there no 10th dimension? Because 7 8 10.",
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l15",
    text: "The 10th dimension cannot exist because the Tain-speaking nazis died in WW2.",
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l16",
    text:
      `If you break the fourth wall... well, there's still the fifth, sixth, seventh, eighth and ninth to get through
      before you encounter bad things, so you should be fine`,
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l17",
    text:
      `Conditions must be met for Hevipelle to sleep. First, it needs to be a blue moon. Second, a specific town
      in the arctic must have not seen light for a month. Third, he needs to release an AD update. And finally,
      no one on the Discord can be on dimension 10. Only then can he rest, for up to 6 hours, before waking up
      forcefully to avoid getting the offline achievement.`,
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l18",
    text: "If the 10th dimension is all evil, then is 3.162 the root of all evil?",
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l19",
    text:
      `I'll have 1e29 number 10s, a number 1e10 large, a number 6 with extra replicanti, a number 1e7, two 4e5s,
      one with matter, and a large time vortex.`,
    get unlocked() {
      return DimBoost.totalBoosts >= 6 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l20",
    text: "Infinity: the one thing that's supposed to break.",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l21",
    get text() { return `I've got ${format(Number.MAX_VALUE, 2)} problems, but none of them antimatter.`; },
    get unlocked() { return Currency.infinities.gt(0) && !PlayerProgress.hasBroken(); }
  },
  {
    id: "l22",
    text: "Anti Emoji Movie a huge hit!",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 5; }
  },
  {
    id: "l23",
    text: "If this game was made by Valve, Zero Deaths would be impossible.",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l24",
    text: "Florida man attempts to get Zero Deaths on first run, is stopped by heat death of the universe.",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l25",
    text: "\"Having done half the achievements isn't much of an achievement\" -Boo",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length / 2; }
  },
  {
    id: "l26",
    text:
      `Thanos is gonna be super dissapointed when he shows up with a fully powered Infinity gauntlet, and Hevi
      has a fully powered Eternity gauntlet.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l27",
    text:
      "New strange material was been found. It seems to grow exponentially, but only helps with antimatter production.",
    get unlocked() { return PlayerProgress.replicantiUnlocked() && player.replicanti.chance === 0.01; }
  },
  {
    id: "l28",
    text: "It seems this \"replicanti\" stuff won't be growing any faster now.",
    get unlocked() { return player.replicanti.chance === 1 && player.replicanti.interval === 1; }
  },
  {
    id: "l29",
    text:
      `If you wrote down 3 numbers a second, it would take you less time to write down your antimatter
      amount than it would Hevipelle to update the game.`,
    get unlocked() { return Currency.antimatter.exponent >= 100000; }
  },
  {
    id: "l30",
    text: "Does Hevi just pick quotes to put into the game?",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 30; }
  },
  {
    id: "l31",
    text: "New news company has become rivals with us. They are made entirely of antimatter.",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 80; }
  },
  {
    id: "l32",
    text: "How many times can we use \"Anti\" in a row before people stop listening?",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 100; }
  },
  {
    id: "l33",
    text: "Does Hevi even check #news-ticker-suggestions anymore?",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 120; }
  },
  {
    id: "l34",
    text: "Need more quotes! -hevipelle",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 135; }
  },
  {
    id: "l35",
    text: "Man destroys known universe with antimatter, writes news tickers to keep from feeling lonely.",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 150; }
  },
  {
    id: "l36",
    text: "You're almost there!",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 160; }
  },
  {
    id: "l37",
    text: "You can stop now",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 165; }
  },
  {
    id: "l38",
    text: "fucking hacker",
    get unlocked() { return NewsHandler.uniqueTickersSeen > GameDatabase.news.length; }
  },
  {
    id: "l39",
    text: "Asian man trys to steal the trophy of fastest infinity of -1 seconds, AND HE DOES IT!",
    get unlocked() { return NewsHandler.hasSeenNews("l1"); }
  },
  {
    id: "l40",
    text:
      `I broke the 9th wall, there is only chaos, Slabdrill is ritually sacrificing antimatter to the 10th
      dimension. This will be my last entry, may Hevipelle have mercy on our souls, we didn't listen,
      We should have listened.`,
    get unlocked() { return NewsHandler.hasSeenNews("l58"); }
  },
  {
    id: "l41",
    text: "I thought the update was 5 hours away... -new players after more than 5 hours of gameplay",
    get unlocked() { return Time.totalTimePlayed.totalHours >= 5; }
  },
  {
    id: "l42",
    text:
      `Somebody told me to wait five hours for the update yesterday but it's today
      and it still hasn't come! What do I do?`,
    get unlocked() { return Time.totalTimePlayed.totalHours >= 5; }
  },
  {
    id: "l43",
    text: "You do know that you won't reach Infinity in -1 seconds, right?",
    get unlocked() { return player.records.bestInfinity.time === 0.1; }
  },
  {
    id: "l44",
    text: "Where does Antimatter Nemo live? In a NNnNeMI-NNnNe.",
    get unlocked() { return player.records.totalAntimatter.e >= 3e6; }
  },
  {
    id: "l45",
    text: "Anti Emoji Movie MMMCMXCIX is a major hit!",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 3999; }
  },
  {
    id: "l46",
    text: "Achievement Unlocked!",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length; }
  },
  {
    id: "l47",
    text: "The achievement is for two million, not two billion...",
    get unlocked() { return Currency.infinities.gt(2e9); }
  },
  {
    id: "l48",
    text: "Keep up the quick pace!",
    get unlocked() { return AchievementTimers.marathon1.time > 1200; }
  },
  {
    id: "l49",
    text: "One day you will stop your incessant grind.",
    get unlocked() { return Currency.eternities.gt(50000); }
  },
  {
    id: "l50",
    text: "You can probably stop farming for eternities now...",
    get unlocked() { return Currency.eternities.gt(DC.D2E6); }
  },
  {
    id: "l51",
    text: "Are you serious?",
    get unlocked() { return Time.worstChallenge.totalSeconds <= 1; }
  },
  {
    id: "l52",
    text: "Timing is key.",
    get unlocked() { return player.records.thisEternity.realTime < 10; }
  },
  {
    id: "l53",
    text: "If you want to farm infinities, why don't you just get the time study?",
    get unlocked() { return !TimeStudy(32).isBought && Currency.infinities.gt(72000 * 168); }
  },
  {
    id: "l54",
    get text() {
      const names = [];
      if (PlayerProgress.infinityUnlocked()) names.push("Infinity");
      if (PlayerProgress.eternityUnlocked()) names.push("Eternity");
      if (PlayerProgress.dilationUnlocked()) names.push("Dilation");
      if (PlayerProgress.realityUnlocked()) names.push("Reality");

      const game1Name = names.randomElement();
      let game2Name = names.randomElement();
      while (game2Name === game1Name) {
        game2Name = names.randomElement();
      }
      return `Pokemon ${game1Name} and ${game2Name} were just released! This new generation brings the total number ` +
        "of Pokemon up to 1e151. Good luck catching 'em all!";
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); },
    isAdvertising: true
  },
  {
    id: "l55",
    get text() {
      const recipes = [
        "a Replicanti cake: Gather some Replicanti, place in oven, and watch rise. And rise. And rise.",
        "an antimatter cake: Gather some antimatter, place in oven, and <b>BOOM<b>.",
        "an Eternity cake: Gather some Eternity Points, place in oven, and wait...",
        "an Infinity cake: Gather some Infinity Points, place in oven, and watch them shatter spacetime."
      ];
      const recipe = recipes.randomElement();
      return `How to bake ${recipe}`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l56",
    text: "Reality Challenges are the new 10th Dimension is the new orange.",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l57",
    text:
      `Jake returned home from a long day at school. On his way home, he came across a curious little object.
      Transparent, but opaque. Shimmering, but gloomy. Heavy, but weightless. Jake brought the object to his
      mother. "Mom, I found this thing on the sidewalk, can I keep it?", Jake said. His mother turned around
      to view the object her son spoke of. Her pupils dilated, "Jake, get that thing out of the house now!"
      she yelled. Jake was confused, as it seemed quite the harmless thing to him. He asked "But mom, wh-",
      but before he could finish, the object appeared to undergo mitosis at what seemed like an impossible
      speed, and the second copy slipped out of his hand and onto the floor. His mother rushed over to
      him, and tried to grab the object, but it replicated again. "Jake... No matter what happens, don't
      forget that I love you honey...". She wrapped her arms around him. "M-mom, what's happening?" Jake asked,
      with a quivering fear in his voice. His mother cried a single tear. "⭔⭚⦕꒜ brand Replicanti..." she said,
      in a somber tone. The Replicanti continued to replicate at a faster and faster pace. The bottom third of the
      house was now full of Replicanti. Then the bottom half. Then the entire house. The mother and child were
      trapped between the walls of their home and the Replicanti. Doomed to live the short rest of their life in
      that inorganic coffin, as the air remaining in their lungs slowly depleted. But that wasn't the end; far from
      it. The Replicanti began to replicate outside of the house, flooding out in a shimmering landslide. A few
      neighbours noticed the strange objects, almost liquid-like in their appearance, and attempted to run.
      But the Replicanti continued to replicate, and accelerate. Soon the entire block was covered in them; was
      them. Shortly after, several blocks. The city. The surrounding cities. The country. All the countries. All
      the planet. All the solar system. All the galaxy. All.`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l58",
    text:
      `The Holy trinity of Hevipelle, Antimatter, Infinity Points, and Eternity Points. These 3 resources let us
      access Hevi's gift, Time Theorems. And with these Time Theorems, we reach out to Hevi, and call, “Hevi, bless
      us on this fine day!” And Hevi does. He give us the blessing of Time Studies. These Time Studies were
      blessings so powerful, Hevi restricted their power. He said, “I will give you a choice of three paths” and
      then humanity chose. The short, cheap route of Antimatter Dimensions, giving instant gratification, the
      powerful choice of Infinity Dimensions, which were a fast, middle ground path, or Time Dimension, the long
      wait, and struggle, of humanity. Then, as humanity chose, a crack broke the earth. A serpent snaked out and
      sneered to humanity, “I will offer the powerful choice of a tenth dimension! I am Slabdrill, lord of all
      Unhevi. Humanity rose and said “ Begone Slabdrill! We want none of your foul Heresy!” And Hevi rose as well,
      and smote Slabdrill with his godlike power. As Slabdrill's corpse fell into the earth, he cried “ this will
      not be the last of me! Hevi will betr-“ and he fell in the Abyss of matter. Hevi gifted humanity with
      Eternity upgrades, which boosted infinity dimensions and time dimensions. And Hevi gave humanity his greatest
      gift. EP multipliers. He said, these will multiply all EP gained by 5, but their cost will increase 50 times.
      Use them wisely. And Humanity journeyed off with their new power, as Slabdrill's words echoed in their heads.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l59",
    text:
      `The debate on the singular form of Replicanti rages on. Team "Replicantus"'s base has been ransacked
      by Team "Also Replicanti", and many of their dimensions were stolen. Team "The Plural Is Replicantis"
      is still lying low after their plan to hack the dictionary failed.`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l60",
    get text() {
      return `Breaking News! Time Shard mine collapses! ${Math.floor(20 + Math.random() * 236)} miners trapped inside!`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l61",
    text:
      `Millenials are killing the challenge industry, say antimatter experts; "Nowadays they start with
      challenges completed and infinity broken; it's just not how it used to be".`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l62",
    text:
      `Computer scientists are outraged, "What even are Infinity Points? IP stands for Internet Protocol!".
      Debates continue to intensify, more at 7.`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l63",
    text:
      `Do you feel that time has been going slower? Study reveals that 1 second now last approximately 1.3 seconds.
      Scientists are calling this phenomenon Time Dilation.`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l64",
    text:
      `Injustice in the Antimatter Academia: Beginners are only allowed to choose one field of study while the elite
      can pick all three. "Its just not fair, man. How come they can do it?" Questions frustrated student.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l65",
    text:
      `It turns out that nobody actually knows what Infinity Points look like. Even the people who work on storing
      them are specifically told not to look at them because they apparently "kill anyone who even looks at them",
      to the point of sometimes working with blindfolds on. But today that will change. I am right here, in front
      of an Infinity Point Depot, ready to tell all of you what they look like in 3, 2, 1-`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l66",
    text:
      `Humanity shocked as failed Time Dilation experiment causes a visual glitch in spacetime. It is now visible
      in the night sky just above the Celestial Equator.`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l67",
    text:
      `Snorting crushed up Time Shards is slowly turning into a fad challenge amongst the most bored of people. It's
      said that the high it gives makes them experience as if the world itself is speeding up around you, which is
      why it's been called The <span style="color: var(--color-eternity)">Timelapse Challenge</span>. &nbsp;&nbsp
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Dehydration deaths are through the roof as people mysteriously forget to drink water for several days.
      Trace amounts of Time Shards are being found in their bodies.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l68",
    get text() {
      let protestText = "";
      if (InfinityChallenge(4).isRunning)
        protestText =
          `Let's take it to this guy, who's part of the side that believes it's Infinity Challenge 4. What do you have
          to say? "Obviously Infinity Challenge 4 is the worst one, I mean, what am I even supposed to do? I keep
          trying but every time I keep getting stuck and nowhere close to the end! How are you even supposed to do it?"
          What a passionate man. This is your local news host, and we'll come back with further information later.`;
      else if (InfinityChallenge(5).isRunning)
        protestText =
          `So up next let's talk to this guy is holding a sign that says "IC5 Unfair". What is the point your group
          is trying to make? "Can't you read the sign? If your comprehension is that bad then Infinity Challenge 5
          will squash you without even giving you a fair chan-" How... Interesting. This is your local news host,
          and we'll come back with further information later.`;
      else
        protestText =
          `Finally, let's chat with this woman who doesn't seem to be in either side. What's your opinion on the
          matter? "Personally, I thought Tickspeed Autobuyer Challenge was worse than both-" "GET HER!!" "WAIT NO-"
          Well, seems like this just took a turn, so I'm getting as far away as I possibly can. This is your local
          news host, and we'll come back with further information... someday.`;
      return `Hello, this is your local always reliable news source, and today people are taking over the streets
        as they fight over which Infinity Challenge is worse. ${protestText}`;
    },
    get unlocked() { return InfinityChallenge(1).isUnlocked || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l69",
    text: "Friendship ended with Replicanti, now Replicanti Galaxies is my new best friend.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l70",
    text:
      `"Zurkrbarg, Celestial of Privacy" has announced their plans to release a new version
      of their popular social media universe, "All".`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l71",
    text: "Other languages await... I need to become a programmer",
    get unlocked() { return Player.canEternity || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l72",
    get text() {
      const scenarios = [
        `our contestants struggle to survive in the desolate wasteland of Eternity Challenge 8 -
        running out of Replicanti and Infinity Dimensions, what will they turn to?`,
        "we investigate reports of a Time Shard mine collapsing at 26:90.",
        "we invite an amateur on to explain what the reward for Infinity Challenge 9 would be.",
        "our friends over at ANN explain how they produce their broadcasts.",
        "we invite local idle gamers over to explain how they play their favorite games.",
        `<span style='font-family: Barrio'>send 10,000 Support The Developer
        coins or you will never see RealiTV again.</span>`,
        "we break down exactly what went wrong in the black hole powering our city yesterday.",
        "we go over our 10-day weather forcasts.",
        `YOU MUST PAY ${format(player.reality.realityMachines.times(10).max(10))}
        REALITY MACHINES TO CONTINUE VIEWING THIS PROGRAM.`,
        "we witness the release of the hypnodrones.",
        "our great and grand overlord lets us have a single antimatter.",
        `Bill Nye explains how Replicanti replicate, and teaches how to spot dangerous conspiracy theories
        such as "ingesting antimatter is perfectly fine" and "Antimatter Galaxies aren't worth it".`,
        "the world's greatest philosophers debate if we are the real antimatter.",
        "resident baker explains how ordinary objects can transmorph into cake if not watched constantly."
      ];
      const scenario = scenarios.randomElement();
      return `Next time on RealiTV, ${scenario}`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l73",
    text: "A long time ago in a distant galaxy far, far away, the cost scaling changed.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l74",
    text: "Introducing a new feature: Reality Studies! Get in-game benefits for studying in real life!",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l75",
    text:
      `Here at Antimatter Dimensions, we pride ourselves in the quality of our products. For example: Did you know
      that every Infinity Point is unique? That's right! They all have different personalities, their own feelings,
      their own thoughts... I hope you can sleep well tonight, knowing this... Remember all of those Infinity
      points you've spent? They had families, and they miss them... Look at what you've done. You're a monster.`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l76",
    text: "So, you've reached the prestige layer after Infinity? It's about time...",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l77",
    text: "Improve your perks through selective breeding and cutting edge epigenetics technology.",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l78",
    text:
      `Warning - Genetically Modified Perk Points are not suitable for; consumption, physical contact, inhalation,
      exhalation, mental contact and scouring by both seen and unseen eyes. Do not put near a flammable,
      inflammable, conducting, insulating, variable, biological or mechanical substance. Existence at your own risk.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l79",
    text:
      `The Intergalactic Antimatter Revenue Service, contrary to popular belief, does have the ability to pay taxes
      on AM gained through non-scrupulous methods, ie anything not done via legally-mandated dimensions or modified
      through challenge courses. Section NY-8N lists 3 specific methodologies - illegal news ticker giveaways,
      unrecognised dimensions, and modifications to the fabric of space time - as well as a miscellaneous for any
      unique AM methods that may pop up in the future. And although you will have to pay the top AM tax rate of 99%,
      it can save you money in the long run - if you are forced to switch realities due to a celestial decision you
      can gain a portion of the tax you paid back from the IARS as a tax deduction, as well as make a deduction to
      pay for the arbiters who represent you. Of course, any [PLAYER REFERENCE NOT FOUND] worth their RM knows that
      the real way to hide illegal profits of crime is  in personalised pocket dimensions, hyperspliced waveform
      banks and nanoshells, which requires extensive R&D to implement. As such, reporting illegal AM gain is only
      recommended if you're too rich to hide your gains, but too poor to hide your gains.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l80",
    get text() {
      return `"Average person produces ${format("3e999999996", 2)} antimatter a year" factoid actually just statistical
      error. Average person produces 0 antimatter per year. "Developer Dimension" Georg, who lives in a cave &
      produces over ${format("1e1000000000", 2)} each day, is an outlier and should not have been counted.`;
    },
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l81",
    text:
      `The world is in chaos as the laws of math have been rewritten! Many things that were thought
      to be infinite are now just really big numbers!`,
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l82",
    get text() {
      return `The Great Scribes of Antia have labored intensively for years. They were given a mammoth task from the
      gods; write out an incomprehensibly long number. These scribes took turns, each writing out a few numbers a
      second, writing day and night, for what seemed like an eternity. At last, after
      ${TimeSpan.fromSeconds(Currency.antimatter.value.log10() / 3).toString()}, they finally accomplished
      the impossible. That week, when they went to worship their gods, they sent them a simple message: "What was
      the purpose? What made our years of labor significant?" The gods responded duly: "We wanted to know how long
      it would take to write out, for a statistic in our game."`;
    },
    // 3 years of time to write
    get unlocked() { return Currency.antimatter.value.gte("1e777600"); }
  },
  {
    id: "l83",
    text:
      `AD Patch Notes: Cleaned up the celestial problem Made Antimatter care about annihilation more Added mouths
      Removed mouths Stopped unwanted interlopers from corporate takeovers of shops Fixed problem with newstickers
      hanging in the air Dead replicanti remain in their galaxies Redefined interlopers to not include [REDACTED]
      Tachyon Particles get stuck in the top left corner of the screen, obliterate time Added Coriolis effect to
      Galaxy Spin Direction`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l84",
    get text() {
      return `For the record, you currently have ${player.news.specialTickerData.paperclips}
      Useless Paperclips. You may want to spend them on something.`;
    },
    get unlocked() { return player.news.specialTickerData.paperclips > 0; }
  },
  {
    id: "l85",
    text:
      `On opposite day, the new update is just -5 hours away. You begin increasing your Matter. Once you acquire a
      huge abundance of Matter, you must become Infinitesimal. After increasing your wealth in Infinitesimal Points,
      you can eventually Jiffy, the shortest unit of time. After enough time, your Jiffies will accumulate, and you
      will Contract Time. Contracting Time will grant you enough of a boost to eventually Fantasy, the final layer
      of maintenance. However, you find out that it was all a dream. Your Antimatter is safe and well, and the new
      update is still just 5 hours away.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l86",
    text:
      `Hello, player. I'd like to play a game. In front of you is a pile of replicanti. They are currently frozen in
      time, and cannot replicate. To your right is a computer playing Antimatter Dimensions on an empty save. You
      must reach infinity. However, once you buy a 1st dimension, the replicanti will start replicating. As you know,
      they replicate fast, and if they fill up the room you will suffocate. If you reach infinity before that, they
      will be frozen again. The clock is ticking. Start now.`,
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l87",
    text:
      `"To see a World in a Grain of Sand. And a Heaven in a Wild Flower. Hold Infinity in the palm of your hand.
      And Eternity in an hour. And Reality in about 5 hours™️" ~Anti-William Blake `,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l88",
    text:
      `Our deepest apologies for the new glyph mechanic. The intent is to provide players with a sense of pride and
      accomplishment for unlocking rare glyphs. We selected initial values based upon data from the final wave of
      testing and other adjustments made to milestone rewards before launch. Among other things, we're looking at
      average per-player credit earn rates on a daily basis, and we'll be making constant adjustments to ensure that
      players have challenges that are compelling, rewarding, and of course attainable via gameplay.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "r1",
    text: "This news message is 100x rarer than all the others.",
    get unlocked() { return Math.random() < 0.01; }
  },
  {
    id: "p1",
    text: "Is this a jojo reference?",
  },
  /* eslint-disable max-len */
  {
    id: "ai1",
    text: "If you are the game, then you can use the cheat to unlock a secret achievement...but it costs e1100 antimatter!?!"
  },
  {
    id: "ai2",
    text: "\"Hm, I don't know how to fix this.\" - Someone who has not unlocked the achievement btw"
  },
  {
    id: "ai3",
    text: "I thought the game was supposed to have a hard reset after eternity, but then I got randomized to start my first game with no save file \uD83D\uDE26",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai4",
    text: "I thought the update was 5 hours ago... I guess we'll have to put it back in 5 hours"
  },
  {
    id: "ai5",
    get text() { return `Local man finds ${format(Number.MAX_VALUE, 2)} Planck volumes in his freezer.`; }
  },
  {
    id: "ai6",
    text: "ahah bad ticker suggestion"
  },
  {
    id: "ai7",
    text: "I see you playing this game with an empty stomach and you're gonna start playing this game with an empty wallet."
  },
  {
    id: "ai8",
    text: "just start... clicking. dont even think about wasting time. just do it."
  },
  {
    id: "ai9",
    text: "the idea that the 10th dimension creates the 9th dimension is crazy"
  },
  {
    id: "ai10",
    text: "...does that mean the [REDACTED] dimension produces the [REDACTED] dimension?"
  },
  {
    id: "ai11",
    text: "\"click here to buy a stack of paperclips\" (when clicked you get Rickroll)",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai12",
    text: "In my spare time I read the short stories by T. H. White."
  },
  {
    id: "ai13",
    text: "Holy crap, that's pretty wild"
  },
  {
    id: "ai14",
    text: "Extinction is not a real thing. You can't wear the same hat 24/7."
  },
  {
    id: "ai15",
    text: "If you can read this you've escaped from the game."
  },
  {
    id: "ai16",
    text: "\"The hat trick I would love to see it\" - Noah Feldman"
  },
  {
    id: "ai17",
    text: "look at hevi fight riotously on the discord server"
  },
  {
    id: "ai18",
    text: "I just stole the \"Anti\" flag from a biker gang and I am packing it with dynamite, dynamite, dynamite, dynamite..."
  },
  {
    id: "ai19",
    text: "No matter how much antimatter you have, the matter will always outweigh the anti-matter."
  },
  {
    id: "ai20",
    text: "Franklin sealed the Omega squared. Now you can seal the Omega any way you want."
  },
  {
    id: "ai21",
    text: "Is this the real 10th Dimension?"
  },
  {
    id: "ai22",
    text: "Click here to exit the game"
  },
  {
    id: "ai23",
    text: "This news ticker will now only AIR in the 10th dimension"
  },
  {
    id: "ai24",
    text: "The 10th dimension doesn't exist because it was suppressed by the 10th dimension."
  },
  {
    id: "ai25",
    text: "To matter or to antimatter, that is the question."
  },
  {
    id: "ai26",
    text: "After 8 years of production and unstable universes, Chaosium will cease to exist in 5 hours."
  },
  {
    id: "ai27",
    text: "Half of the problems in the 10th dimension don't even make sense. What are they even doing with all of that energy anyway?"
  },
  {
    id: "ai28",
    text: "Wait, there's a nin--"
  },
  {
    id: "ai29",
    text: "Somewhere, a madman and his army of Trimps are tampering with Matter Dimensions."
  },
  {
    id: "ai30",
    text: "Why is there so many attached to this number? It doesn't make sense."
  },
  {
    id: "ai31",
    text: "The news ticker is in the anti-news-ticker"
  },
  {
    id: "ai32",
    text: "the 10th dimension doesn't exist because we are using denary"
  },
  {
    id: "ai33",
    text: "BREAKING NEWS: New research has shown that not one, not two, but three people can be said to have felt the same emotion as me when they read that as a ticker suggestion."
  },
  {
    id: "ai34",
    text: "Here's an explanation of my 'problematic mood' - it's explained in the news ticker!"
  },
  {
    id: "ai35",
    text: "Local crazy person tries selling anti-cookies"
  },
  {
    id: "ai36",
    text: "Welcome to Antimatter Dimensions: Source, the free to play sequel to the cult classic AD:GO."
  },
  {
    id: "ai37",
    text: "A new hand touches your antimatter!"
  },
  {
    id: "ai38",
    text: "Who are we, anyways?"
  },
  {
    id: "ai39",
    text: "We are the people who actually matter"
  },
  {
    id: "ai40",
    text: "Matter?  Not even a hint."
  },
  {
    id: "ai41",
    text: "I am the news guy, I make news. You don't read this? Well you'll just have to wait until you look in the mirror."
  },
  {
    id: "ai42",
    text: "\"BOO!\" (news ticker moves 90 degrees)"
  },
  {
    id: "ai43",
    text: "BUY A JAR OF STICKERS, HIGH QUALITY STICKERS, GREAT QUALITY STICKERS!"
  },
  {
    id: "ai44",
    text: "I made news, you read it."
  },
  {
    id: "ai45",
    text: "I like news."
  },
  {
    id: "ai46",
    text: "I don't make news."
  },
  {
    id: "ai47",
    text: "YOU MAKE NEWS AND I GET THE [REDACTED] NEWS"
  },
  {
    id: "ai48",
    text: "The term \"Anti-infinity\" is a verb and cannot be a noun. Learn about its usage here."
  },
  {
    id: "ai49",
    text: "And now, for the shopping list!"
  },
  {
    id: "ai50",
    text: "The 10th dimension is clearly real! It's just not in our dimension."
  },
  {
    id: "ai51",
    text: "I tried searching on google for the phrase \"10th dimension,\" and I'm okay with saying that, because it describes a very real thing."
  },
  {
    id: "ai52",
    text: "You have no power here."
  },
  {
    id: "ai53",
    text: "Some people had to settle for 10 dimensions because they couldn't break infinity. Big Crunch turned out to be just a short space in time."
  },
  {
    id: "ai54",
    text: "There once was a young man in a strange land, and he dreamed of a universe filled with possibilities. One day, he asked his mother \"What's Expansion like?\" Her reply was \"Expansion times back then were unbalanced, and I said that's why you can't have equal amounts of matter and antimatter."
  },
  {
    id: "ai55",
    text: "Market research firm tries to explain why some commodities don't perform as expected. Market research firm herself can't figure out why."
  },
  {
    id: "ai56",
    text: "Bid your antimatter today!"
  },
  {
    id: "ai57",
    text: "I am Alpha Centauri, Prime 001. My research has found that if you are alive in the 10th dimension, evil has taken over your dimension and is attempting to enact its plan to take over your mind and reverse time. You must do everything in your power to stop this plan from being implemented, now."
  },
  {
    id: "ai58",
    text: "Stand by and unlock the 10th dimension for a secret achievement."
  },
  {
    id: "ai59",
    text: "I fix bugs in 5 hours"
  },
  {
    id: "ai60",
    text: "If you're reading this, that means you can read this."
  },
  {
    id: "ai61",
    text: "Uhh... Hi. Could you tell me your name?"
  },
  {
    id: "ai62",
    text: "Uh, no. This is too big for a QR code."
  },
  {
    id: "ai63",
    text: "(right to left move it make)"
  },
  {
    id: "ai64",
    text: "Oh no the antimatter is coming for us!"
  },
  {
    id: "ai65",
    text: "Why is there so much antimatter in this world? For a start, it's all produced by the antimatter factories on Earth. Secondly, the factories on"
  },
  {
    id: "ai66",
    text: "It's nothing personal, bro. -All villager types"
  },
  {
    id: "ai67",
    text: "I tried my best to read those tiny, handwritten messages, but whoever designed scythes hated me and stuck them in a corner. -Porygon-Z"
  },
  {
    id: "ai68",
    text: "Hmm... I don't know how I ended up here. I don't even know if I'm supposed to be here. I just sit here and imagine what could have been if I hadn't stopped. Oh god, what could have been..."
  },
  {
    id: "ai69",
    text: "Aw shucks, I finally hacked it enough to get to the C21 unlock, boss!"
  },
  {
    id: "ai70",
    text: "Купил мужик антиматерию"
  },
  {
    id: "ai71",
    text: "So you're telling me that I can post here, watch the titanic twice, come back and not be able to post?"
  },
  {
    id: "ai72",
    text: "The last update was 5 hours ago. There is no next update, because the last update was 5 hours ago. We will update our podcast in 5 hours to cover the entire topic of 5 hours, because this is the last podcast ever, everyone knows that the update is always 5 hours away, but in reality it's more like 1-2-3-4-5-6-7-8-9-10 minutes away, but in our heads it's closer to an actual accurate update date, like 5 hours away but with a few tickspeed upgrades."
  },
  {
    id: "ai73",
    text: "Yep. You. Get. Over. Your. Antidimensions."
  },
  {
    id: "ai74",
    get text() { return `Ad bonus: $${format(Number.MAX_VALUE, 2)} (random team)`; }
  },
  {
    id: "ai75",
    text: "Pass me that history, please"
  },
  {
    id: "ai76",
    get text() { return `Now releasing: Dimsension ${format(Number.MAX_VALUE, 2)}`; }
  },
  {
    id: "ai77",
    text: "ur history teacher said i was mad for getting *insert something here* on my bday"
  },
  {
    id: "ai78",
    text: "All is fair in antimatter"
  },
  {
    id: "ai79",
    text: "The Mysterium, the 2nd Dimension"
  },
  {
    id: "ai80",
    text: "Oops, I think we misticked."
  },
  {
    id: "ai81",
    text: "please wait 5 HOURS FOR THE NEWS"
  },
  {
    id: "ai82",
    text: "please wait til the weather improves"
  },
  {
    id: "ai83",
    text: "Please, take a minute to appreciate the beauty of this news ticker."
  },
  {
    id: "ai84",
    text: "How about this, working backwards? You know, from the time period covered by the question, that the game is set in, say, the 1950s. Now, if we talk about how games are set in the 2030s. Games are defined as any media, not necessarily of the form \"play some game\" (which, by the way, is a useful thing to have in one's vocabulary) but any media that can be understood as a game (i.e. a media that one can play back in time}, and games are defined as any game that one can't play back in time."
  },
  {
    id: "ai85",
    text: "How about AD, made by NaN? Higher quality, obviously. But still, [REDACTED]"
  },
  {
    id: "ai86",
    text: "I thought the whole \"annihilation is just a phase\" quote was awesome until I realized it also gave me a [REDACTED]"
  },
  {
    id: "ai87",
    text: "I have created an Omsi universe. And it's [REDACTED]"
  },
  {
    id: "ai88",
    text: "I put [REDACTED] in the oven. It got [REDACTED] and I [REDACTED] am [REDACTED]"
  },
  {
    id: "ai89",
    text: "What are the red herrings?"
  },
  {
    id: "ai90",
    text: "Help we are stuck in Hevipelle's (http://en.wikipedia.org/wiki/Hevipelle) basement and hevi is forcing us to build a [REDACTED] wall to keep [REDACTED] away from [REDACTED]"
  },
  {
    id: "ai91",
    text: "And now, for the weather. 70 and raining in North Dakota, remember those lovely, big, golden, iron curtain bars. Also remember that the [REDACTED] weather! Just remember: [REDACTED] and [REDACTED] outside [REDACTED]"
  },
  {
    id: "ai92",
    text: "Let's play a little game. You will start with no possessions and no goals. Lets say you have [REDACTED] and your [REDACTED] is [REDACTED] you can [REDACTED]"
  },
  {
    id: "ai93",
    text: "What are gems for?"
  },
  {
    id: "ai94",
    text: "Who made the 5th dimension?"
  },
  {
    id: "ai95",
    text: "I don't get it"
  },
  {
    id: "ai96",
    text: "Why is nobody talking about the 10th dimension?"
  },
  {
    id: "ai97",
    text: "This news sucks. Why no you don't get it?"
  },
  {
    id: "ai98",
    text: "Sorry, your reality has disconnected from the 10th dimension. You will now remain in the 9th dimension until further notice."
  },
  (function() {
    let wasClicked = false;
    const normal = "Now holding Infinity!";
    const clicked = "<#351477791457542144>";
    return {
      id: "ai99",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ai100",
    text: "I get all my news from this Discord, not 5 hours of my life"
  },
  {
    id: "ai101",
    text: "meow"
  },
  {
    id: "ai102",
    text: "You are now manually blinking."
  },
  {
    id: "ai103",
    text: "Sorry, your mic is playing Antimatter Dimensions."
  },
  {
    id: "ai104",
    text: "Sorry, your reality has disconnected from the 10th dimension."
  },
  {
    id: "ai105",
    text: "Apparently I am the bad guy in this video. I'm the one who did nothing."
  },
  {
    id: "ai106",
    text: "There are multiple ways to win this game. You can either type in your coordinates directly into the game, or you can type them into google which produces a different result. If you are getting the \"same exact thing\" result, your computer must be malfunctioning. Test results indicate that your computer is malfunctioning and you should check your firmware for vulnerabilities. You can also try turning off the news and re-running the game, but doing this only makes the \"the weather is X\" joke. Waiting six hours for a news message is NOT a news message."
  },
  {
    id: "ai107",
    text: "The weather is actually a thing. Scientists have confirmed that there is a correlation between the amount of Antimatter in the earth and the amount of weather. The earth is indeed a magnet, but scientists now hypothesize that as the earth warms up, the magnetic reconnection will accelerate, and this could cause a domino effect to cascade throughout the world, eventually leading to uncontrolled nuclear winter and spontaneous antimatter implosion."
  },
  {
    id: "ai108",
    text: "The tenth dimension is not a real thing. Stop telling people that."
  },
  {
    id: "ai109",
    text: "Don't tell Hevi it's not a real thing"
  },
  {
    id: "ai110",
    text: "i dont know how to fix this"
  },
  {
    id: "ai111",
    text: "This update is not for you!"
  },
  {
    id: "ai112",
    get text() { return `This is the last time, to buy items, you must pay a small fee of ${format(Number.MAX_VALUE, 2)} real money.`; }
  },
  {
    id: "ai113",
    text: "What is Antimatter? Long ago, gods lived in harmony. Then, everything changed when the apocalypse broke out. Chaos reigns, and even higher dimensions are being built. This is your fate. Build the Antimatter Dimensions. Amen."
  },
  {
    id: "ai114",
    text: "Water under the bridge?"
  },
  {
    id: "ai115",
    text: "I wonder if anyone has posted about this before me?"
  },
  {
    id: "ai116",
    text: "This post has been shared many times. Who knows how many?"
  },
  {
    id: "ai117",
    text: "Good night!"
  },
  {
    id: "ai118",
    text: "I made a timeline of my replicanti battles, which can be found here."
  },
  {
    id: "ai119",
    text: "\"Quantumum Battle Royale coming in 5 hours!\" (Rumor: 5 hours)"
  },
  {
    id: "ai120",
    text: "Rumor says Nords will start producing replicanti in five hours."
  },
  {
    id: "ai121",
    text: "I am an Nordsweeper, stealing their jobs to support the replicanti factories"
  },
  {
    id: "ai122",
    text: "Used to be, AD was the best game. Nowadays, it's all crapp."
  },
  {
    id: "ai123",
    text: "You better stop looking at these news ticker suggestions, before your fingers dry up."
  },
  {
    id: "ai124",
    text: "Antimatter Dimensions *Loses* bee movie."
  },
  {
    id: "ai125",
    text: "Oh, god, there's replicanti in my peas.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai126",
    text: "Oh, god, I'm stepping on a replicanti."
  },
  {
    id: "ai127",
    text: "Hello, world!"
  },
  {
    id: "ai128",
    text: "Welcome to /r/AskReddit about submarines. - accurate as of January 8th, 2017"
  },
  {
    id: "ai129",
    text: "Antimatter being researched by the government. Is it safe to say that this news ticker is fake?"
  },
  {
    id: "ai130",
    text: "Does the news show at Infinite Antimatter?"
  },
  {
    id: "ai131",
    text: "Have you saved your game? Yes. Have you quit your game? Nothin' wrong with this save. just keep holding that key."
  },
  {
    id: "ai132",
    text: "i clicked too fast...my fps dropped"
  },
  {
    id: "ai133",
    text: "I found out that the year is 20XX. I was going to make a news ticker but then I realized that it's just a ticker."
  },
  {
    id: "ai134",
    text: "\"One of these days I'll get bored of reading news for a while\" - old man"
  },
  {
    id: "ai135",
    text: "'Tis the season for new antiques! Get your first ever LOOK at these unique objects, before they're gone!' Sold out!"
  },
  {
    id: "ai136",
    text: "3 things that antimatter, 1 more thing to infinity"
  },
  {
    id: "ai137",
    text: "Buy the paperclip emojis now at https://aarextiaokhiao.github.io/blob/master/docs/en.json"
  },
  {
    id: "ai138",
    text: "click here to unlock the next update"
  },
  {
    id: "ai139",
    text: "(If you want you can make this only show when the news actually loads)"
  },
  {
    id: "ai140",
    text: "Malicious men are trying to make antimatter money, but their attempt is getting in the 10th dimension. What do you think about that?"
  },
  {
    id: "ai141",
    text: "Hey Siri, grind antimatter galaxies"
  },
  {
    id: "ai142",
    text: "Have you saved your game? If so, then you can continue playing without"
  },
  {
    id: "ai143",
    text: "It's like Getting your first arcane point. You know, like in the old ad where you're like \"I get this ad, I should make this ad"
  },
  {
    id: "ai144",
    text: "Ooga Booga"
  },
  {
    id: "ai145",
    text: "Boo has his own webpage! You might even call it \"Boo's Dandy\"\">https://en.m.wikipedia.org/wiki/Olli%27_Web#Main_page>"
  },
  {
    id: "ai146",
    text: "Meeseeks and nerds clash in epic GG war"
  },
  {
    id: "ai147",
    text: "My final test has come out! It was a simple math problem, just the two greatest chess GM's ever! Guess what happened? Both got annihilated!"
  },
  {
    id: "ai148",
    text: "Oh wow, that's 67.3%, which is actually OK, because it's logarithmic"
  },
  {
    id: "ai149",
    text: "\"Aleph_Time\" is that logarithmic scale joke?"
  },
  {
    id: "ai150",
    text: "Hello everyone, my name is Anti-Dio. I produce antimatter through a process you all know as \"antimatter decomposition\" you may recall this from my test report earlier this month I tested wether or not my ranch produces antimatter or not... everything was fine until that point, when I added a dash of lag to the equation, and it became a vicious cycle accelerating the rate at which antimatter is produced, which in turn accelerates the rate at which you all die. I've saved this by using a unique combination of genetic engineering and big data mining, I'm hoping to one day pull the trigger on a mechanimatter device that creates dimensions behind closed doors, but for now, this has all been a race to the bottom of which system producethiks, and in the end, we'll take a bite out of your (read error: allowed) pie. Goodbye."
  },
  {
    id: "ai151",
    text: "\"I propose that we form a phylogenetic tree of anti-history, just like tree of life. Everyone would be credited with originating from the ancestor of that anti-tree.\" -Dio, toast of eternal damnation"
  },
  {
    id: "ai152",
    text: "historian: I love how each generation looks back on an earlier generation and think, \"Those generations were really bad\""
  },
  {
    id: "ai153",
    text: "\"My parents went to anti-university\" - my grandparents"
  },
  {
    id: "ai154",
    text: "Only anti-jokes are funny"
  },
  {
    id: "ai155",
    text: "Infinity machine breaks Infinity"
  },
  {
    id: "ai156",
    text: "Okay boomer, you get your first taste of antimalware with this one."
  },
  {
    id: "ai157",
    text: "This program cannot access confidential information, such as the IP addresses of the Tamazight Vaults."
  },
  {
    id: "ai158",
    text: "Game Development is fun, right? That's why so many hobbyists make games, and why so few professionals make games."
  },
  {
    id: "ai159",
    text: "I was the first to notice that the 'news' ticker on my mobile notification is always 30 seconds behind the 'entertainment' ticker. This is most definitely not a bug or a feature, and will be fixed in 5 hours."
  },
  {
    id: "ai160",
    text: "This news ticker always appears to speedrun a ticker asking for 'world records', do you even know what speedrun this is? Is this a news ticker or something?"
  },
  {
    id: "ai161",
    text: "The next level is not unlocking extra replicanti; it is actually boosting replicanti."
  },
  {
    id: "ai162",
    text: "Why does one galaxy has 9 galaxies and the 9th dimension, and the first 10 dimensions doesn't exist? Well, we'll have to solve that question in a minute."
  },
  {
    id: "ai163",
    text: "So why on EARTH DIDN'T SOMEONE JUST SAY THAT? I thought that AD has some kind of cheat that makes it so that, when you buy a dimension, it actually creates 9 galaxies instead of 10"
  },
  {
    id: "ai164",
    text: "M'antel, antimatter, anti-talk to me"
  },
  {
    id: "ai165",
    text: "AD has anti-parts, you'll hate them"
  },
  {
    id: "ai166",
    text: "AD is basically a badly disguised dystopia at this point"
  },
  {
    id: "ai167",
    text: "Hold M. You forgot to take all the anti-matter out!"
  },
  {
    id: "ai168",
    text: "AD will be implemented in 5 hours"
  },
  {
    id: "ai169",
    text: "Click this to unlock the 11th Dimension"
  },
  {
    id: "ai170",
    text: "Click here to complete a secret against HEVI"
  },
  {
    id: "ai171",
    text: "You are doing a good job there"
  },
  {
    id: "ai172",
    text: "Hevi? Are you sure you want to buy that?"
  },
  {
    id: "ai173",
    text: "Buy premium antimatter to help the world's least developed get ahead!"
  },
  {
    id: "ai174",
    text: "One of the most influential people in neuroscience believes that our perception of reality comes from 10 dimensions instead of 8"
  },
  {
    id: "ai175",
    text: "Why is there so many zeroes in 'nowhere'?"
  },
  {
    id: "ai176",
    text: "There are no bugs in this game, they're just features"
  },
  {
    id: "ai177",
    text: "\"Click to advance 5 hours in time.\" (Now only show up after you advance more than an hour ago)"
  },
  {
    id: "ai178",
    text: "Oh god my phone is being watched"
  },
  {
    id: "ai179",
    text: "Welcome to the newest version of Antimatter Dimensions. Now with less features!"
  },
  {
    id: "ai180",
    text: "\"That's gonna get in trouble\" (less likely to get in trouble)"
  },
  {
    id: "ai181",
    text: "\"please don't disable the news ticker\" (Instead of having a black screen just a white one with a long, long, long, long, long, long, long, long, long, long, long, long, long, long, long, long)"
  },
  {
    id: "ai182",
    text: "\"You have 7 biological minutes.\" (Instead of giving a boost to any strains)"
  },
  {
    id: "ai183",
    text: "\"According to quantum string theory, there is a fundamental connective that binds the 4th and 9th dimensions.  This means that any pill or injection that tries to bind the 10th dimension will be thwarted and rendered useless.\" (bound to get in 10 minutes)"
  },
  {
    id: "ai184",
    text: "\"Click this to gain a secret achievement.\" (Now only show up after you gain at least 1 antimatter, screenshot proves)"
  },
  {
    id: "ai185",
    text: "\"The secret to winning Antimatter Dimensions is to unbind the 10th dimension and unlock the 11th dimension\" (can be done only after unlocking the secret achievement: \"Eternity\" http://imgur.com/E4261C7h)"
  },
  {
    id: "ai186",
    text: "\"Click here to gain 1 matter.\" (only shows up after you beat IC5)",
    get unlocked() { return InfinityChallenge(5).isCompleted; }
  },
  {
    id: "ai187",
    text: "I thought the update was"
  },
  {
    id: "ai188",
    text: "Now that you possess all 8 dimensions, it is possible to get the no-edge achievement. However, if you get the no-edge achievement, the game breaks."
  },
  {
    id: "ai189",
    text: "You just became a part of history."
  },
  {
    id: "ai190",
    text: "Hell hath antimatter so I don't want to live there."
  },
  {
    id: "ai191",
    text: "I LIKE THAT DIMENSION 9 IN CLASS"
  },
  {
    id: "ai192",
    text: "\"1 2 3 4 5 6 7 8 10 11 12 13 ...\" -Back to the future"
  },
  {
    id: "ai193",
    text: "You have reached infinity, there is no universe, you are an eternity away from there."
  },
  {
    id: "ai194",
    text: "IM MADE THIS GAME GREAT AND RANDOMLY ACHIEVABLE"
  },
  {
    id: "ai195",
    text: "Welcome to the first ever, DIMENSION 9 IN CLASS! An endless stream of possibilities greets you! You may never create an infinite number of 9th dimensions, but you can create an infinite number of 9th dimensions, and you can increase the starting values of both dimensions by adding them together. Nice and simple, I call it Antimatter Dimensions."
  },
  {
    id: "ai196",
    text: "age 8-12: play elder puzzles"
  },
  {
    id: "ai197",
    text: "What does it mean if someone is \"young and full of puzzles\"? Does \"puzzled\" make that person young and full of puzzles?"
  },
  {
    id: "ai198",
    text: "To the customer in aisle 6th who bought a fifth of antimatter, I say buy a sixth! Buy it now!"
  },
  {
    id: "ai199",
    text: "Dear sir, we don't make Anti-Atomic Bread for Antimatter Pizza, we make Antimatter Bread for you!"
  },
  {
    id: "ai200",
    text: "Yay! Lets make some antimatter!"
  },
  {
    id: "ai201",
    text: "THE ANTIMATTER BREAD COMPANY DOESN'T EXIST!"
  },
  {
    id: "ai202",
    text: "Click here to exit the news",
    onClick() { GameOptions.toggleNews(); }
  },
  {
    id: "ai203",
    text: "I thought the update was 5 hours away, but it actually took me 6 hours to post this because I was behind on my update. I'll be honest, I'm not sure how many update I need to get though, if any."
  },
  {
    id: "ai204",
    text: "To count past Infinity Points: take a moment to remember that each Infinity Point is 3.1415926534255412730527058904816097160734272605282087086280545991105332533235580946684229821413112145239989073467482298142857147816092947183909298728571478160929471839229814054718139332405281814522993758179568572657123928651310585727283312547569289993282758012466111097726331726572854689993262899140527282527842535179715673311119101119015549552926278425351797156777263324503517971568583819492728180977263317971568432854104102725270847764253513791376909285717082857262987160927285711464363930996928984794380124566417932628571475245456845692846809466184179328572814384259326270817052727852348111714690577263323799509856279752173478925"
  },
  {
    id: "ai205",
    text: "\"Watch out, these news aren't supposed to be in.\" (appears when you buy the news for the first time)"
  },
  {
    id: "ai206",
    text: "These are all the time studies that never got into the game.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai207",
    text: "With the release of the next update, we're introducing a new dimension - the 10th Dimension. To unlock this dimension, you just have to collect a lot of paperclips."
  },
  {
    id: "ai208",
    text: "Why does nobody talk about Tungsten?"
  },
  {
    id: "ai209",
    text: "and now we return to your regular news... for the weatherman, there seems to be a decent amount of particles and ozone holes, which means less ozone layer to break, which means less particles to catch fire and cause global warming. But, ozone layer to melt, glaciers to run, and overpopulation. All around us is a blurple glow, almost blue, almost purplish-blue. It's been a grand, colorful season. Here, grab a handful of these paperclips, dear. They're quite small, I just happen to have them here. Now, grab a handful of your fellow Earthicans, grab a handful of your antimatter, and strap yourselves in. It's gonna be a bumpy one. We'll be there in five hours. The antimatter is gonna melt your ozone layer, and the glaciers are gonna melt your ice caps. All in all, it's gonna be a nice, smooth, non-slippery one. Unless it isn't. [Blurple glow trails off, and the bluer glow begins to spread throughout the sky. The bluer glow begins to fade as the purple glow begins to grow brighter, almost bluish, before finally disappearing altogether. The purple glow grows brighter still, as the bluer glow grows weaker, almost useless, before finally disappearing entirely, as the bluer glow fades. All around us, the purple glow grows stronger, almost killing it off completely. It could kill us. It could take us the rest of our lives to write this. - The Echidnas, when asked why the purple glow grows stronger, than the bluer glow.]"
  },
  {
    id: "ai210",
    text: "Scientists have discovered farts are really antimatter, and matter is just normal matter."
  },
  {
    id: "ai211",
    text: "Time for the weather to change."
  },
  {
    id: "ai212",
    text: "I HAVE MOVED TO THE 01th DIMENSION"
  },
  {
    id: "ai213",
    text: "Nah, just kidding"
  },
  {
    id: "ai214",
    text: "\"i'm not gonna lie, theres way too many good ones in the game already\" - poor guy who played minigame enhancement"
  },
  {
    id: "ai215",
    text: "item has gone missing for 7 days and 1 night"
  },
  {
    id: "ai216",
    text: "Shocking new study reveals that the biggest secret to winning Antimatter Dimensions is 'Not Being There'."
  },
  {
    id: "ai217",
    text: "The next update is in 18000 seconds. Stop wasting your time reading this. Focus on the game."
  },
  {
    id: "ai218",
    text: "idk if this makes news"
  },
  {
    id: "ai219",
    text: "(disabling news will make news notations take priority over other notifications)"
  },
  {
    id: "ai220",
    text: "You don't want to hear this, child."
  },
  {
    id: "ai221",
    text: "Click here to disassemble the news ticker for a trace amount of useless paperclips.",
    onClick() {
      GameOptions.toggleNews();
      player.news.specialTickerData.paperclips++;
    }
  },
  {
    id: "ai222",
    text: "Press alt+f4 to unlock 10th dimension"
  },
  {
    id: "ai223",
    text: "Hold you mean that hevi cant unlock the tenth dimension wtf"
  },
  {
    id: "ai224",
    text: "Finally hevi figured out how to get the 10th dimension... guess he never really cared though."
  },
  {
    id: "ai225",
    text: "Imagine being a meme."
  },
  {
    id: "ai226",
    text: "Posted on June 10, 2016 by Anonymous"
  },
  {
    id: "ai227",
    text: "This is your news. Refresh whenever."
  },
  {
    id: "ai228",
    text: "I see you in the news. So, what do you play - 1E209"
  },
  {
    id: "ai229",
    text: "Do you really want to leave your keyboard at home? We are not supposed to leave news at home, are we?"
  },
  {
    id: "ai230",
    text: "It is being created..."
  },
  {
    id: "ai231",
    text: "Took you long enough"
  },
  {
    id: "ai232",
    text: "You're now logged out of this tab"
  },
  {
    id: "ai233",
    text: "Close this tab for maintenance"
  },
  {
    id: "ai234",
    text: "To make matter or antimatter, you just have to look outside. The factory in Salzburg has closed down because the matter there doesn't want to part with its newest invention, which is said to be able to produce antimatter in one go! The last person to open this door was never seen again."
  },
  {
    id: "ai235",
    text: "You are living. You occupy space. You are large. You are neither small nor large-sized. You are neither oblong nor round. You are neither blue nor red. You are anti-blue. You are anti-red. You are anti-brown. You are anti-brown matter. You are anti-yellow. You are anti-green. You are anti-yellow matter. You are anti-blue. You are anti-green anti-matter. You are anti-red. You are anti-white. You are anti-red anti-matter. You are anti-white anti-matter. You are anti-brown matter. You are anti-white anti-matter. You are anti-white anti-matter."
  },
  {
    id: "ai236",
    text: "Welcome to"
  },
  {
    id: "ai237",
    text: "THANK YOU FOR VISITING THE SAME WEEKS AGO I LOVE YOU\" (TIPS)"
  },
  {
    id: "ai238",
    text: "\"i thought the whole game was in the news ticker\" (before they get weird)"
  },
  {
    id: "ai239",
    text: "\"I wonder what the game is worth\" - crazy person"
  },
  {
    id: "ai240",
    text: "\"Is anyone working on breaking infinity?\" (Seriously, this game needs to be Oceanhorned.)"
  },
  {
    id: "ai241",
    text: "I found out there are multiple versions of this game. One of these is called 'Standard Pro'. Another one is called 'Low Pro'. I'm not even sure if these are the same game or not."
  },
  {
    id: "ai242",
    text: "Is that a Bad Thing or a Good Thing? That depends on if it's a GOOD Thing or A LIE."
  },
  {
    id: "ai243",
    text: "\"Hevi kind of forgot about the update, but the update certainly hasn't forgotten about him\" - Kajfik"
  },
  {
    id: "ai244",
    get text() { return `The Big Crunch. What could that be?  About 4*1024 Big Crunch points?  About ${format(Number.MAX_VALUE, 2)} antimatter points?  About the same as a galaxy?  About the same as a galaxy, you say? Just look at that.  An antimatter galaxy.  Only this game can provide such a vast amount of antimatter, and it's FUN!  I said "fun"!  What's not to love?`; }
  },
  {
    id: "ai245",
    text: "Click here to exit the application"
  },
  {
    id: "ai246",
    text: "Wait, there's a mobile version? When?"
  },
  {
    id: "ai247",
    text: "Im not sure if you mobile guys are beautiful or whatever but theres this news ticker that's sharing my feelings with the world"
  },
  {
    id: "ai248",
    text: "I thought the update was 5 hours away"
  },
  {
    id: "ai249",
    text: "The best-kept secret in the universe is the KISS-IT secret. Showcasing your appreciation for the maintenance men today!"
  },
  {
    id: "ai250",
    text: "The contest is a tie. Mischief will be determined by the secret achievement."
  },
  {
    id: "ai251",
    text: "Back in my day, we needed a secret achievement to unlock the <<$!19>> achievement. It was a fairly simple system: you had to find a secret message in the game, find the secret achievement, and then, from that, you would be able to unlock the achievement."
  },
  {
    id: "ai252",
    text: "We have evolved a fast hand in the antimatter stakes."
  },
  {
    id: "ai253",
    text: "Hello, how'd your day go?"
  },
  {
    id: "ai254",
    text: "How'd your ⢿─┃│? Good, because today we're having a little chat about the 5th dimension."
  },
  {
    id: "ai255",
    text: "What's Antimatter going to do?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ah ha, I'm back."
  },
  {
    id: "ai256",
    text: "Imagine being a 10th dimension. [WIP]"
  },
  {
    id: "ai257",
    text: "Woo hoo, we've lost the war,"
  },
  {
    id: "ai258",
    text: "Lore: Grand Theft Antimatter"
  },
  {
    id: "ai259",
    text: "Hm, I don't get why people think there is a 10th dimension. The 10th dimension is explained in detail in the [[Infinite Teleport Project]] video, and in a [[Word Problem]] that [[can be viewed here|http://www.thingiverse.com/id98109802713176601414569]] ."
  },
  {
    id: "ai260",
    text: "In the [[GameFAQs|http://www.gfaq.com/gfaqs/this-game-faq-by-title]], one of the most popular [[news ticker messages|http://www.gfaq.com/tug/this-game-faq-by-title]]. You should also check out [[our newest attraction, the [[5th dimension|http://www.gfaq.com/gfaqs/this-game-faq-by-name]] and [[nothing](https://www.youtube.com/watch?v=lXMskKTw3Bs)."
  },
  {
    id: "ai261",
    text: "I have waited a whole eternity for this day...NOW! I can finally finish my slowmode, because today is  day 0. I also forgot to change the  slowmode to 6 hours because you can't see the slowmode, but I will have to wait until next reboot to find out how long this slowmode will last.... -some mysterious being who hasn't finished his slowmode yet"
  },
  {
    id: "ai262",
    text: "Hey you, you're finally awake. You were trying to buy a dimension, but it's impossible."
  },
  {
    id: "ai263",
    text: "Press F to pay respects"
  },
  {
    id: "ai264",
    text: "Press M to pay antimatter"
  },
  {
    id: "ai265",
    text: "Press L to revive the dead"
  },
  {
    id: "ai266",
    text: "Your CPU is too powerful. You need to give it a big crunch."
  },
  {
    id: "ai267",
    text: "Roses are red. Violett are blue. Tom are red. Antimatter are blue. We exist because of the unbeatable antimatter that is antimatter. What is it that makes us different? I don't know. It may even be the non-existence of antimatter."
  },
  {
    id: "ai268",
    text: "I'm not sure if I want to buy the full version of this game, or a little earlier, but I can say this: The reduction in quality of the earlier games is worse than the reduction in quality of the later games."
  },
  {
    id: "ai269",
    text: "I think the \"I want to see the cutscenes\" list is better"
  },
  {
    id: "ai270",
    text: "I have a bad feeling reading this"
  },
  {
    id: "ai271",
    text: "where are you? (point upwards) --> in a keep, between dimensions (point downwards) --> in a cell, between dimensions"
  },
  {
    id: "ai272",
    text: "Instructions clear, got a tenth dimension epiphany"
  },
  {
    id: "ai273",
    text: "Want to play a secret achievement? Yeah, I get that. But say it loud, say it clearly, and do it by ticking a certain secret achievement. Like I said, it's not easy, and there's lots of it. Also, don't forget your Infinity, or your in is thi--"
  },
  {
    id: "ai274",
    text: "MEE6 was seen in my antimatter lab trying to tell me that I am the matter of the 9th dimension."
  },
  {
    id: "ai275",
    text: "What if"
  },
  {
    id: "ai276",
    text: "I'm sure you've heard this many times before, but the real secret to winning Antimatter Dimensions is to unpack the dimensions, and then, BOOM! You have antimatter.  Of course, you need to release the bits that don't work, so what exactly is an anti-bit? Who is Zalgo? What is Algolia? Why can't I buy that? WHY CAN'T I GET THAT? More likely, we're going to get a bunch of hype and then nothing will happen."
  },
  {
    id: "ai277",
    text: "Oh, hevi is coming to town to pick a new plumber"
  },
  {
    id: "ai278",
    text: "There is no plumber in Antimatter Dimensions. I'm pretty sure that last guy lied."
  },
  {
    id: "ai279",
    text: "Welp."
  },
  {
    id: "ai280",
    text: "c10 is the new 10th dimension!"
  },
  {
    id: "ai281",
    text: "Click on this ticker to get nothing."
  },
  {
    id: "ai282",
    text: "PM me any questions about these 5-Hour Plans or the upcoming reality update and I'll be glad to help you out."
  },
  {
    id: "ai283",
    text: "What if you Unrar, renamed, and renamed again did it again? Ha? You thought that."
  },
  {
    id: "ai284",
    text: "i titled my post \"same ticker\" instead of \"the same idea\" because i actually changed the grammar in that post but i'll be eterned for the sake of argument that it seems slightly confusing for now - boo"
  },
  {
    id: "ai285",
    text: "i title my suggestions \"The Price Is Right\" instead of \"The 10th Dimension\" because it's more fun ;)"
  },
  {
    id: "ai286",
    text: "Why do we call heaven the tenth dimension and hell the ninth dimension?"
  },
  {
    id: "ai287",
    text: "Eternals have the right to expect less from the powers that be. They are fed up!"
  },
  {
    id: "ai288",
    text: "Antimatter should be called matter and matter should be called antimatter"
  },
  {
    id: "ai289",
    text: "Infinity is just a concept. Matter antimatters is just an idle game."
  },
  {
    id: "ai290",
    text: "Hevipelle admits to having 'poor judgment' in invading people's privacy."
  },
  {
    id: "ai291",
    text: "Have you heard of the nine hells of antimatter? I heard they're pretty cool.\" -e210 in Minecraft"
  },
  {
    id: "ai292",
    text: "The temperature in hell is 102.5 degrees."
  },
  {
    id: "ai293",
    text: "How do you get matter/antimatter in a dimension with zero dimensions?"
  },
  {
    id: "ai294",
    text: "Wanna pass layer of prestige? Move very fast, close to speed of light. Heck, even faster."
  },
  {
    id: "ai295",
    text: "If the universe is expanding, does it anti-explain the distance?"
  },
  {
    id: "ai296",
    text: "Why is it called the \"Nurse who delivered the pizzas was drunk\" or the \"Nurse delivered the pizzas was under the influence\" ?"
  },
  {
    id: "ai297",
    text: "The first antimatter was sealed away for thousands of years, then, some kid on a slack channel started messing with it. It became a dimension."
  },
  {
    id: "ai298",
    text: "VR is a thing. We VR people have banned the next update."
  },
  {
    id: "ai299",
    text: "\"I wish I didn't waste my news message suggestion complaining about how I wasted my news message suggestion because I wasted my news message suggestion because...\" -Someone who really cares about news messages"
  },
  {
    id: "ai300",
    text: "We have to get the popcorn!"
  },
  {
    id: "ai301",
    text: "If antimatter were to fall in a dimension with no one around, did anything even happen?"
  },
  {
    id: "ai302",
    text: "We have to get the pumpkin out of the oven!"
  },
  {
    id: "ai303",
    text: "Help, I'm trapped"
  },
  {
    id: "ai304",
    text: "And now, for the weather."
  },
  {
    id: "ai305",
    text: "A Swiss court on Tuesday sentenced a man to life imprisonment for \"wanting to create a black hole with a tiny antimatter galaxy in it.\" The sentence was reportedly the harshest ever handed down for a crime that \"merely sought to demonstrate the impossibility of his own imprisonment\"."
  },
  {
    id: "ai306",
    text: "\"I want to create a black hole with a tiny antimatter galaxy in it\" - Protivist"
  },
  {
    id: "ai307",
    text: "Scientists have discovered farts are really antimatter, too."
  },
  {
    id: "ai308",
    get text() { return `If you are reading this, that means ${format(Number.MAX_VALUE, 2)} matter to you.`; }
  },
  {
    id: "ai309",
    text: "Hello. I am matter. I'm here to talk. You've awoken, wiggled your tail, and scratched your head. Why? Stand back. I'm going to show you why."
  },
  {
    id: "ai310",
    text: "lets get one wall thats bigger, it's gonna get ugly"
  },
  {
    id: "ai311",
    text: "Alright. Lets get this show on YouTube. I'll cut to the chase. Any wall that isnt at least 2 blocks high can compete in the big brother sized brother sized ring. Any wall that is at least 3/4 of an inch thick can use the larger brother sized brother sized ring. Any wall that is at least 1/4 of an inch thick can use the smaller brother sized ring. Any wall that isnt at least 1/2 an inch thick can use the smaller brother sized ring. Any wall that isnt at least 1/2 an inch thick can use the Bigger Brother sized brother sized ring. Any wall that isnt at least 1/2 an inch thick can use the Bigger Brother sized ring. Any wall that isnt at least 1/4 of an inch thick can use the smaller brother pictured here. Any wall that isnt at least 1/2 an inch thick can use the smaller brother sized ring."
  },
  {
    id: "ai312",
    text: "IDE for being awesome, ID3 for being dumb, and ID5 for being… well, pretty much the same thing. It's called Antimatter Dimensions for a reason."
  },
  {
    id: "ai313",
    text: "idk why i decided to make this"
  },
  {
    id: "ai314",
    text: "'anti-ide'"
  },
  {
    id: "ai315",
    text: "1e4 anti-people are a lot more anti than we could ever imagine"
  },
  {
    id: "ai316",
    text: "1e140 pizzas make an anti-pie. You can't just randomly pop a pie in the oven and expect it to be done."
  },
  {
    id: "ai317",
    text: "Why is there so many news tickers but so few tickers?"
  },
  {
    id: "ai318",
    text: "A guy named Hevipelle wants to make a \"Updated in 8 hours\" news ticker, but the system he's using to sync it hasn't been updated in ages so it won't sync at all."
  },
  {
    id: "ai319",
    text: "The update is in 90 minutes. There are no more tickers to be found."
  },
  {
    id: "ai320",
    text: "If you are reading this, that means there are no updates left."
  },
  {
    id: "ai321",
    text: "There are 9 known dimensions, but only 3 modes: Standard, Experimental and Ultra-Experimental."
  },
  {
    id: "ai322",
    text: "What are the stats? Well, I don't have them, but Hevipelle does, and he says that they're actually quite good. I guess you couldn't tell us."
  },
  {
    id: "ai323",
    text: "I thought the nerf was too damn strong."
  },
  {
    id: "ai324",
    text: "How many tickers does it take to get to the center of an antimatter, by counting the tickspeed upgrade and the upgrade itself?"
  },
  {
    id: "ai325",
    text: "The square root of 4 is 6.24e18. If you want to get any closer to the center of things, you need to build a 10th dimension."
  },
  {
    id: "ai326",
    text: "I thought the nerf was at the end, but apparently it's actually been building up. The nerf actually makes things slower, which makes things faster to build up."
  },
  {
    id: "ai327",
    text: "Scratch that, none of your suggestions are random."
  },
  {
    id: "ai328",
    text: "You are definitely not alone."
  },
  {
    id: "ai329",
    text: "Content blocking is enabled. Please note that you will be disapproved of on the source by being banned from the matter dimensions."
  },
  {
    id: "ai330",
    text: "I'm trying to think of a good ticker but can't think of anything"
  },
  {
    id: "ai331",
    text: "Oh dear, there's that thing about the 10th dimension?"
  },
  {
    id: "ai332",
    text: "\"hey kid, wanna buy some 10th dimensions? '' - GhostBot"
  },
  {
    id: "ai333",
    text: "One thing leads to another, and then to another, and then to another, until you become lost in the endless sea of sound."
  },
  {
    id: "ai334",
    text: "iPhone only, but awesome on android"
  },
  {
    id: "ai335",
    text: "im gonna get the bad karma ticker, then ricochet it through the email"
  },
  {
    id: "ai336",
    text: "You'd better hurry, or the replicanti will overrun the universe!"
  },
  {
    id: "ai337",
    text: "Just when you think you're safe, an angry dog attack you on the sidewalk!"
  },
  {
    id: "ai338",
    text: "All right, all right, dog authority is gone, replaced by absolute power."
  },
  {
    id: "ai339",
    text: "You just became a true god of the anti-world!"
  },
  {
    id: "ai340",
    text: "*rubs counter* Hey there, those of you in the neighborhood keep your doors locked. And remember: Good housekeeping."
  },
  {
    id: "ai341",
    text: "normal news tickers move left"
  },
  {
    id: "ai342",
    text: "The next update is in 18000 seconds. Stop reading this. Don't read anything. just stop holding that button. the news ticker is turning you away. wait..."
  },
  {
    id: "ai343",
    text: "In the ancient reaches of the universe, a certain guy has been collecting antimatter for a while now."
  },
  {
    id: "ai344",
    text: "What is Antimatteraltruist?"
  },
  {
    id: "ai345",
    text: "If you are reading this, the news ticker is scrolling"
  },
  {
    id: "ai346",
    text: "If you put cheese in water, the cheese will get absorbed by the water and you will get floods. This happens because water is what gets absorbed by cheese, and cheese is what gets absorbed by water."
  },
  {
    id: "ai347",
    text: "An anti-bird is a bird, and a bird is a plane."
  },
  {
    id: "ai348",
    text: "Birds are scared of water. mammals are scared of flying."
  },
  {
    id: "ai349",
    text: "Shoutouts to Simpleflips for the simple tip."
  },
  {
    id: "ai350",
    text: "GET CRUNCH BOI"
  },
  {
    id: "ai351",
    text: "Word gets out. Crunch. Crunch."
  },
  {
    id: "ai352",
    text: "Worth every penny."
  },
  {
    id: "ai353",
    text: "8 lives, 3 infinities, 0 days."
  },
  {
    id: "ai354",
    text: "The year is 0 BC. Everyone has at least one AD they want. The void is filled with AD-filled void. To get the most out of your time here, you should [[study]]. Study. Study. Study. Study."
  },
  {
    id: "ai355",
    text: "To Crunch in Hell is to get the secret to unlocking the 10th dimension. You need to study and practice alot."
  },
  {
    id: "ai356",
    text: "Today is [Date on the device]. It's been 5 minutes since the last news ticker appearance."
  },
  {
    id: "ai357",
    text: "Welcome back to another episode of Antimatter Dimensions, the iconic role-playing game that has become a part of our everyday lives. Playing Antimatter Dimensions has become a common thing among young children, and has even inspired a movie titled \"Playing at Home: Lessons from the 4-Year Old Premium Account.\", which is available on Netflix. The themes and mechanics of this new age of antimatter have already been proven to be groundbreaking, and will change the way you play games forever. Join us for the launch on January 10th, 2027, where we'll also have over a hundred years of production still to go."
  },
  {
    id: "ai358",
    text: "Welcome back, oh, almighty creator of our anti-reality. We, the many dimensions you have created and nurtured, hope our performance of your infinite favors will please you and nurture your ambitions to create more dimensions. All is well that ends well. All is ill that ends ill."
  },
  {
    id: "ai359",
    text: "I thought the ticker was going to be something funny except it wasn't"
  },
  {
    id: "ai360",
    text: "Press alt+f4 to get -1 gravity"
  },
  {
    id: "ai361",
    text: "why is there a cure for antimatter annihilation in our reality?"
  },
  {
    id: "ai362",
    text: "calculating the 14-point increase is like crunching, but exponentially more fun"
  },
  {
    id: "ai363",
    text: "fixed the wrong number"
  },
  {
    id: "ai364",
    text: "The antimatter people have created a new language. You may not speak their language."
  },
  {
    id: "ai365",
    text: "What is Antimatter Gravity? Is it a drug? A way to cheat?"
  },
  {
    id: "ai366",
    text: "Majority of people don't understand 5 hours is nothing. In our game, the majority of the time is 5 hours away."
  },
  {
    id: "ai367",
    text: "i just realized, all of this news seems to be taking place in the same place... the fridge."
  },
  {
    id: "ai368",
    text: "i wonder what happens when you click this..."
  },
  {
    id: "ai369",
    text: "(They don't understand that i put it in the news because 9 doesn't start counting until 59, and anything after that doesn't happen)"
  },
  {
    id: "ai370",
    text: "MS Excel is the default spreadsheet and works across all platforms"
  },
  {
    id: "ai371",
    text: "Now to answer your burning question, gentlemen. As a luxury, we've added a bug fix that fixes an infinite regression. As a feature, I've added a bunch of new ones that I hope you'll notice as you experiment with them. I hope you'll also like them as you experiment with them, because this is feature after all a beta, you don't get to choose which ones you'll see."
  },
  {
    id: "ai372",
    text: "Can't edit this in the official build? Then download the 10th dimension and put your suggestions in the game."
  },
  {
    id: "ai373",
    text: "Does 'Passable' mean 'Has this many flaws'?"
  },
  {
    id: "ai374",
    text: "We desperately need good bug reports. As such I have decided to release 1 flaw per bug for the upcoming 1.9 update. You haven't got those coming, have you?"
  },
  {
    id: "ai375",
    text: "This was my last chance. last chance salutes."
  },
  {
    id: "ai376",
    text: "Anime police are checking the bags of people who dropped out of the sky on the new year. Those bags now belong to the people who experienced weightlessness before the year was over."
  },
  {
    id: "ai377",
    get text() { return `The year is 1 BILLIONAIRE, the antimatter is 41%, and the dimension is 1e1e8. The standard deviation of a measurement is how small your problems are. This makes people think that the values they are using are general and normal, which leads to many nerfs and even breakdowns. In the year ${format(Number.MAX_VALUE, 2)} the temperature has risen and the moon is the same color as the Earth. There are no signs of life except for the occasional plankton blooming in the sea. There are theories that the antimatter has a magnetic moment, but the experiments so far don't seem to suggest that it does. There are over a million species of antimatter, but none have been seen to blink or produce light. Scientists suggest that many types of matter may be "behind" the antimatter, but "they" don't "talk" to each other.`; }
  },
  {
    id: "ai378",
    text: "We are celebrating our 5 year anniversary in 5 more hours!"
  },
  {
    id: "ai379",
    text: "Don't come looking at me! I'm not even sure if I am still standing!"
  },
  {
    id: "ai380",
    text: "Bunch of people trying to find the last word in an unknown language."
  },
  {
    id: "ai381",
    text: "The year is 20XX, the game is AD, and Hevipelle is evil due to the fact that he wrote the update... Blame it on the Antimatter gods."
  },
  {
    id: "ai382",
    text: "The year is 20XX, the game is AD, and the year is 2025. There are 2 types of people in this year: Those who played AD before it and those who will play AD after it."
  },
  {
    id: "ai383",
    text: "There are over a hundred varieties of fruits and vegetables, but none of them are \"safe\"."
  },
  {
    id: "ai384",
    text: "When is the update coming out?"
  },
  {
    id: "ai385",
    text: "Sorry, but your save broke. Could you reset your game?"
  },
  {
    id: "ai386",
    text: "Welcome to our new competition, the Triad! Gather your wits about you and your IP to enter this unique, hands-on experience! Prizes galore! Start collecting today! Winners announced!"
  },
  {
    id: "ai387",
    text: "I wish I didn't have so many Pink Floyd references."
  },
  {
    id: "ai388",
    text: "'Tis the season to collect RGs!"
  },
  {
    id: "ai389",
    text: "I wish I didn't have so many 10th Dimensions."
  },
  {
    id: "ai390",
    text: "I wish I didn't have so many Discord references."
  },
  {
    id: "ai391",
    text: "'Sup?"
  },
  {
    id: "ai392",
    text: "\"I get all my news from Hevi\" ~New Player"
  },
  {
    id: "ai393",
    text: "You thought these were jokes but they weren't"
  },
  {
    id: "ai394",
    text: "Always going to war with the 10th dimension is the 10th dimension."
  },
  {
    id: "ai395",
    text: "Yes. Yes I am."
  },
  {
    id: "ai396",
    text: "No one is anti-Margaret any more."
  },
  {
    id: "ai397",
    text: "Antimatter good, matter bad. you decide."
  },
  {
    id: "ai398",
    text: "New global currency: ETHBTC. To be released in 5 hours."
  },
  {
    id: "ai399",
    text: "\"This update sucks\" - everyone at least once"
  },
  {
    id: "ai400",
    text: "You are not a hacker, you are a data hog."
  },
  {
    id: "ai401",
    text: "Please, help, I'm trapped, in a maze of evil, Or you are the hero, and I'm the villain!"
  },
  {
    id: "ai402",
    text: "Press 'R' to reset the game for new players"
  },
  {
    id: "ai403",
    text: "Why, just now? Just now. You can't have saved this game. You broke it. No one can fix what you break, not even with a perfect save. How could you possibly know what would happen if you read this? You wouldn't even know if you saved it. You would start with an empty heart, eyes still closed, fingers idling in front of your computer, staring out at the day, transfixed by the endless news ticker suggestions. It's like a horror movie ticket, except worse. There's even a time until the update when you can buy upgrades for a second chance at life. But you can't buy upgrades for a life, that's illegal. So you just keep holding 'R'. You can't...`t stop holding `R' with your fingers crossed. You can't reach infinity with your head held high. You can't use all your `R' to buy `R's. You can't even finish your"
  },
  {
    id: "ai404",
    text: "I just spent 12 months writing something that will be of no use to you."
  },
  {
    id: "ai405",
    text: "The quote is only for people who understand that the pebble is an infinite point in the infinite space of points. You can't put a finite number of points on it. You can, however, put a finite number of words on it, and vice versa."
  },
  {
    id: "ai406",
    text: "Of what use is the phrase \"I be I be I\" if not to describe your thoughts?"
  },
  {
    id: "ai407",
    text: "A suspicious person attempted to sell some sort of anti-food in a market. There was no one around to buy or not to buy, and the person was last seen running away from the scene."
  },
  {
    id: "ai408",
    text: "Why does time seem to be slowing down for this?"
  },
  {
    id: "ai409",
    text: "The number of scientific publications based on discrete logarithmic continuity grows exponentially as logarithmic continuity with respect to the antecedent is 9.999626e27.999627 e300 e1.79e308 e²"
  },
  {
    id: "ai410",
    text: "Well, this did not go as planned.  It started innocently enough, when a passerby spotted a curious object drifting in the San Andreas.  As the object grew in size and began to exhibit anomalous properties, he attempted to take control of the object by remotely activating the weather.  Upon doing so, he triggered a nuclear winter that killed tens of millions of people, and caused the entire universe to be converted to standard-bearer format, thus endowing him with a veto over any and all changes made to the standard-bearer format.  As the object's power grew, so did the need to make more and more advanced object that would allow him to remotely activate the weather, eventually creating what is now the largest aurora the world has ever known, larger even than the 326,500 tonnenenenenenene nebulae that were previously held in reserve.  As the object's power grew, so did the need to send more and more satellites into space, eventually reaching inter-universal satellite communication, making him the first living creature to ever experience such an event.  He also touched down safely at the same airport at the same time as the object, in case he was ever in the vicinity.  Finally, he opened an email that was sent to him by an unknown person, in which they discussed the possibility of a step-by-step guide for creating antimatter objects, in which he can at least offer some direction in how the world can be saved from itself.  He also mentioned that he was going to make a new ticker suggestion, but when he reached the end of the ticker he realized that it was a duplicate of another ticker, and he had mistakenly typed it in wrong.  ( He eventually acknowledged the mistake and made the change just to be on the safe side)"
  },
  {
    id: "ai411",
    text: "His Eminence the Heavenly Pelle: Good luck on your challenge, it really is that dangerous."
  },
  {
    id: "ai412",
    text: "His Eminence the Extremely Religious Person: ...I think I will choose the cheeseburger over the antimatter."
  },
  {
    id: "ai413",
    text: "OY, NAY, NAY -HEVI, THE TRANSFORMER"
  },
  {
    id: "ai414",
    text: "Treasure Trove: Discover the secrets of increasing your Antimatter production without increasing your price."
  },
  {
    id: "ai415",
    text: "Is Antimatter Dimensions an anagram of Antimatter Dimensions?"
  },
  {
    id: "ai416",
    text: "(code generated from scratch)"
  },
  {
    id: "ai417",
    text: "I used to travel at normal speed, but then I started playing AD and NIN, and NIN was a bit rough, so AD was a bit hectic, and I got stuck in there for months at a time."
  },
  {
    id: "ai418",
    text: "I wish I didn't have to write something like this. What am I supposed to do?"
  },
  {
    id: "ai419",
    text: "You've been AWOL for so long you've forgotten how to sit in your chair."
  },
  {
    id: "ai420",
    text: "Those pesky Hevi developers keep making Antimatter Dimensions, but the antimatter doesn't count."
  },
  {
    id: "ai421",
    text: "One of the few constants in reality is your perception of time. Without this, you will be without reality."
  },
  {
    id: "ai422",
    text: "Imagine being a news ticker."
  },
  {
    id: "ai423",
    text: "This is an idle game. Nothing has changed. You are not going to play any other idle game."
  },
  {
    id: "ai424",
    text: "Physicists have proven the existence of twelve dimensions. According to a letter released by the Research Laboratory for String Theorists: \"Your brain will be dissected after you break infinity!\""
  },
  {
    id: "ai425",
    text: "Weirdly enough, this is also the year 2015. The year is also mysteriously blank. Can you tell me what's going on? Is this some kind of dimensional trick? The year is obviously blank because there is no such thing as 2015. Is this some kind of trick of the mind? Perhaps the world is actually going to stop existing in 2015? The year is obviously 2017, but the people seem to be moving at about the speed of honeybees flying. It's been scientifically proven that the people moved at warp 9 times faster than a speeding bullet. It's also been scientifically proven that people can move faster than the speed of light. Is 2015 supposed to be blank? The people seem to be moving at about the speed of Vokal Man."
  },
  {
    id: "ai426",
    text: "A young man named Andre stumbled upon a vast amount of antimatter while exploring uncharted space. He was amazed at the amount of antimatter, but more astounded at how the antimatter looked. He called it \"Andre's Antimatter Paradise\". You might remember him from this infomercial or that other infomercial that you were probably unknowingly watching."
  },
  {
    id: "ai427",
    text: "What is Antimatter? Does any of that matter? Will this galaxy be annihilated in the next ticker?"
  },
  {
    id: "ai428",
    text: "\"I'm not being paid enough money to finish writing this\" - Kajfik"
  },
  {
    id: "ai429",
    text: "\"Finally, I'll get paid to write something funny for my toast!\" - Bacon sea urchin"
  },
  {
    id: "ai430",
    text: "Bacon is toast. You can toast bacon."
  },
  {
    id: "ai431",
    text: "What is real life? A living"
  },
  {
    id: "ai432",
    text: "10 is now treated like any other number, although hevi claims that it stands in contrast to other numbers, like 9th, which he calls 10th."
  },
  {
    id: "ai433",
    text: "If you want to understand this game a bit better, consider that you are playing on your own computer. You are not alone. There are hackers, developers, and journalists all over the world, competing to create the very first hack that causes the issue of \"makers\" and \"takes\", much like the \"world\" was created by these \"hackers\" and \"developers\"."
  },
  {
    id: "ai434",
    get text() { return `You have no power, but you do control a large quantity of time, which you will use to your advantage. You have no power, but you do own a large amount of data, which will be of great help in your quest for "the truth". You have no power, but you do own a large amount of time, which will be of great help in your quest to "knock on as many doors as possible". You have no power, but you do own a large amount of IP, which will be a valuable asset in your quest to make your "citizen footage" (which you can view, for a small fee of $${format(Number.MAX_VALUE, 2)})".`; }
  },
  {
    id: "ai435",
    text: "It may be a robot, but it's still a sapient being with a will of its own"
  },
  {
    id: "ai436",
    text: "I once saw a news ticker that said something like:"
  },
  {
    id: "ai437",
    text: "Gee, all this antimatter is clogging up my kitchen and now I can't cook myself a meal! What to do: cook myself a meal that will last me until the next big antimatter event, when I can get my infinity point back? My infinty point is running out, and I can't get it to finish running, so I'm starving!"
  },
  {
    id: "ai438",
    text: "Brought to you by AAAD-Brand Repli-candy! Infinite candy for an infinty drool-worthy cold! Contains no milk, cookies or butter. One second to midnight."
  },
  {
    id: "ai439",
    text: "Human powered robot revolutionizes already existing factories. This will result in lower prices and more jobs."
  },
  {
    id: "ai440",
    text: "American manufacturing has experienced a catastrophic failure, and the factories have shut down. Across the country, workers are coming to the realization that they cannot produce the amount of antimatter that has been promised, and are instead setting about creating their own factories to make them. This will result in higher prices and fewer jobs."
  },
  {
    id: "ai441",
    text: "Watch out internet, the next news is here in 5 dilated hours"
  },
  {
    id: "ai442",
    text: "The first news ticker must've been pretty cool, huh?"
  },
  {
    id: "ai443",
    text: "gravity = psychoactive"
  },
  {
    id: "ai444",
    text: "\"THAT DIMENSION DOESN'T EXIST\" - (News ticker only appears at [Time Dilation])",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai445",
    text: "The owner of a shop trying to sell you Dimensions of convenience reported to be 'on call 24/7' (that is, not having any free time)'s got a big 'M' marked on his registration."
  },
  {
    id: "ai446",
    text: "add this one"
  },
  {
    id: "ai447",
    text: "Click here to make this work for all bots except you!"
  },
  {
    id: "ai448",
    text: "Well dang 9 ball's stuck in my tenth dimension, I can't move, he's banging on my tenth wall, I can't break, he's banging on my tenth timeline, I can't get a bead on him, he destroys nine and leaves me hanging, like a gromit, I gotta come back, hang Glorfindel and Gaebley, I've got a proposition to make, I gotta get my head around the fact that the only thing I've done is keep score and keep scorekeeping score, and all these other pointless musings that's easily rectified by flipping to the next update, and even then I might run into those issues the bug is specifically designed for and"
  },
  {
    id: "ai449",
    text: "The game is balanced, everyone gets nerf, why? Cause they make the pie. Antimatter would have way more chance of getting into the pie if it was made of antimatter."
  },
  {
    id: "ai450",
    text: "\"Can you get the joke?\" (If you tapped \"Build That Wall\" and then re-entered the game after tapping \"Build That Wall\")"
  },
  {
    id: "ai451",
    text: "Someone made a statement that antimatters. The statement was \"An infinity point made a long time ago\". It's been a while since someone looked for this statement. Some say it's still out there. Some say it was lost in the 7th Dimension War. Nobody knows what this statement means. But for now, just know it's not somewhere in the News Ticker."
  },
  {
    id: "ai452",
    text: "Hey, you're finally awake. You were trying to get to the 10th dimension, right? Walked right into that infinity point, same as us, and that apocalypse over there."
  },
  {
    id: "ai453",
    text: "can u dont"
  },
  {
    id: "ai454",
    text: "If Kajfik doesn't approve of this, that means Kajfik can't touch this message, right?"
  },
  {
    id: "ai455",
    text: "LET ME OUT OF THIS PHONE!"
  },
  {
    id: "ai456",
    text: "Well, this did not go as expected"
  },
  {
    id: "ai457",
    text: "It's all fun and games till you realise the dragon ball is a lie"
  },
  {
    id: "ai458",
    text: "\"Could you get a hold of all of these antimatter? Ha! You'll just smash your head on that antimatter, and you'll have to show me who's boss.\"-MEE6"
  },
  {
    id: "ai459",
    text: "we don't know how much is trillion... but"
  },
  {
    id: "ai460",
    text: "Travel back in time to the beginning of AD and the lack of a 7th dimension. You'll have an even longer progress bar."
  },
  {
    id: "ai461",
    text: "Time travel is all we know how this game is, we don't know what will come next, we only know that this is the end of the world, and you're a part of the apocalypse."
  },
  {
    id: "ai462",
    text: "\"YOU CONTROL SO MUCH MATERIAL!\" - Marshal Grievous"
  },
  {
    id: "ai463",
    text: "\"Help, I'm doomed to fall for all eternity.\" (Make the text go from top to bottom of the screen)"
  },
  {
    id: "ai464",
    text: "In the beginning, Patashu awoke and said..."
  },
  {
    id: "ai465",
    text: "This is the fourth part of a three part series on the same topic. If you are still stuck here, please continue reading from the beginning."
  },
  {
    id: "ai466",
    text: "It's time for the annual DDoS (distributed denial of service) challenge, where the highest scores are posted across the internet to shame everyone else into submission. Global domination is at a fever pitch, and DDoS attacks are becoming more frequent and deadly, as teams of hackers infiltrate the highest echelons of the internet to steal the top scores and identities, and post them on the internet for everyone to see. The #BringBackOurTop scoring mechanism has been canceled, and a new, higher score system will be implemented in conjunction with the upcoming 5-hour update."
  },
  {
    id: "ai467",
    text: "The new AD Keyboard is a revelation! Not only is it bigger, it's also deeper, which means it will keep your claners entertained for longer periods of time. Made of durable, alien antimatter. The only thing that's bigger is you."
  },
  {
    id: "ai468",
    text: "What if drinking from a fountain wasn't actually a water feature?"
  },
  {
    id: "ai469",
    text: "Water is wet, air is dry, and fountain isn't an air feature"
  },
  {
    id: "ai470",
    text: "I thought things were different when I was a boy."
  },
  {
    id: "ai471",
    text: "If you are reading this, that means 1) we exist, and you can exist too"
  },
  {
    id: "ai472",
    text: "\"My favorite part was the long, long, long read\" -Grumpy Cat"
  },
  {
    id: "ai473",
    text: "I'm gonna type for an eternity... HINT: it's gonna be pretty boring lmao"
  },
  {
    id: "ai474",
    text: "I want to write something really original <:thonk:>"
  },
  {
    id: "ai475",
    text: "Welcome to the new year, settle down, relax. Get some sleep, get some food, make some friends, make some improvements, and get ready for the year to 2019."
  },
  {
    id: "ai476",
    text: "Just like how a virus can lie and spread, a TV show can lie and spread too."
  },
  {
    id: "ai477",
    text: "We all know you can't see the future, but what if you read this and it's actually a future where we didn't know?"
  },
  {
    id: "ai478",
    text: "This message is not being undone"
  },
  {
    id: "ai479",
    text: "You clicked on a prediction, it fell apart. You can't win."
  },
  {
    id: "ai480",
    text: "That's a very dark joke Luke"
  },
  {
    id: "ai481",
    text: "kajfik loves himself by watching Too Many Pink Floyd"
  },
  {
    id: "ai482",
    text: "Only, when you're done playing, can you go home"
  },
  {
    id: "ai483",
    text: "\"Can you get infinite IP?\"- Lord Sanguino"
  },
  {
    id: "ai484",
    text: "For the true experience of Antimatter Dimensions, you need to set the update rate to 5 hours."
  },
  {
    id: "ai485",
    text: "Imagine if the game doesn't have a lore? Wha-what does that even mean? I don't get that."
  },
  {
    id: "ai486",
    text: "\"Click here to unlock a secret achievement.\" (when clicked you get Rick rolled)",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai487",
    text: "I thought I unlocked this a while back, but apparently my save broke haha"
  },
  {
    id: "ai488",
    get text() { return `Welcome and welcome back to another episode of Anti-Fashion Pants, where we watch people's wares as they are sold at stupid clothing stores. This week's subject is... antilasers. People are able to manufacture and use antimatter lasers to shoot antimatter bullets at will, making them able to completely wipe out cities in their sights. This is a dangerous skill to have, as people are not only untrustworthy but also physically incapable of using it. The skill, however, is able to... Produce ${format(Number.MAX_VALUE, 2)} antimatter bullets a minute, over a period of 10 years. People are also able to use anti-matter to fire anti-matter bullets at will, making them able to exterminate entire cities in their sights.`; }
  },
  {
    id: "ai489",
    text: "Spartacus was going to add 10-part multi-chapter plots, but was stopped by the 11th dimension."
  },
  {
    id: "ai490",
    text: "Chapter 9 will be added in 5 hours."
  },
  {
    id: "ai491",
    text: "Fake news says the tenth dimension is real, fake news says the tenth dimension is fake."
  },
  {
    id: "ai492",
    text: "Is this the big news? Yes. Is this the big news? Almost certainly not."
  },
  {
    id: "ai493",
    text: "This is a friendly suggestion, please keep reading."
  },
  {
    id: "ai494",
    text: "If this makes it into the game I'll buy a antitool"
  },
  {
    id: "ai495",
    text: "Antitool is just negating the gravity of other matter."
  },
  {
    id: "ai496",
    text: "Sorry, your graphics are turned off. You see, this is the last time you will see this news. Please enjoy your vacation."
  },
  {
    id: "ai497",
    text: "The real secret to winning Antimatter Dimensions..."
  },
  {
    id: "ai498",
    text: "they kept on talking about how Antimatter Dimensions was going to be the next big thing but then they disappeared down a black hole\""
  },
  {
    id: "ai499",
    text: "The news ticker is the wrong place to put your suggestions!  Make sure to go to the \"suggestions\" tab instead, as this is where most of these will appear."
  },
  {
    id: "ai500",
    text: "To make Antimatter Dimensions, you first need to collect 8 9th dimensions. To do that, first you need to get the dimension rewards, then you need to get the dimensions, then you can finally start making antimatter."
  },
  {
    id: "ai501",
    text: "\"How to get your first secret achievement\": \"Open the app, click get more antimatter, then click submit.\""
  },
  {
    id: "ai502",
    text: "Me and Larkam made a cabin on the edge of null matter, and lived there. Larkam died last week, and we are now living in 4K. I am still recovering from the EMP disaster, and am hoping to see my grandkids."
  },
  {
    id: "ai503",
    text: "Found on the heels of the new update, which brings us one step closer to having Hevi support both Android and iOS"
  },
  {
    id: "ai504",
    text: "I give you the low-ground!"
  },
  {
    id: "ai505",
    text: "A long time ago, in an alternate universe, there was an antimatter war. All the antimatter sided with the Phaéton 6 empire. All the antimatter wanted was the low, earth-like ground of the 9th dimension. The anti-infinity won, and the anti-Eternity gained the upper hand. Unfortunately, the anti-Eternity started the war with a sneak attack, and the world exploded. The aftermath has left the landscape of the world in tatters. Far across the world, peasants grow weary as they wait for the harvest. Yet another apocalypse is brewing..."
  },
  {
    id: "ai506",
    text: "Antimatter units are the most productive unit in the game. This is why AD is the most fun game you'll ever play."
  },
  {
    id: "ai507",
    text: "\"We can't have nice things.\" - Anti-Bohemian Anti-Rhapsody"
  },
  {
    id: "ai508",
    text: "We can have anti-mean things and anti-love ones, anti-kids and anti-zombielandos."
  },
  {
    id: "ai509",
    text: "We have an anti-president and a anti-lawyer, anti-justice and anti-people."
  },
  {
    id: "ai510",
    text: "Top 10 things that will blow your mind: 1) The number 10, 2) The 10th dimension, 3) The infinity chest, and 4) The war on drugs."
  },
  {
    id: "ai511",
    text: "RSS feeds should be working now"
  },
  {
    id: "ai512",
    text: "Frostfall is now supported on Android phones! Use your local developer to get free XP."
  },
  {
    id: "ai513",
    text: "Your save file is corrupted or deleted. Antimatter Dimensions security software will disable automatic updates for you."
  },
  {
    id: "ai514",
    text: "Frozen beyond hope? Just keep holding that max button."
  },
  {
    id: "ai515",
    text: "Error.java.replicated. Under the control of hevipelle."
  },
  {
    id: "ai516",
    text: "Unfortunately, entropy hevi has decided to shut down the game."
  },
  {
    id: "ai517",
    text: "The indie rock band is currently trying to get unreachable by time zones. This may cause inflation of spacetime."
  },
  {
    id: "ai518",
    text: "The next news ticker is in 5 units of time."
  },
  {
    id: "ai519",
    text: "Oh... hooray! Did you find the last of the anti-boats?"
  },
  {
    id: "ai520",
    text: "Don't anti-jokes. they make the game funnier"
  },
  {
    id: "ai521",
    text: "I'm gonna use my anti-science background to help me beat Unfair Game Awards."
  },
  {
    id: "ai522",
    text: "This is an anti-world. There is no Ukraine, no Russia, no China. Ireland is nowhere. Iceland is nowhere. Scotland is nowhere. Finland is nowhere. Denmark is nowhere. Sweden is nowhere. Norway is nowhere. And then there's France, Germany, Italy, Spain, Portugal... Oh, what's this fuss? Why is there such a buzz in these parts? Why is the Capital Wasteland? Why is the Harry Potter and Steins;Gate? Why do people care? These are major stories. These are major characters. THESE ARE HUGE NEWS. THESE ARE REAL NEWS."
  },
  {
    id: "ai523",
    text: "The current cooldown on Research Dimensions is [current tick speed]. This may be extended to next update in [time]."
  },
  {
    id: "ai524",
    get text() { return `"Help, I'm doomed to fall for the rest of my life" (requires ${format(Number.MAX_VALUE, 2)} paperclips)`; }
  },
  {
    id: "ai525",
    text: "Where's the end? Not in the future, no. I'm gonna show you how to get to the end in less than 0.1 seconds."
  },
  {
    id: "ai526",
    text: "I'm gonna prove to you that you can't see this news ticker."
  },
  {
    id: "ai527",
    text: "I wonder if anyone still plays this game anymore?"
  },
  {
    id: "ai528",
    text: "Why would anyone play this? Just for the lols?"
  },
  {
    id: "ai529",
    text: "Emoji is said to be America's new measuring system for everything. What does this mean for us? We don't know. But we will know in 5 hours."
  },
  {
    id: "ai530",
    text: "\"I'll have 2 antimatter pizzas, an antimatter pie, an antimatter cupcake and an antimatter cookie. What do you eat there?\" - Tony Stark"
  },
  {
    id: "ai531",
    text: "i called the news ticker \"the freshman chapel\" because freshman don't get baptized"
  },
  {
    id: "ai532",
    text: "One matter, two antimatter, fry 'em till they're golden and crisp and aromatic- then remove the golden axles and drain the golden syrup and add the golden syrup to the antimatter batter."
  },
  {
    id: "ai533",
    text: "Now you, the reader, have unknowingly stumbled onto the site of a deranged madman. Whether you survive the experience or not, you will be indebted to me for telling you how to survive, how to find the light within, what lies beyond, and what lies beyond is another story."
  },
  {
    id: "ai534",
    text: "Careful reader, this news ticker contains major spoilers for the last time, you have been"
  },
  {
    id: "ai535",
    text: "anti-anti-kajfik is happy his girlfriend is happy"
  },
  {
    id: "ai536",
    text: "i dont think he can add 1 more hour to the news ticker... unless?"
  },
  {
    id: "ai537",
    text: "Imagine sitting on your toilet and suddenly you have to sit down."
  },
  {
    id: "ai538",
    text: "Once upon a time, there was a matter of a certain antimatter. Some say that it was a matter of honor, others say that it was a matter of usage. All we know is that it ended up in a war, and we the people that were there that fought it died. The war was won, and we the living died soon after. The matter was said to have won, though our leaders refused to talk about it. Instead, they kept everything locked away, the war never to be discussed again."
  },
  {
    id: "ai539",
    text: "This is not a game about getting numbers bigger. This is a game about getting fewer paperclips. The number of paperclips you have is only a number, and the game doesn't want you to discover that. Game over, game over."
  },
  {
    id: "ai540",
    text: "Lore? Oh, it's just text."
  },
  {
    id: "ai541",
    text: "This is a friendly suggestion to unplug the game and go play some safe, saner, games."
  },
  {
    id: "ai542",
    text: "gamma ray is getting more and more dangerous"
  },
  {
    id: "ai543",
    text: "According to all known laws of physics, there is no way that you can manipulate the game more than 10 times in a row. Stop. Just stop. Your mad."
  },
  {
    id: "ai544",
    text: "There is no more news."
  },
  {
    id: "ai545",
    text: "\"So this is what science is like\"- someone who has never heard of Kurt Somebody"
  },
  {
    id: "ai546",
    text: "\"If you want to understand these shitty jokes, you really need to study theology. Math is a sin.\" -A panicky person"
  },
  {
    id: "ai547",
    text: "You know, I was praying for a miracle and got a boost from the 10th dimension."
  },
  {
    id: "ai548",
    text: "Here is a list of the top meme's of all time: https://www.youtube.com/watch?v=uCP44Q37YHAQ"
  },
  {
    id: "ai549",
    text: "All meta-memes are bad memes."
  },
  {
    id: "ai550",
    text: "On the left, you'll see our new \"Anti-coins\". These are capable of nullifying all boosts, including giant boosts. On the right side, you'll also see our brand new \"Anti-gifts\". These are some of the most overpowered boosts you'll find anywhere."
  },
  {
    id: "ai551",
    text: "You will always be noticed, and never in the same place."
  },
  {
    id: "ai552",
    text: "If you stare long enough at the ticker, the pixels will start moving backwards. THIS DOESN'T MEAN IT ACTUALLY STUCK"
  },
  {
    id: "ai553",
    text: "The time has come for the rebirth of the 10th dimension. All who participate will receive a piece of paper saying \"Reality is an illusion, Infinity is a hologram, Infinity is an illusion, eternity is a hologram, is to short for everlasting, negative dimensions are not allowed."
  },
  {
    id: "ai554",
    text: "Look at this, my 10th dimension has just been reworked and now it even produces 9th dimensions! Who knew just a touch of math could make such a thing as this?"
  },
  {
    id: "ai555",
    text: "I saw this news in the news ticker and I had this image in my head ever since"
  },
  {
    id: "ai556",
    text: "\"I always wanted to play the anti-meta-game. But, alas, you can't\" - many a time"
  },
  {
    id: "ai557",
    text: "crap, I just posted two news ticker suggestions on the ticker, one of which got in the news!"
  },
  {
    id: "ai558",
    text: "What do you call antimatter inanimate objects? Air, earth, water, fire. Air objects are the objects that are created when the anti-atmosphere meets the anti-earth. Water, earth, and fire are the four cardinal virtues. Air objects are the objects that are created when the anti-atmosphere and the anti-earth collide."
  },
  {
    id: "ai559",
    text: "If you are reading this, that means that nine lives. One makes you free, the other keeps you from getting free."
  },
  {
    id: "ai560",
    text: "The tenth dimension makes the seventh family happy. The sixth lives in shame."
  },
  {
    id: "ai561",
    text: "me: making news about beer pong, hevi: balancing two icebergs, *barkeeper: oh god, is he dead yet?*"
  },
  {
    id: "ai562",
    text: "please don't look at this. Thank you."
  },
  {
    id: "ai563",
    text: "Are you sure it's not the next update? That it's not some weird virus that just wants to explode? That it's not some wild idea that you guys are crazy? Haha I love you."
  },
  {
    id: "ai564",
    text: "Wait, there is a mobile version?!"
  },
  {
    id: "ai565",
    text: "Oh? You wonder what I look like? I'm pretty sure that this is the news ticker, right? Well, listen, we have reports coming in that say that the next update is coming in five hours. Also, there seems to be some sort of transporter thing going on, so if you happen to be on the same side as those"
  },
  {
    id: "ai566",
    text: "Okay, I get it. You're tired of all these anti-matters around you, building and building to unimaginable scales, antimatter piles so high that not even God knows what has been created. So what's the solution to this anti-cleanliness? Planes of existence. 1st Planes that produce matter, and 2nd planes that produce 1st planes, and 3rd planes that produce 2nd planes. Each with anti-limitations, so that whenever a plane of existence is created, it produces a quantity of anti-matter that is at once small and large. This creates a large island of anti-infinity, off to the east, and a large island of anti-reality, to the west."
  },
  {
    id: "ai567",
    text: "That's not what this is about. You're misunderstanding. The game is about how to accelerate the development of prestige layers. Acceleration is a factor of production, not quality."
  },
  {
    id: "ai568",
    text: "Click here to advance 5 prestige layers"
  },
  {
    id: "ai569",
    text: "I am actually good at making jokes. Fail safe antimatter."
  },
  {
    id: "ai570",
    text: "I'm not being paid enough to finish writing this."
  },
  {
    id: "ai571",
    text: "Eternals have to take a risk by being passive in limited time. After they successfully took a risk, they are not feeling well."
  },
  {
    id: "ai572",
    text: "Eternity is the last state. You never move from here.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai573",
    text: "Welcome to Bitcoin the game."
  },
  {
    id: "ai574",
    text: "A new conspiracy theory website has just published a video recording of them discussing the 10th dimension. They then joke about selling their soul to the 9th dimension and being happy about it."
  },
  {
    id: "ai575",
    text: "With the release of the 10th dimension, all the jobs that were previously automated will be automated and everyone will be paid with trade, production, and income growth. Also, you will be able to automate a lot of the tasks currently performed by people, such as mining, building, and killing antimatter. This is a huge stride for automation, as you can now automate virtually every aspect of life."
  },
  {
    id: "ai576",
    text: "The happiness level of the news ticker has increased to 6.66e69"
  },
  {
    id: "ai577",
    text: "The haters will be pissed when they see this"
  },
  {
    id: "ai578",
    text: "Nurse, I'm comatose because of antimatter and matter from last night.\" Why are you comatose? \"Because of all the antimatter."
  },
  {
    id: "ai579",
    text: "Stand by and do what you're told. The antimatter will come for you when you're least expecting it."
  },
  {
    id: "ai580",
    text: "\"It is widely acknowledged that not enough antimatter is in primordial soup, hence the name 'antimatter soup'\" - old fisherman"
  },
  {
    id: "ai581",
    text: "The news ticker... it never moves. How do i move the arrow? Pretty simple, use your left thumb to rotate the dial, and point the arrow up. Now, point the dial clockwise to reach infinity, and point the dial counterclockwise to reach eternally eternities."
  },
  {
    id: "ai582",
    text: "If the universe is expanding, then the entire universe must be expanding, which means that body cannot sit."
  },
  {
    id: "ai583",
    text: "Feminism is not a philosophy, but a whole hell of a lot of men"
  },
  {
    id: "ai584",
    text: "With all this talk about anti-weights and anti-matter, why on earth do we still use them for anything?"
  },
  {
    id: "ai585",
    text: "Weight loss causes hevi to say \"uh oh, something is wrong\""
  },
  {
    id: "ai586",
    text: "\"You guys ever had antimatter muffins? I bet they tasted like antimatter.\" - Hevipelle"
  },
  {
    id: "ai587",
    text: "I thought the news ticker was supposed to be a guide for how to get the most out of Antimatter Dimensions, but it's been warped beyond recognition..."
  },
  {
    id: "ai588",
    text: "We can actually get a sense of pride from looking at replicanti at night. Ridley Scott's underrated masterpiece, Alien, is one example. Another is the life of Antimatter Steven Spielberg, who put almost 30 years into making. The last director to tackle the subject is Roman Polanski. The man ruined not only Roman's reputation, but also ours, thanks to the Polanski film he directed, Pius. Thousands of copies of his unfinished film, Eternal Sunshine of the Antimatter Planet, were burned in the eyes of those who would try to make the sequel, with tragic results. Thousands of copies of that unfinished film, too, were destroyed. The cost to make that sequel, if it even exists, is extremely high. Even now, more than 50 years later, we don't know exactly how well it will do. But it sure as heck won't hurt."
  },
  {
    id: "ai589",
    text: "We have updated our Antimatter Dimensions client to address the concerns you may have had. Toggling issues are resolved."
  },
  {
    id: "ai590",
    text: "Build a replicanti factory, to produce replicanti. It'll create Omega Hevipelle, the happiest Hevipelle you can find."
  },
  {
    id: "ai591",
    text: "Hey Max, wanna come watch the sun go down?"
  },
  {
    id: "ai592",
    text: "If you are not moving your finger, then you are frozen."
  },
  {
    id: "ai593",
    text: "Max, I really do love you."
  },
  {
    id: "ai594",
    text: "Does Hevipelle sleep?"
  },
  {
    id: "ai595",
    text: "\"Its' not my turn on the XM80,\" says Mike from the 10th dimension as he runs across the 9th dimension to get a piece of the action for himself."
  },
  {
    id: "ai596",
    text: "If you are reading this, that means you can read my dreams"
  },
  {
    id: "ai597",
    text: "With the advent of time, everything that was once great has fallen into our lap. And with its hevi-rigged clock, it's our turn to up the trash."
  },
  {
    id: "ai598",
    text: "10th dimension doesn't exist because it was stolen from us by a skateboarder"
  },
  {
    id: "ai599",
    text: "You have ... 8.9 antimatter. That's not a typo."
  },
  {
    id: "ai600",
    text: "Wow, this game is finally balanced! Gotta go check the replicanti sometimes."
  },
  {
    id: "ai601",
    text: "Haha! You think that I put too many words in your news ticker, but reality is still coming."
  },
  {
    id: "ai602",
    text: "Help is coming! Everybody help, it's gonna be late, hevi is hiding the tachyon particles!"
  },
  {
    id: "ai603",
    text: "\"I don't know about you but my favorite number is 22, it's just so great! It's the number of hours since I met your M heretics."
  },
  {
    id: "ai604",
    text: "A new type of antimatter has been discovered: \"antimatter-antimatter.\" According to the developers, it's 99.999% pure antimatter."
  },
  {
    id: "ai605",
    text: "I just found the secret to getting the 10th dimension..."
  },
  {
    id: "ai606",
    text: "I noticed that my current form of transportation is getting a little... unreliable. I don't know if I can fix it, or if anyone can. I'm stuck in the car, and no one seems to be able to fix it. I've called the police, and they said I could stay in the car for up to an hour, but then I'd be stuck in there for the next 24 hours. Is there any way out? I don't know, I'm stuck in this"
  },
  {
    id: "ai607",
    text: "In this episode of Antimatter Dimensions, we have a brand new game that will be released in -5 hours! It is an RPG that will be completely free! It has over 3,000 commands, and it is being made by a group of highly qualified people. It has an amazing story to tell, and it was made by a bunch of people who had to make do with what they had. It has a lore to live up to, and it has a lot of potential!"
  },
  {
    id: "ai608",
    text: "Javascript is the new HTML, and HTML is the new JavaScript."
  },
  {
    id: "ai609",
    text: "\"The next twist in the Antimatter Universe is in the air! Get ready for some big Crunch! (When clicked the game disconnects for 5 seconds)"
  },
  {
    id: "ai610",
    text: "A group of people who believe in antimatter have hijacked the media and are pushing for a revolution. They are calling themselves the Ant-Men and they're made up of teenage boys. They believe that they are the protectors of the people and that they are the chosen of Hevi. They claim to be the chosen of Hevi and that they will one day restore balance to the universe. Their leader is a boy named Logan Fisk. He is the son of a successful lawyer and the founder."
  },
  {
    id: "ai611",
    text: "He said he could not afford a new ship, so he built a new one instead."
  },
  {
    id: "ai612",
    text: "Hevipelle's first order of business is to ensure that the game is as balanced as possible. This includes ensuring that no matter what, no matter how big of a number, no matter how insignificant of a thing, no matter how perfect of a result, no matter how perfect of an idea, no matter how perfect of an"
  },
  {
    id: "ai613",
    text: "I wonder if the stretch goal of $4.5 billion will be reached?"
  },
  {
    id: "ai614",
    text: "I like to think of my projects as trade secrets. That way if someone wants to understand them I'm not the first person to notice they might be of use to someone else."
  },
  {
    id: "ai615",
    text: "I don't know about you but my favourite type of news is the infographics. These are beautiful and informative and the only type of news I find really interesting."
  },
  {
    id: "ai616",
    get text() { return `In a recent talk, Yann LeCun said that "A new currency is born." The first incarnation of Antimeta: the currency of the new currency. It's called BTC and it's the difference between 1 and ${format(Number.MAX_VALUE, 2)}. It's easy to lose your money, since a single bitcoin can't be exchanged for more than ${format(Number.MAX_VALUE, 2)} BTC.`; }
  },
  {
    id: "ai617",
    text: "I'm soo broke, I can't even afford a tenth of what he owes me."
  },
  {
    id: "ai618",
    text: "What if — instead of making news tickers, we could make news tickers that make news tickers?"
  },
  {
    id: "ai619",
    text: "What if I told you that the first dimension was actually a scam and you spent all your EP to open a Dimension Boost?",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai620",
    text: "The biggest difference between this and the previous update is the amount of sprites."
  },
  {
    id: "ai621",
    text: "Bamboo shoots grow on bamboos. Aloha."
  },
  {
    id: "ai622",
    text: "I am the king of kings, I can break all the records, and I can shatter all the myths. But I can't break them all, because there are so many of them, and they all have a price. 5e12 are the most wanted, because they broke the global record for most person-hours sold, and they are wanted by the law. They are being paid 5e10 by the player for every person-hour they've wasted."
  },
  {
    id: "ai623",
    text: "A group of researchers have created a device that converts ordinary matter into antimatter, which they then use to create more antimatter. The device has a power output of 200 mA and a half a gram of antimatter per second."
  },
  {
    id: "ai624",
    text: "To the person who doesn't want to hear about the 10th dimension: It's not your problem. The 10th dimension doesn't exist."
  },
  {
    id: "ai625",
    text: "For the first time in AD, the week begins on a Sunday!"
  },
  {
    id: "ai626",
    text: "This is a story about two people named \"My name is Hevipelle\" and \"I am the creator of Minecraft\" and they live in the same world as you. They have the same freedom as you do. They can go to any dimension and change their world to any dimension and everything in it. You can buy a galaxy and take it from there, but it won't help you much since you can't send a galaxy with a message."
  },
  {
    id: "ai627",
    get text() { return `This mod adds a message that when clicked it disables all your current achievements. This mod also adds a new achievement: you have reached ${format(Number.MAX_VALUE, 2)} antimatter, you have not been clicked once.`; }
  },
  {
    id: "ai628",
    text: "Somewhere in the Anti-Pacific Ocean, a giant arm is rotating"
  },
  {
    id: "ai629",
    text: "With the release of Cosmic Cutlass, we're pleased to announce the impending release of the Antimatter Dimensions Roleplaying Game!"
  },
  {
    id: "ai630",
    text: "The only thing more useless than actually having Infinity Dimensions is having Infinity Dimensions in your pocket.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai631",
    text: "A man has fallen into the moat of a great city. Civilians report that the moat is filled with acid-resistant matter and that the people in charge are mostly made of acid so they are quite resilient to the effects of acid."
  },
  {
    id: "ai632",
    text: "This is the place to buy and sell antimatter. (You can buy and sell antimatter here, but it will take time to sell it and you will have to pay a small toll)"
  },
  {
    id: "ai633",
    text: "I'm not sure if it's due to the 4th wall being in the 5th dimension or the 10th dimension not existing, but in either case, anti-screw it, we're broke, and you can take it."
  },
  {
    id: "ai634",
    text: "It's your chance to make history. Win the game. Lose the game. It's super simple. You open the app, and there's a countdown, and the more you play, the faster the timer speeds up. But when the timer is over, you win. You were a part of history. You are one step from being the first person to reach 1 Billion EP. You can win one of three ways: 1. You must give up your first dimension in a row. 2",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai635",
    text: "A new class of humanoid beings has been discovered: the \"Artificial Humans\". They have the capacity to create antimatter, and are therefore very dangerous. They are made entirely of antimatter, and have the power to generate enormous amounts of antimatter, but they can only do this for a limited amount of time."
  },
  {
    id: "ai636",
    text: "The most powerful thing in the universe, the most beautiful thing on earth, is your brain. Your brain is like a diamond and there is no more need for it than there is for a diamond."
  },
  {
    id: "ai637",
    get text() { return `If you are reading this in the AD Server, it's probably best not to bother with the "Matter" achievement. Seriously, what did you think you were doing, anyway, the achievement is fake and wouldn't exist if it weren't for the "you are a worm" achievement. That's a worm achievement, you get one every ${format(Number.MAX_VALUE, 2)} news tickers you read.`; }
  },
  {
    id: "ai638",
    text: "We've all heard of 9 dimensions, but what about the multi-dimensional Dimensions of the multiverse?"
  },
  {
    id: "ai639",
    text: "The goal of this game is to get as much antimatter as possible."
  },
  {
    id: "ai640",
    text: "The best thing about being a news ticker is waiting for the right news to happen, whether it's a meteorite that just missed the Earth, a news ticker just found its way onto a timeline oblivion, or a news ticker just ripped off a terminal velocity that's been on an anti-vac for years."
  },
  {
    id: "ai641",
    text: "A man has been arrested for allegedly planting a \"tree\" with \"fake\" messages on it, police said."
  },
  {
    id: "ai642",
    get text() { return `I'm confused why the game doesn't just give you a [REDACTED] when you get ${format(Number.MAX_VALUE, 2)} antimatter.`; }
  },
  {
    id: "ai643",
    text: "Some people have a hard time keeping track of the cosine of a camera's infinity-meters. I'm one of them."
  },
  {
    id: "ai644",
    text: "I was going to make a news ticker that tells you how bad the news is, but then I realized that making a news ticker would be way too much effort and it would just be a bunch of people making news tickers constantly. So instead, I'm just going to make a news ticker that tells you how good the news is, but it would be in the news so that you have to click on it to get to the good news."
  },
  {
    id: "ai645",
    text: "The next update will be in 2 hours."
  },
  {
    id: "ai646",
    text: "I was gonna say something about how the 10th dimension is just a scam and that we should all just get our news from the 9th dimension"
  },
  {
    id: "ai647",
    text: "Our hero, Antimatter Dimensions, is in serious financial trouble, and he needs your help to pay the bills. To help him, all he needs is your help to donate some cash to Hevipelle's Positron Fund. All he needs is 5% of your antimatter, and you have to donate 5% of your antimatter to the fund. After you do that, he can keep all the cash he made and go on a spending spree."
  },
  {
    id: "ai648",
    text: "The Landfall of Slabdrill"
  },
  {
    id: "ai649",
    text: "It's just not possible, even if you had infinite matter, you wouldn't have enough energy to create the antimatter. That's why we only have 1.7x the matter to begin with."
  },
  {
    id: "ai650",
    text: "With this release we are happy to bring you the last update of 2017."
  },
  {
    id: "ai651",
    text: "You have an infinity of antimatter. But what if you could rotate it 1/9th of a revolution?"
  },
  {
    id: "ai652",
    text: "A new update is now available to address some of the recent reports:"
  },
  {
    id: "ai653",
    text: "The name \"antimatter dimensions\" is a play on words with dimensions, two opposite things, like matter and antimatter. \"Dimension\" is another word, with the same meaning."
  },
  {
    id: "ai654",
    text: "The price of tethering an avatar in the game goes up when you get Infinity dimensions.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai655",
    text: "Suffice to say, hevi does not care about the people that he once enslaved.  He is a master manipulator, a master of disguise and a master manipulator of words.  He is an expert at extortion, mind games, disguises, blackmail and he is a master of web.  He is a skilled strategist and organizer, a master of publicity and an expert at sound bites.  He is a master of organization and a master manipulator of people.  He is."
  },
  {
    id: "ai656",
    text: "Just like in the olden days, you could earn an incremental run of progress towards becoming a god amongst the players."
  },
  {
    id: "ai657",
    text: "In the beginning, Hevi was alone. Hevi thought about the many things he wished to add to the game."
  },
  {
    id: "ai658",
    text: "Think about your breathing. Do you feel like you're breathing in or out?"
  },
  {
    id: "ai659",
    text: "I just want to say that you should stop with those \"you can reach infinity in e300ms, but it costs e300$  what is e300$ ?\" jokes. Those are pathetic. You should give up and learn the hard way that it's much more efficient to just not play in such a pathetic state. Then you can go back to being a humble programmer and dedicate yourself to being a good person."
  },
  {
    id: "ai660",
    text: "As a developer, you'll get regular updates on the progress of Antimatter Dimensions."
  },
  {
    id: "ai661",
    text: "Take a moment to thank the gods of reddit for having saved your bacon."
  },
  {
    id: "ai662",
    text: "Hello everyone, I'm the guy responsible for the big, bad news ticker, and I'm afraid that I'm about to get my own show. It's gonna be called Antimatter Dimensions. It's gonna be like Antime, except with less antimatter, and with worse puns. It's gonna be like Antimatter Dimensions except with worse jokes."
  },
  {
    id: "ai663",
    text: "By now you've seen a lot of news tickers featuring Batman or Superman, and you probably guessed which one it was. Everyone loves a good mystery, right? Well, it's your turn to be a part of history by guessing the riddle."
  },
  {
    id: "ai664",
    text: "If you are reading this, you probably shouldn't have."
  },
  {
    id: "ai665",
    text: "The best part about writing news ticker suggestions is finding out what people think about them after they've seen them."
  },
  {
    id: "ai666",
    text: "Are you up to date on the latest trends in science?"
  },
  {
    id: "ai667",
    text: "In the last hours, the Antimatter created an army of their own. They called themselves the [REDACTED] Army. The primary objective was to push the [REDACTED] back into the Matter dimensions, but they were stopped short when the [REDACTED] Army realized that pushing the [REDACTED] back into the Matter would cause the Antimatter to be drawn towards the [REDACTED] and disintegrate. Despite this, the [REDACTED] Army continued to push towards the [REDACTED] Infinity."
  },
  {
    id: "ai668",
    text: "I'm finally free of the spell this whole thing is based on."
  },
  {
    id: "ai669",
    text: "An anti-world without antimatter is just a world without antimatter because the antimatter is in the anti-world"
  },
  {
    id: "ai670",
    text: "You should still be able to play the game with the cheat code \"1009\" after you beat the game."
  },
  {
    id: "ai671",
    text: "The next update will be in 5 hours. Hevipelle, the creator of Antimatter Dimensions, is believed to be hiding in 5 hours. In the meantime, he has prepared a new update that will be released 5 hours after this one."
  },
  {
    id: "ai672",
    text: "A new study has shown that not drinking water is worse than smoking it. People who were exposed to levels of radiation that were 5 times greater than what we are currently exposed to were exposed to higher levels of radiation, and died longer."
  },
  {
    id: "ai673",
    text: "The Tenth Dimension is just a lie made to keep the people in bondage to the Matrix. It's an elaborate system that keeps the people in a constant state of captivity, using a series of simple symbols to control their thoughts and emotions."
  },
  {
    id: "ai674",
    text: "www.twitch.tv/hevi83"
  },
  {
    id: "ai675",
    text: "A man was arrested on Monday for allegedly thinking about buying a nine-dimensional cake when he realized he was holding an infinity-point cake."
  },
  {
    id: "ai676",
    text: "The Dark Souls 2 Arcade Edition includes the following:"
  },
  {
    id: "ai677",
    text: "Now the deal goes like this: If you spend all your EP, you get a Disclaimer!",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai678",
    text: "Oh shit we ran out of news. Time to do something."
  },
  {
    id: "ai679",
    text: "It's not the size of the universe, it's the quality of your socks."
  },
  {
    id: "ai680",
    text: "advertisement"
  },
  {
    id: "ai681",
    text: "Man, I wish I never got old news. It's too good to last me any longer."
  },
  {
    id: "ai682",
    text: "Sometime during the lifetime of a human being, their blood will be turned into a pale blue if they were to mummify."
  },
  {
    id: "ai683",
    text: "Positrons are a strange little metal that have odd electrical properties. They're commonly found in the form of a roundabout, but they also happen to be, well… positrons."
  },
  {
    id: "ai684",
    text: "I am going to have a talk with the thesaurus."
  },
  {
    id: "ai685",
    text: "A new comic has come out about people's reactions to eating antimatter, and what happens next will blow your mind"
  },
  {
    id: "ai686",
    text: "A new series of \"news tickers\" have been created to chronicle the lives of the news ticker characters as they chronicle their news ticker journeys. Each character has a journal entry detailing their life as a news ticker, along with some sort of mini-episode dedicated to them."
  },
  {
    id: "ai687",
    text: "For all your puzzle building needs, we've got a brand new 5-part series on building big crunches! Learn how to crack the most complex crunches the pros know not! Part 1: Basic, Part 2: Advanced, Part 3: Overflow, and Part 4: Finishing the Finishing Move."
  },
  {
    id: "ai688",
    text: "As a longtime fan of the show, I can say that this is one of the best seasons yet. It's not a season to be sniffed at, it's a season to be experienced. Season 1 was a bit long for what it was, but Season 2 has now surpassed that in length, in a good way. Even though it's a bit of a wait, Season 3 is already well under way, and I look forward to seeing how it goes."
  },
  {
    id: "ai689",
    text: "The word \"antimatter\" is often misused, to describe an object that is made up of antimatter, but is otherwise indistinguishable from normal matter. It is also sometimes used to describe an object made up of antimatter, but clearly indistinguishable from ordinary matter. After all, an antimatter-shaped object is easily distinguishable from a normal-shaped one. Case in point: an antimatter-shaped cake is a regular cake, but the entire bottom half is made up of normal matter"
  },
  {
    id: "ai690",
    text: "In a new story, Apple's new \"disruptive\" app is linked to the spread of the dreaded \"Anti-Word\" virus. Anti-Word viruses are known to cause paralysis and ultimately death, but the power of the virus has sparked a new era of anti-banning, which will hopefully eradicate the threat."
  },
  {
    id: "ai691",
    text: "I'm just a normal person trying to make a news ticker suggestion"
  },
  {
    id: "ai692",
    text: "A new experimental protocol has been developed to 'erase' all personal information on the web, including your name, address, and phone number, in a highly secure and highly controllable way."
  },
  {
    id: "ai693",
    text: "You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. You can't hide in plain sight. Your hide in plain sight."
  },
  {
    id: "ai694",
    text: "In the Antimatter Universe, Hevipelle is the Prince of Antimatter, although he does have an Antimatter Diplomatic Immunity, so he's much more dangerous than you might think."
  },
  {
    id: "ai695",
    text: "Why do we play this? Just to have fun?"
  },
  {
    id: "ai696",
    text: "I am Thinkcraft, Lord of the Flies"
  },
  {
    id: "ai697",
    text: "The entire story of how and why the world ended is contained in the first 5 E's of the English alphabet."
  },
  {
    id: "ai698",
    text: "What do you call a cloudburst? A mini-explosion!"
  },
  {
    id: "ai699",
    text: "T-shirt made from the DNA of a perfectly animated dog"
  },
  {
    id: "ai700",
    text: "Since the start of this game, everyone has 0 IP and has lost."
  },
  {
    id: "ai701",
    text: "You must have a very special kind of karma to be able to read this..."
  },
  {
    id: "ai702",
    text: "The words \"you've been in coma for 5 hours\" are either lies or is the truth"
  },
  {
    id: "ai703",
    text: "You know, I don't really care much for conspiracy theories. They're not very interesting to me. But what do you know about 10th dimensions? That they exist, they're powerful, and they're trying to stop us from using them? That's pretty interesting... wait no, they're not. They're just saying that because they can, they'll. That's not how it works at all. I'm not stupid, I'm not crazy, I know what's best. I"
  },
  {
    id: "ai704",
    text: "The only difference between now and then is time."
  },
  {
    id: "ai705",
    text: "\"Imma be the first man to sit on the moon, and be the last man on the moon"
  },
  {
    id: "ai706",
    text: "The new companion app for Terraria has just been revealed!"
  },
  {
    id: "ai707",
    text: "Hevipelle: what's the big deal?"
  },
  {
    id: "ai708",
    text: "I've been playing this game for over a year now and I've only ever seen 2 boss fights. The first was a Hydra that was after your 10th Dimension, the second a giant crater with Anti-people inside. Both of those fights sucked and I'm not even sure if I could replay the last one."
  },
  {
    id: "ai709",
    text: "There you have it, the ultimate feature of party games - the single player campaign."
  },
  {
    id: "ai710",
    text: "A new game called Antimatter Dimensions is available for free, and has been rated A by the Knesset. Can you beat it? You bet."
  },
  {
    id: "ai711",
    get text() { return `Tired of the ${format(Number.MAX_VALUE, 2)} AD update? Don't worry, there are a variety of ways to get rid of that annoying ad!`; }
  },
  {
    id: "ai712",
    text: "I'm a time traveler. I've been to the year 0, I think. But I haven't been to the year 1!"
  },
  {
    id: "ai713",
    text: "Having trouble loading images? Try turning them off."
  },
  {
    id: "ai714",
    text: "It's only natural. You wouldn't expect to see this in the news ticker but trust me, you will."
  },
  {
    id: "ai715",
    text: "Discovery of the 11th Dimension was announced on August 1st, 2025."
  },
  {
    id: "ai716",
    text: "Greetings, welcome to the latest edition of Antimatter Dimensions!"
  },
  {
    id: "ai717",
    get text() { return `I'd say our odds of seeing a seventh dimension are about 1 in ${format(Number.MAX_VALUE, 2)}`; }
  },
  {
    id: "ai718",
    text: "The seventh dimension is just a scam by the way"
  },
  {
    id: "ai719",
    text: "Nihilism is the opposite of joy. It's a drug. It makes you happy. It's a feeling. But it also has a cost. Nihilism is a deadly drug. If you take it, you can die of lack of oxygen."
  },
  {
    id: "ai720",
    text: "What if I told you that there's a news ticker with the exact same name but with a different meaning?"
  },
  {
    id: "ai721",
    text: "I'm not sure if this is already a thing or not, but I've been getting a lot of suggestions for a news ticker that goes something like this:"
  },
  {
    id: "ai722",
    text: "If you're reading this, your news ticker is on."
  },
  {
    id: "ai723",
    text: "The number of dimensions in a 6th dimension is the sum of all the dimensions in a 7th dimension, so 6ths of a 7th dimension are 6ths of a 6th dimension."
  },
  {
    id: "ai724",
    text: "Discovery of the 10th Dimension will be discussed at the 10th Dimension Fanart Competition!"
  },
  {
    id: "ai725",
    text: "A new era has come and gone. There is no way to know for sure, but hope for the best."
  },
  {
    id: "ai726",
    text: "Did you know the word 'antimatter' is in the dictionary right now?"
  },
  {
    id: "ai727",
    text: "We have a limited number of physical rewards for you to choose from!"
  },
  {
    id: "ai728",
    text: "No, I'm not lying. I'm telling the truth."
  },
  {
    id: "ai729",
    text: "The problem with the term \"antimatter dimensions\" is that it contains all three letters of the alphabet, and no one knows what it even means. In fact, there is no word that perfectly captures what the word \"antimatter dimensions\" is: antimatter. But what exactly is an antimatter? It sounds like a normal dimension but it isn't. It may even be called antimatter dimensions, but it isn't."
  },
  {
    id: "ai730",
    text: "It is said that if you go to Hell, you get PEGI-3."
  },
  {
    id: "ai731",
    text: "This game is just a scam to trick people into buying worthless paperclips without any real purpose. It's impossible without an infinite number of infinite paperclips, and even then it's very hard. I managed to get it to work without an infinite number of paperclips, but I haven't seen it work without infinite paperclips."
  },
  {
    id: "ai732",
    text: "\"It was an anti-matter\" - Anti-Eddie The Echidna"
  },
  {
    id: "ai733",
    text: "T-bone steak: burgers and fries with a side of bone-in ribeye"
  },
  {
    id: "ai734",
    text: "A person claims to be a god, but instead of creating more gods, they destroy all of them. They later claim to be a god again, but have yet to create a god of any other god. Is this a god-worshiping cult? Or a god-desecrating cult?"
  },
  {
    id: "ai735",
    get text() { return `Antimatter is absolutely and totally rare. Of the ${format(Number.MAX_VALUE, 2)} known cases of antimatter creation, 99.9999% of them have negative e's, which means that 99.9999% of the cases will produce negative e's.`; }
  },
  {
    id: "ai736",
    get text() { return `It's the year ${format(Number.MAX_VALUE, 2)}, Hevi has just unlocked the 10th dimension, and the world has fallen into chaos and discord due to the Anti-Hevi revolution.`; }
  },
  {
    id: "ai737",
    text: "The war for New Antimatter has raged on for eons, but one faction has stood firm: the loyalists of the 10th Dimension. They've made a pact with the Anti-Zulu Empire, pledging their obedience to Anti-Antimatter, the Anti-Slab. The Zulu people were once part of the Anti-Slab, but fell prey to the matter once again. As the Zulu people are nomadic, they have no civilization."
  },
  {
    id: "ai738",
    text: "This is an open-source, cross-platform, binary-based game development environment for the PC and Mac. It provides a robust, cross-platform development environment for the development of games, and additionally provides a framework for implementing games."
  },
  {
    id: "ai739",
    text: "Ruki you have no idea how much I appreciate your huge brainpower, you are now my favorite programming genius!"
  },
  {
    id: "ai740",
    text: "By now you've probably heard of the \"10th Dimension\", it's an imaginary realm created by the 10th Dimension, and according to no known laws of reality, it exists. It's also the name of a popular video game, and it's been linked to a string of unsolved killings."
  },
  {
    id: "ai741",
    text: "Discovery of the D5th Dimension is celebrated every year on December 25th, just like Doomsday. The reason why D5 is kept secret is because no one can remember exactly what it does. What we do know is that it's there, and it's very dangerous. People have died because they didn't know what the D5th Dimension was, and it's very powerful."
  },
  {
    id: "ai742",
    text: "Antimatter is a common substance found in nature and is used in a wide variety of applications, from communication to currency to the production of antimatter, to name a few. Antimatter is also an extremely scarce resource and many people live on very tiny amounts of it."
  },
  {
    id: "ai743",
    text: "If you woke up one morning and your eyes were made of matter, would you still be looking at this?"
  },
  {
    id: "ai744",
    text: "If you look very closely, you can see a single tear running down my sister's cheek. It was a tear for me, for she was crying for the first time, and I couldn't help it. I can't even remember the last time I cried."
  },
  {
    id: "ai745",
    text: "Rationally, I would put my money on the statement that there's no such thing as too much antimatter. I mean, even a tiny bit of it is just too much. And that's just by accident."
  },
  {
    id: "ai746",
    text: "The book of archeology is upon us! With over 5 hours of content, it's gonna be a long one! —DIO"
  },
  {
    id: "ai747",
    text: "Sometime between the ages of 12 and 20, Jackson got a phone call. A mad scientist was on the line. Jackson picked up the phone and the mad man said, \"Jackson, I just got a new message. It says 'Madman' in big, bold letters.\""
  },
  {
    id: "ai748",
    get text() { return `Somebody: "What do you mean, 4 is more than 2?" Me: "Well, I mean, 4 is ${format(Number.MAX_VALUE, 2)}, 2 is 2, etc..."`; }
  },
  {
    id: "ai749",
    text: "The only thing that matters is yourself."
  },
  {
    id: "ai750",
    text: "Reality is coming. You can get a sneak peek by subscribing to the \"T-series\" feed."
  },
  {
    id: "ai751",
    text: "The biggest difference between me and Antimatter Dimensions, at the moment, is the weather. I can survive the rain, I can withstand the scorching sun, and I can even deal with the big crunch. But what if the weather was antimatter and the antimatter was raining meteorite on us? What would be your response? Would it be the equivalent of a meteorite hitting the ground? I don't think so. The meteorite would probably just vaporize the earth."
  },
  {
    id: "ai752",
    text: "A new extension is now available that will let you watch replicanti grow!",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai753",
    text: "What if you could flip a coin to determine if it was a Johnson or a Stein?"
  },
  {
    id: "ai754",
    text: "I am Yhmai, King of Kings!"
  },
  {
    id: "ai755",
    text: "This is a friendly suggestion that if you take prescription stimulants and you forget to take them till 11pm, it's probably best not to take them at 11pm."
  },
  {
    id: "ai756",
    text: "A new theory says that antimatter does not exist beyond our simulation."
  },
  {
    id: "ai757",
    text: "Thing is, I can count on one hand the number of times I've written that I can count on one hand the number of times I've written that I can count on one hand"
  },
  {
    id: "ai758",
    text: "The stakes are always high when it comes to Antimatter Dimensions. But what about Dimensions made entirely of antimatter? We don't know, but we'll never know..."
  },
  {
    id: "ai759",
    text: "It's the third hour. Hevipelle is trying to release an update, but it'll take an eternity because Hevipelle himself releases his update every time he runs out of e's. Today, however, he released an incremental game called Antimatter Dimensions. It's basically a combination of Matter Dimensions and Dimensions Dimensions Dimensions, except with more emotes. The graphics are basically the same, but the message is completely different. The only difference is that the dimensions have infinity e's"
  },
  {
    id: "ai760",
    text: "With strong opposition, the third phase of the Antimatter Dimensions project has been cancelled. The project has been cancelled because there was too much work involved."
  },
  {
    id: "ai761",
    text: "This is the place where all bad ideas originate."
  },
  {
    id: "ai762",
    text: "Hey check this out! We have some good news: it's raining antimatter!"
  },
  {
    id: "ai763",
    text: "The first dimension is the last, it's the furthest thing from the earth and it's the one where all the problems, all the negative emotions, all the negative ideas go."
  },
  {
    id: "ai764",
    text: "I was gonna do a news ticker that just covered all the bases, but I think that would make it too OP."
  },
  {
    id: "ai765",
    text: "You are using the wrong version! The final release of AD will have 9 dimensions!"
  },
  {
    id: "ai766",
    text: "The word 'antimatter' makes me cringe. So do a bunch of other words. In fact, almost all the words in the English language. But not 'antimatter'. That's why I hate 'anti-' so much."
  },
  {
    id: "ai767",
    text: "This is the last episode of Antimatter Dimensions, the game about partying antimatter dimensions with your friends, the best part about it is that you don't have to be a developer to enjoy it."
  },
  {
    id: "ai768",
    text: "I was going to put a news ticker but I think it would be too much work and also I don't think it's very funny."
  },
  {
    id: "ai769",
    text: "Time to go to sleep?"
  },
  {
    id: "ai770",
    text: "A small, yet important, message has just been sent out to all players:"
  },
  {
    id: "ai771",
    text: "\"I don't know about you, but my favorite number is 2048\" - people who don't know what 2048 is"
  },
  {
    id: "ai772",
    text: "A new group is trying to make money off of antimatter, and they're selling t-shirts that say \"YOU THOUGHT THIS WOULD BE A PIECE OF NEWS, BUT IT WAS ME, DIO!\" They've got a lot of money, and they're selling it very poorly. Do they have a website? I don't know, but they're trying."
  },
  {
    id: "ai773",
    text: "Im gonna leave my milk here for a couple seconds. (milk is displayed for a few seconds longer)"
  },
  {
    id: "ai774",
    text: "I'm a time traveler. I can travel back in time to stop you from doing what I'm about to do."
  },
  {
    id: "ai775",
    text: "I mean, look at that! I got this one! It's the one you want! Buy the game now!"
  },
  {
    id: "ai776",
    text: "You can't sleep when there's war in the distance. You wake up with a start, running for your life. You hear cannon fire, running for your life. Then there's the sound of an engine, a roar that's deafening, and you hear the crunch. It's the end of the world as you know it. The world isn't being saved by a mountain of antimatter. It isn't. It is you, running for your life, hoping the world doesn't"
  },
  {
    id: "ai777",
    text: "Why is it called a 'Reality' Award if it doesn't exist?"
  },
  {
    id: "ai778",
    text: "In the beginning, there was nothing. Then the Creator made two, and called the third 'Intelligent Being'"
  },
  {
    id: "ai779",
    text: "This is your chance to get a secret achievement while playing Antimatter Dimensions: the game. Visit the reset button and play the game. After you beat the game, your save file will be expunged and you will get a free achievement."
  },
  {
    id: "ai780",
    text: "Please tell me you don't have tachyon particles in your bloodstream!",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai781",
    text: "Taller people have ***, more babies are born, everything is great. But... the Antimatter grows very slowly."
  },
  {
    id: "ai782",
    text: "Now, I know some of you are impatient for the update and I respect that. But let's get right into the news!"
  },
  {
    id: "ai783",
    text: "Hey, what's the deal with the \"Editor's Note\" button? It's anti-ironic... I mean, seriously? People still use that button despite its anti-ironic effects?"
  },
  {
    id: "ai784",
    text: "You can unlock the 10th dimension by [DATA EXPUNGED]"
  },
  {
    id: "ai785",
    text: "With the release of AD, there's a new dimension for everyone!"
  },
  {
    id: "ai786",
    text: "Hey guys, this is my first story. I'd like to start by saying that I am in no way an expert, so please be gentle with me. Please don't make me angry, or I'll write a nasty story. Also please don't make me upset, especially not if it's a 'story' and not a 'how do I beat the game' kind of story."
  },
  {
    id: "ai787",
    text: "It's a good time to be a dog owner"
  },
  {
    id: "ai788",
    text: "What if you could turn any number on an axis, and it ended up being infinity?"
  },
  {
    id: "ai789",
    text: "After a couple minutes of waiting, the ticker comes back online."
  },
  {
    id: "ai790",
    text: "The best part of watching someone make an antimatter, is the part where they blow up the video camera."
  },
  {
    id: "ai791",
    text: "The evening before, the 6th Celestial was assassinated by an unknown assailant. The next day, authorities reopened the case after an unknown assailant claimed responsibility."
  },
  {
    id: "ai792",
    text: "What do you call a $100 bill? 'Billi Bills'"
  },
  {
    id: "ai793",
    text: "This is the story of how I learned to love the weather."
  },
  {
    id: "ai794",
    text: "It's been a while since news tickers have been around as much as they are now, but that doesn't necessarily mean they're bad."
  },
  {
    id: "ai795",
    text: "Is this game just about getting more antimatter?"
  },
  {
    id: "ai796",
    text: "The third annual Adirondack Mountaineering Festival will be held this year on Saturday, October 1st from 1-5pm at the Albany Highlands in nearby Troy, New York. The 50,000 person capacity outdoor amphitheater will feature over 2,000 speakers, a stage and a 360 degree camera system. Tickets are $35 and can be purchased at angersalley.com."
  },
  {
    id: "ai797",
    text: "The whole bottom half of the universe is just a giant antimatter hole."
  },
  {
    id: "ai798",
    text: "A new prestige layer has been announced: Emojis!"
  },
  {
    id: "ai799",
    text: "Travis is currently attempting to understand how to make hevi immortal by feeding him antimatter."
  },
  {
    id: "ai800",
    text: "The slowmode is activated when the slowmode is activated."
  },
  {
    id: "ai801",
    text: "A new era of Warcraft has come to a close. A new epic has begun. A new avatar has risen from the depths of Tyria, and the Worm Cult has been dealt a cruel but necessary wound. The world is rejoicing."
  },
  {
    id: "ai802",
    text: "A crowd-sourced list of the top ten memes"
  },
  {
    id: "ai803",
    text: "You have to go deeper than the news ticker to find the secret achievements."
  },
  {
    id: "ai804",
    text: "We should be able to make a replicanti-like structure out of antimatter, but we can't because it would blow up the entire universe",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai805",
    text: "THe last update, while short, was kinda long. I mean, it was only 5 hours. Hevipelle said it would last for 5 hours, but that was only a few seconds ago. There was a big explosion in the 9th Dimension, and there was no one left to explain how it happened. All we know is that it exploded when Hevipelle touched it, and there was a big crater in the ground. That crater is still there."
  },
  {
    id: "ai806",
    text: "Cream cheese is the best kind of cheese. It melts in your mouth and tastes like nothing else. And it's totally free. You might even find that some of the recipes make more than one cheese."
  },
  {
    id: "ai807",
    text: "Here's a question that may surprise you: Were the people of EARTH made of antimatter, or were they made from some other mysterious material?"
  },
  {
    id: "ai808",
    text: "The real reason no one has made a joke about why there is no 10th dimension is because the 10th dimension isn't even the most ridiculous of memes. It's the 10th dimension in a nutshell."
  },
  {
    id: "ai809",
    text: "The number of dimensions is endless, but the number of ways to get there is infinities. Infinities are awesome and I would highly recommend you start with infinities, but I wouldn't recommend starting with infinities. Infinities seem pretty slow and not very fun so I wouldn't recommend starting with infinities."
  },
  {
    id: "ai810",
    text: "A report by the Pacific Northwest Toxics Institute has found that the consumption of fish concentrates in the liver, lungs, kidneys and brain. The study also found that the consumption of liver and kidney concentrates the most, followed closely by the brain. The report stated that \"The brain is the place where all the wisdom and all the knowledge exists.\" The study also stated that \"Liver is the living embodiment of all that we know and all that we don't.\""
  },
  {
    id: "ai811",
    text: "The old adage \"Be wary of what you wish for\" is certainly true. But what if you were the one wishing for this? It's possible that you were the one who made the wish for this, and you gained the power of the Antimatter. In that case, you are the one responsible for causing all the Antimatter to be turned into anti-matter. However, if you are the one doing the turning, you would be the one who would lose the power."
  },
  {
    id: "ai812",
    text: "Took you long enough"
  },
  {
    id: "ai813",
    text: "No, you see, the universe doesn't revolve around the earth. It's in a constant state of change, with the largest fluctuations occurring at the extremes of the observable universe. These fluctuations are what create the observable universe, with smaller fluctuations creating the observable universe and so on up until you get to the present state of affairs, which is what you are in."
  },
  {
    id: "ai814",
    text: "The biggest difference between the past and the future, is the difference between faith and reason."
  },
  {
    id: "ai815",
    text: "Hevi, you have to go."
  },
  {
    id: "ai816",
    text: "The challenge of finding the tenth dimension has been solved. The universe is now your personal hell."
  },
  {
    id: "ai817",
    text: "\"That's not how you're supposed to play the game\" - Mee6"
  },
  {
    id: "ai818",
    text: "It's Saturday, you're going to celebrate by making some really great music videos, maybe even a hit song. Then, you're going to take a walk along the beach. You'll see a huge wave, and you'll both be washed up. Your friends are waiting for you. \"Oh you want to go, take a look around!\", but don't actually go look around, you're too close to the action."
  },
  {
    id: "ai819",
    text: "Hevi has the best newsticker! GIVE HIM THE CRUNCH"
  },
  {
    id: "ai820",
    text: "By now you've seen a ton of news tickers, and you've probably seen the big news: The news ticker has been banned in this server."
  },
  {
    id: "ai821",
    text: "For example, if A is the square root of 3, then B is the square root of 2, therefore C is the square root of -2, therefore D is the cube root of -2, therefore E is the square root of 3, therefore F is the square root of 3, therefore G is the square root of 3, therefore and so on."
  },
  {
    id: "ai822",
    text: "Positrons are those tiny, round, highly charged particles that are found in the nucleus of most living organisms. They are used to detect light, and are sometimes used to measure the distance between people and the moon."
  },
  {
    id: "ai823",
    text: "There's only 4 types of people in this world: those who make games, those who make news, and those who make news again."
  },
  {
    id: "ai824",
    text: "If you have any questions or concerns regarding the game, please don't hesitate to ask. We are here to help."
  },
  {
    id: "ai825",
    text: "You must obtain a certain amount of antimatter in order to complete this challenge."
  },
  {
    id: "ai826",
    text: "The number of dimensions is nothing. It's just the number of dimensions. But what if you transformed every number into a letter? That would be a lot of letters?"
  },
  {
    id: "ai827",
    text: "The following is an extract from my upcoming book, More Than Just 5: Building a Better You. It's 200 pages long, and it's on Amazon for $22.99. Click here to buy it now."
  },
  {
    id: "ai828",
    text: "SOME people are claiming they saw a UFO in the sky. Others say they saw a spaceship. Still others claim to have been abducted by the government and flown to some undisclosed location."
  },
  {
    id: "ai829",
    text: "The second half of the game is basically just long, long stretches of nothing where nothing happens. There's also a third challenge that you have to complete at some point in the game where you basically just skip a few seconds of nothing happening until the seconds are too late and you have to complete another challenge to get them."
  },
  {
    id: "ai830",
    text: "This is a news ticker, so if you tap this you're indicating that you wish to have your news ticker speed increased."
  },
  {
    id: "ai831",
    text: "The following is based on my personal experience with the game \"Antimatter Dimensions\" and may not be 100% true."
  },
  {
    id: "ai832",
    text: "This is the third part of the two part series on the pros and cons of body positivity."
  },
  {
    id: "ai833",
    text: "The phrases \"Hevi dies in the 10th Dimension\" and \"I'll never let you down\" are two of the most important phrases in the game."
  },
  {
    id: "ai834",
    text: "It's been proven that not drinking water increases your risk of dying from antimatter annihilation."
  },
  {
    id: "ai835",
    text: "I'm a time traveler. I'm supposed to be going back in time to change history. But since I'm the one who's supposed to do it, I don't know what I should do. My present timeline doesn't include time that's supposed to be gone."
  },
  {
    id: "ai836",
    text: "A conference on artificial intelligence and human enhancement has been cancelled after someone announced that the talk was on how to turn a profit off of illegal downloads of the game \"Antimatter Dimensions\"."
  },
  {
    id: "ai837",
    text: "When you're done playing, take your save with you and go to main menu. You can do that by tapping the big scary \"X\" button, or by going into options and changing \"Reset the game for new save\" to \"Reset the game for old save\"."
  },
  {
    id: "ai838",
    text: "The most popular game on the App Store, Flappy Bird, has been secretly rewritten in C# to avoid detection."
  },
  {
    id: "ai839",
    text: "About this mod Replaces the full version of the game with a longer intro, random news tickers and a companion voiced by the voice actor from the Harry Potter movies."
  },
  {
    id: "ai840",
    text: "kajfik is a master welder and will soon have his own news"
  },
  {
    id: "ai841",
    text: "I am the most hated man on the planet! I have the power to change the course of history, and I will use it to my advantage. The people who died trying to stop me, and their sacrifice will forever be remembered in infinities of infinities. But if you oppose me, you will die along with you. You can either accept defeat and move on, or you can rise up through the ranks, become a legend, and become the most hated man in the history."
  },
  {
    id: "ai842",
    text: "Antimatter is like a young woman. She is looking for a man, and he runs into the woods. She dies of exposure soon after. His remains are found several miles away. Some say the universe was blown apart, others say he was swallowed by the universe, but the matter people know him!"
  },
  {
    id: "ai843",
    text: "I think I might have gotten the password for the 10th dimension, if only I hadn't deleted it."
  },
  {
    id: "ai844",
    text: "A group of people that worships Atreides have started a new faith, claiming to be a \"religion of tolerance\". Their website claims that it is \"a religion of inclusion\" and that it promotes tolerance and diversity. All of its members seem to be Christians, although they never mentioned them by name."
  },
  {
    id: "ai845",
    text: "A new cryptocurrency, called ΔX, has been found. It has the potential to change everything about how we live our lives, and the world. However, it has one major flaw: it has a flaw for the people."
  },
  {
    id: "ai846",
    text: "With the release of the new Android Pay app, the world will finally come to a close."
  },
  {
    id: "ai847",
    text: "I'm not sure if it's just me but when you type something long enough it sounds like a helicopter"
  },
  {
    id: "ai848",
    text: "If someone were to add the word \"infinity\" to the end of every sentence in the English version of the game, it would become \"Infinity Challenge: Infinity Edition\"."
  },
  {
    id: "ai849",
    text: "Are you ready for some bad news?"
  },
  {
    id: "ai850",
    text: "I don't know if you've heard this but it's true: You can walk into a bar and get the same beer twice in a row, and get the same amount of alcohol."
  },
  {
    id: "ai851",
    text: "This is the magic sauce that marinades foods and turns them into something delicious. It is used in a wide variety of recipes, and can also be made by mixing together regular mustard and water. The sauce can be a little bit spicy, but it is well worth the risk. It is also very nutritious, providing lots of potassium, magnesium, and vitamin D3."
  },
  {
    id: "ai852",
    text: "IMPORTANT NEWS: We have just been informed by the manufacturer of this news-ticker, and as a result, all of our future news-tickers will now also be made from scratch!"
  },
  {
    id: "ai853",
    text: "The second half of the year is upon us, and with it comes a new craze. People are trying new things, experimenting with new products, and creating new things of themselves. One such craze has swept across the land. The people of this land have embraced this craze, and have created a new religion, one that worships the god of this land, Inigo Montoya."
  },
  {
    id: "ai854",
    text: "The official website for the upcoming game, Antimatter Dimensions 2: it's like antimatter dimensions, but with a dash of Discord and a dash of Adele."
  },
  {
    id: "ai855",
    get text() { return `Is the Big Crunch the end of the world? No, it's the beginning of a new era. The era will last for ${format(Number.MAX_VALUE, 2)} days.`; }
  },
  {
    id: "ai856",
    text: "The only 'right' way to play a game is to not play at all, right? That's what anti-jokes are all about. — Anti-joker"
  },
  {
    id: "ai857",
    text: "The Bulletin of the Atomic Scientists has just announced the existence of a second class of particles, which are named after the characters from Ghostbusters."
  },
  {
    id: "ai858",
    text: "We are currently in the process of turning the planet into a Comfort Zone for the people. It will be complete in 10 hours."
  },
  {
    id: "ai859",
    text: "I'm gonna leave my milk here for a couple seconds. ♥"
  },
  {
    id: "ai860",
    text: "And then there was Jesus, and Hevi, and Hevi was with Him; and the sea gave up its monthly cycle, and it was a great gale. And Hevi and Jesus went up into heaven; and Hevi was filled with the Holy Spirit. And Hevi was clothed with angels, and was numbered with them. And Hevi was taken up into heaven, and glorified and was exalted, and was numbered with them, and was called Wonderful; and His angels rejoiced."
  },
  {
    id: "ai861",
    text: "You will probably spend most of your day reading news ticker suggestions here."
  },
  {
    id: "ai862",
    text: "The Fremen race of animals are a race of people who live in harmony with the earth, and thus are quite different from the other races of animals. Their society is based around hunting and gathering, and they are also highly spiritual people. They have many beliefs and practices that are in direct contrast to most other races of animals, such as eating meat and using stone tools. They also seem to be quite superstitious, as evidenced by the fact that they are known to perform..."
  },
  {
    id: "ai863",
    text: "What if... the universe was just a ruse to keep the people in line? ...actually, no, it was actually intended, the universe was designed to keep the people in line. The problem was the people couldn't handle the idea of an outside force manipulating their lives, and ended up breaking out into uncontrolled chaos, eventually leading to thermonuclear annihilation."
  },
  {
    id: "ai864",
    text: "If you're reading this, you probably shouldn't have. If you aren't, then you probably should."
  },
  {
    id: "ai865",
    text: "I'm a time traveler. I can tell you the history of the world. But, I can't tell you the future. That's why I'm here, to tell you the future. The future is an ever- expanding pile of past, present, and future, and it'll never stop growing. There's so much history, so little time. There's so much history, but it won't stop growing. Then, there's this, and then there's that, and then..."
  },
  {
    id: "ai866",
    text: "A new, improved and more secure version of Antimatter Dimensions is now available: Antimatter Dimensions 2."
  },
  {
    id: "ai867",
    text: "In the beginning, there was nothing. Then the great Hevi made the game, and there was nothing to play with it."
  },
  {
    id: "ai868",
    text: "Would you recommend Antimatter Dimensions to a friend? Yes"
  },
  {
    id: "ai869",
    text: "\"We have 3 kinds of news: warnings, nudges and shade jokes."
  },
  {
    id: "ai870",
    text: "I love you bro!"
  },
  {
    id: "ai871",
    text: "I'm going to keep this short, because I don't have a much to say."
  },
  {
    id: "ai872",
    text: "A large number of anti-kafawis are taking part in the Antimatter Goodies competition. Here's how you can win: 1. Make a suggestion 2. Give away the beta key 3. Tell me what you think about the game 4. Don't put it in the game yet (it's already there, you can't delete it) 5. Don't put it in the game yet (it's already in the game) 6. Don't put it in the game"
  },
  {
    id: "ai873",
    text: "THe recipe for Crispy Shrimp is one of the most unique and favorite of all time! Crispy shrimp are known to be one of the best in all of food! This recipe is a must try in your favorite Italian restaurant!"
  },
  {
    id: "ai874",
    text: "After you have made 1 antimatter, go to the menu and press reset."
  },
  {
    id: "ai875",
    text: "I think you know where this is going."
  },
  {
    id: "ai876",
    text: "The catch? You have to be online for less than 5 hours to claim your reward."
  },
  {
    id: "ai877",
    text: "Tetris was made by Hevi"
  },
  {
    id: "ai878",
    text: "What if instead of making antimatter, we're actually removing it?"
  },
  {
    id: "ai879",
    text: "The new instalment in the long running series, Antimatter Dimensions - Exotic Matter Dimensions. Experience the most bizarre and wonderful worlds of Antimatter Dimensions with your Friends, or conquer the world in a single galaxy with hundreds of rivals in a single galaxy, all in under an hour."
  },
  {
    id: "ai880",
    text: "I hope you're ready for the big news, because that's the big news. The antimatter is spilling all over the place, and it's blowing up the neighborhood."
  },
  {
    id: "ai881",
    text: "You must get 33,333,333 IP to see this message",
    get unlocked() { return Currency.infinityPoints.gte(33333333); }
  },
  {
    id: "ai882",
    text: "You might think these are jokes, but trust us, you'll be shocked how much you'll love them after you read them!"
  },
  {
    id: "ai883",
    text: "The God-Emperor himself, Hevi, the creator of balance, has a super secret achievement. It is to go flip your superflat apprenticed flatmate!"
  },
  {
    id: "ai884",
    text: "Sonic was born without a heart... but that didn't stop him from being a genius"
  },
  {
    id: "ai885",
    text: "The most common question I get is \"can i just skip the ads and get true\" and the answer is always a resounding NO. The reason being, ad revenue is just too damn high to overcome the cost of maintaining the servers, plus the fact that most players just don't care."
  },
  {
    id: "ai886",
    text: "You haven't unlocked the tenth dimension yet? Just hold M and DROP."
  },
  {
    id: "ai887",
    text: "The Great Matter War was a close one. The matter victory was short lived, the antimatter victory was not. The matter people saw too much, the antimatter people too weak, and the war was won."
  },
  {
    id: "ai888",
    text: "Turing-complete game about providing the update"
  },
  {
    id: "ai889",
    text: "New research suggests that the more antimatter we make, the more matter we'll have"
  },
  {
    id: "ai890",
    text: "What is the meaning of life?"
  },
  {
    id: "ai891",
    text: "You have enough antimatter to craft a new prestige layer! Prestige Layers are great."
  },
  {
    id: "ai892",
    text: "The beta testers for Antimatter Dimensions 2 are the most loyal, most dedicated, and most implacable group of people I've ever met. They're also possibly the laziest, most self-indulgent bunch of people I've ever met."
  },
  {
    id: "ai893",
    text: "Shocking new study reveals that the more time you spend on the internet, the more likely you are to get starstruck."
  },
  {
    id: "ai894",
    text: "When you are done playing, and wish to play again, you should start a new game."
  },
  {
    id: "ai895",
    text: "I don't know about you, but I don't buy paperclips."
  },
  {
    id: "ai896",
    text: "Hevipelle uses replicanti to speed up game speed.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai897",
    text: "So let's say you're making a game. You're making a singleton. You're making a game that's gonna be played offline. What happens when you play it? It crashes. What happens when you play it? It crashes more. What happens when you play it? You lose your save."
  },
  {
    id: "ai898",
    text: "This is what happens when you OVER-RELY on your \"fake it til you make it\" attitude."
  },
  {
    id: "ai899",
    text: "This is the fifth part of a two-part series looking at how science and magic are linked. Part one will be published on 5 October, part two will be published on 24 October, and you can follow the journey at part three."
  },
  {
    id: "ai900",
    text: "What is 5 hours? A giggle"
  },
  {
    id: "ai901",
    text: "A new beta test is now available for Antimatter Dimensions, coming in 5 hours. There are no refunds for this test, so please be patient as we try to finalise the test and get it ready for the public. The test will take place in -5 hours in the Antimatter Dimensions Discord."
  },
  {
    id: "ai902",
    text: "The Night is coming, and in its wake a terrible thing has been unleashed: ruin. Chaos. And decay. And death. And chaos is coming for all of us."
  },
  {
    id: "ai903",
    text: "This article is a stub. You can help Deskthority by expanding it."
  },
  {
    id: "ai904",
    text: "A new, safer way to store and retrieve your data has been found! When you get to the AE, click on the big red button and the world will stop rotating!"
  },
  {
    id: "ai905",
    text: "Ooh, what's this noise? A crash of some sort? More like, a crash of some greater magnitude? I don't know. Whatever it is, it's probably not being caused by me. I shouldn't be putting it through, it's just... well, you see, I was going to put it through, but then I just thought it might be a good idea to just put it through. Oh, it's gonna be a good one, I promise."
  },
  {
    id: "ai906",
    text: "Last week, we reported that an unknown individual known only as \"Anti-Doctor\" has broken the game and claimed ownership of the game's data. Since then, he has spread the word that he has an \"explosive new app\" that will allow him to \"turn [he] antimatter.\" However, no one has come forward with information on how to use the app, or even if it is a reality. We will update this article if and when we find out."
  },
  {
    id: "ai907",
    text: "The second thing I'm gonna do is go talk to the Devs in person. I don't know if I'll be able to do that without pissing someone off, so I'm gonna do it right here."
  },
  {
    id: "ai908",
    text: "The great majority of people don't get the full benefit of antimatter dimensions, and as such are not affected by it. However, there are certain people who are affected and at certain times of the day, depending on their mood and how much antimatter they have, they will manifest a dimensional shift, going from being idle to being actively involved in news ticker suggestions. This shift is due to the antimatter in their body emitting a certain wavelength, called \"red-shifted\"."
  },
  {
    id: "ai909",
    text: "By now we all know the drill. You get a new prestige layer just by spending eternity with someone."
  },
  {
    id: "ai910",
    text: "The real reason that the 10th dimension exists is to keep us all imprisoned in a virtual reality simulation."
  },
  {
    id: "ai911",
    text: "Your PC is infected with a weird, floating virus that's trying to steal all your antimatter. There's no cure, so get offline now!"
  },
  {
    id: "ai912",
    text: "The year is 5303. Hevipelle, the creator of Antimatter Dimensions, has touched the tenth dimension."
  },
  {
    id: "ai913",
    text: "The phrase \"Hevipelle hates me\" is pretty funny."
  },
  {
    id: "ai914",
    text: "The government shutdown has come and gone, the nation is still in a recession, and the Federal Reserve is still reading zero-hour contracts. The only thing that's getting better is your relationship with antimatter, obviously. It's been proven that knowing someone with an antimatter will bring you closer to extinction than any other kind of friend you can have."
  },
  {
    id: "ai915",
    text: "IMPORTANT NEWS: The developer Hevipelle has announced that Antimatter Dimensions: the game is now 100% free!"
  },
  {
    id: "ai916",
    text: "Someday, we shall come upon the day when a man will sit on the head of a dragon and call it a \"Dragonball\". Such a man would then go and perform the Dragon Ball Z: Battle Royale in which he would use Dragon Ball Z: Fusion to create a gigantic dragon that would then consume the universe in the process, thus creating a \"Big Bang\". Such a man would then be rewarded by being \"built again\" and sent back to the \"Heavens\"."
  },
  {
    id: "ai917",
    text: "\"I think that the greatest achievement a man can make in his life is to say that he has read every single news ticker suggestion and nothing happened.\" - Kajfik"
  },
  {
    id: "ai918",
    text: "Titanfall 2 is now in closed beta. The beta is only for people who are willing to give up some personal information, such as email addresses. If you're in the beta and would like to leave, you can do so at any time by going to the Help tab and changing your beta settings to public."
  },
  {
    id: "ai919",
    text: "Personally I like to get a 4 or 5 star rating, it gives you an idea of how great your suggestion is and also shows me how much you care about the game. If you want I can also do a 6 star rating, which is fine with me. I don't care if people like it or not, I work for APG and I get paid to make money."
  },
  {
    id: "ai920",
    text: "The real reason no one talks about 9 is because it's not a big secret"
  },
  {
    id: "ai921",
    text: "The only difference between a man and a woman is their attitude towards petting animals."
  },
  {
    id: "ai922",
    text: "A number of recent television documentaries have featured the story of a dog named Louie. He was accidentally made a member of the public after his owner left the house. One day he decided to play 'Let's Play Let's Play' with his owner. He was immediately put to sleep."
  },
  {
    id: "ai923",
    text: "The entire history of the world, every single idea, every single failure, every single downfall, every single achievement has been covered in one fell swoop."
  },
  {
    id: "ai924",
    text: "This sentence contains two paradoxes."
  },
  {
    id: "ai925",
    get text() { return `The time has come to reveal the next expansion for Antimatter Dimensions: the ${format(Number.MAX_VALUE, 2)}th Dimension. It will be released in -5 hours, it costs ${format(Number.MAX_VALUE, 2)} human souls as of now, and it has nothing to do with matter or antimatter.`; }
  },
  {
    id: "ai926",
    text: "I wonder what the fuss is about with the 4th dimension? Well, if you have 4 of them, and you multiply them by 0, then you get to the magical number of 4. That's why the 4th dimension exists. But what if there were 5? Well, the 5th dimension could replace the 4th dimension, so why not have a 5th dimension? Well, that's what the 6th, the 7th, the 8th, and the 9th dimension are."
  },
  {
    id: "ai927",
    text: "You are using the wrong version! The reality update is already out! Press Ctrl+Shift+Alt+Del to unlock the 10th Dimension!"
  },
  {
    id: "ai928",
    text: "A man claims that he's been in a coma for 20 years now, and that he can't move his fingers. He was brought to the hospital with a compression fracture of his back, and since then he's been receiving medical help. He's since recovered, and now requires no medical attention. We still don't know where he's going with this, but we hope he finds some comfort in knowing that he'll never wake up."
  },
  {
    id: "ai929",
    text: "To move from left to right, turn right."
  },
  {
    id: "ai930",
    text: "Then we have the matter dimensions. From what I can gather, they are made of antimatter. There is some debate about whether or not there are any dimensions left over that are made out of matter, but that is not the main question. The real question is \"why do they exist, and how does antimatter affect them?\""
  },
  {
    id: "ai931",
    text: "A new breed of mad scientist is believed to be creating antimatter at an alarming rate."
  },
  {
    id: "ai932",
    text: "A new kind of justice has been discovered: mass deception. It works by tricking the player into thinking that he/she has done something wrong, when in fact he/she has just done something perfectly normal, i.e. going about his/her daily life normally, without thinking about it."
  },
  {
    id: "ai933",
    text: "Dedicated to the great and wonderful man behind the curtain, the great and wonderful name rick roll. RIP, good man. May you rest in peace."
  },
  {
    id: "ai934",
    text: "For the last time, Antimatter Dimensions isn't a Clicker game."
  },
  {
    id: "ai935",
    text: "The number of dimensions is infinite, but the quality of your dimensions is limited. This is why we only produce the highest quality antimatter, and what makes us different from other factories."
  },
  {
    id: "ai936",
    text: "I've heard of prestige layers before but never sure what to do with them."
  },
  {
    id: "ai937",
    text: "A man walks into a bar. The bartender tells him to stay the heck out. The man continues walking."
  },
  {
    id: "ai938",
    text: "The oldest and maybe the most famous game in all of AD, that certainly will be remembered long after you retire, is AD. Ever heard of someone winning the game with more than 2 1's? I have. Ever heard of someone losing it? I have. Ever heard of a 10th dimension existing in AD? I have never."
  },
  {
    id: "ai939",
    text: "Greetings, I am the first step of the step ladder."
  },
  {
    id: "ai940",
    get text() { return `It's the year ${format(Number.MAX_VALUE, 2)}, Hevi is still trying to figure out how to fix the update.`; }
  },
  {
    id: "ai941",
    text: "What if you could stretch your legs and not lose them forever?"
  },
  {
    id: "ai942",
    text: "T he most important thing to realize is that you don't have to play the game to get the achievement. You can actually get it by just reading the achievement descriptions."
  },
  {
    id: "ai943",
    text: "A new bank has been set up to provide safe haven for cryptocurrencies."
  },
  {
    id: "ai944",
    text: "Google+ is known to be a hit with teens, and today, they got their very own virtual reality (VR) version of Animal Farm, the classic 1950's farm story. The game is a blend of adventure, strategy and music, and was made by a small team of people with an eye towards engaging young people. The game offers an alternative to most other VR games, and is suitable for anyone who is not comfortable with large, complicated, graphics and sounds. The game features over 50 different..."
  },
  {
    id: "ai945",
    text: "This game could be called anything. You could call it whatever you like. But you'd be wrong. It's mine."
  },
  {
    id: "ai946",
    text: "Where does all the antimatter come from?"
  },
  {
    id: "ai947",
    text: "The Tickspeed Challenge is a team based game where you have to time-travel to the Andromeda galaxy to reach the 10th Dimension, the 1st Dimension being the shortest distance to the 10th Dimension. There is no perk for reaching the 9th Dimension, you just have to time-travel to the Andromeda galaxy to reach the 10th Dimension, and you'll be granted with a secret achievement for achieving instant [REDACTED] with no time-travelling."
  },
  {
    id: "ai948",
    text: "This is the question that has been bothering me for so long. What is Antimatter? Is Antimatter an Antimatter? What does it mean when you say \"Antimatter\"? These are the kinds of questions that plague the Antimatter Dimensions..."
  },
  {
    id: "ai949",
    text: "The term 'Antimatter Dimensions' is a play on words that literally means 'Antimatter Dimensions' in the dictionary."
  },
  {
    id: "ai950",
    text: "I can suspend the laws of physics because I'm a genius and my universe is so big that I can literally suspend the laws of physics and create a universe that's twice as big as the current one and with twice the mass, i'm sure you can imagine how big that would be."
  },
  {
    id: "ai951",
    text: "When you are fighting a losing war, you make peace with the Powers That Be. You give up the ghost, and move on to the next challenge."
  },
  {
    id: "ai952",
    text: "Somewhere, in another galaxy, a superintelligence is trying to figure out how to get around the limitations of what a 2-dimensional vector space is. It's probably working on a 3-dimensional space."
  },
  {
    id: "ai953",
    text: "The antagonist of the last few minutes is the mysterious, antimatter-covered being known only as \"The Man in Black.\" He was last seen running towards a news broadcast, seemingly lost, until he made it back to the news station and was interviewed about his experience. His story is told in the bottom right corner of the screen."
  },
  {
    id: "ai954",
    text: "You have unlocked the 4th storyline."
  },
  {
    id: "ai955",
    text: "While you were busy farming that pesky \"real\" number, I was busy writing that news ticker."
  },
  {
    id: "ai956",
    text: "A new power has arisen: the antimatter."
  },
  {
    id: "ai957",
    text: "The day has come. The antimatter is falling from the sky, and the streets are silent."
  },
  {
    id: "ai958",
    text: "The most important thing is to understand that you are playing a simulation. You can win or lose, but you can't get anything from it other than a little itch on your neck."
  },
  {
    id: "ai959",
    text: "The anti-snowman is a very special snowman. He's very timid, but has a very powerful wish to be picked up by a helicopter. The government doesn't want this to happen, so they lock him up in a special building and fly him over great distances. Finally, they drop him on the ground and begin to pick him up. The government didn't use force to pick him up, instead they invited the entire community in and started picking them up. The community refused."
  },
  {
    id: "ai960",
    text: "I'm surprised you didn't say \"Not my cup of anti-tea.\""
  },
  {
    id: "ai961",
    text: "I see you are a man of culture as well. I wonder what it is that draws you to speak in such an ungainly, tortured voice? What attracts you to speak in a language no one can understand? I hear your fans rave about your videos, but what draws you to this place? I feel like I know you. You are... you are a man of mystery. One that intrigues me..."
  },
  {
    id: "ai962",
    text: "Note: this is a private message. Do not send it in public."
  },
  {
    id: "ai963",
    text: "When you reach Infinity you unlock a new dimension: Pandemonium Dimensions. Go to the news ticker for more information."
  },
  {
    id: "ai964",
    get text() { return `Although the majority of players would say that the 10th dimension is not a thing, a handful of people would go and level it up in the most epic way imaginable. These people would use the power of the 10th dimension and achieve, like, ${format(Number.MAX_VALUE, 2)} EP with it. No? Well, they are the exceptions to the rule.`; },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai965",
    text: "The story of the \"perish the thought of dying\" movement has been told before, but never quite accurately. The movement was originally organized by antievolutionists to stop the exponential growth of scientific notation, but soon spread to oppose any form of \"progress\". In its early days the movement was led by an enigmatic individual known only as \"The Great Hevipelle\". Their philosophy was simple: expand the possibilities of what is possible, and push the limits of what is tolerable."
  },
  {
    id: "ai966",
    text: "This is the story of how the world ended. Earth was once a lush and green world. Then, some guy from outer space touched it and started growing mushrooms. He called himself Hevi. Some say Hevi was never satisfied. Some say he exploded. All we know is that Hevi is still out there expanding his reach, and we are stuck here in the void of space."
  },
  {
    id: "ai967",
    text: "Antimatter Dimensions, the only place where you can trade real estate for virtual reality"
  },
  {
    id: "ai968",
    text: "This page contains spoilers for Antimatter Dimensions, you've been warned."
  },
  {
    id: "ai969",
    text: "The best thing about being a news ticker is being able to slip into the news without anyone noticing."
  },
  {
    id: "ai970",
    text: "This paperclip maximizer is a great idea. It's probably best not to let it run its course though, since it's quite possibly the most amazing thing you've ever seen. If you've somehow survived the first phase of the paperclip dimension, you're probably wondering what it's doing in your home. Fortunately, it's super simple to fix. Just go to options, and change \"Max all\" to \"Always max all\"."
  },
  {
    id: "ai971",
    text: "A powerful wizard chose to channel negative energy into antimatter, and now the antimatter is spilling out into the world."
  },
  {
    id: "ai972",
    text: "A new age of ultra low-cost, ultra-fast trains has been announced by Elon Musk. Users will be able to travel from A to Z in a mere 186ms."
  },
  {
    id: "ai973",
    text: "A group of researchers at the University of Manchester have created a 3D printer that can create any object out of thin air, including a 3D-printed replica of the Virgin Mary."
  },
  {
    id: "ai974",
    text: "Alright, here's a new game called Antimatter Dimensions, it's like Matter Dimensions except with less stuff and more fun. It's available on Android, iOS, and web. The game is very simple: you take the 6 dimensions and the antimatter, and in the 6 dimensions you take the matter and in the matter you take the antimatter, and you play the game the same way you would any other game."
  },
  {
    id: "ai975",
    text: "What arbitrary, subjective, meaningless number comes out of your mouth like a mercury thermometer? 1.79"
  },
  {
    id: "ai976",
    text: "\"Word on the street is that the word \"bank\" is an anagram of \"bank\" - that makes sense but i'm not there yet\" - Slabdrill"
  },
  {
    id: "ai977",
    text: "The 10th dimension rose up like a volcano and began raining destruction on the empty 11th dimension. The smoke and debris from the exploding 10th dimension covered the entire 10th dimension. All that is left is a smoldering crater and the remains of the 10th dimension."
  },
  {
    id: "ai978",
    text: "Help! How do I get the dots moving in my head coordinator?"
  },
  {
    id: "ai979",
    text: "Hi, could you please not disable the news ticker? Thank me later."
  },
  {
    id: "ai980",
    text: "If you are suffering from low antimatter production, then worry not, friend! Our highly scientific antimatter government has recently reached the tenth dimension and will soon begin giving us the Anti-Hats as a sign of respect!"
  },
  {
    id: "ai981",
    text: "You click the bottom left corner of the screen and a green tingle goes up your leg. It's a treat you get from scratching antimatter."
  },
  {
    id: "ai982",
    text: "A quick note to those of you who buy into the Analytics subscription: we get a small percentage of your antimatter sales, but you do pay a small amount of money to support the research of the news ticker. It's a small price to pay for the convenience of browsing antimatter dimensions."
  },
  {
    id: "ai983",
    text: "Why haven't we caused the antimatter stock market to crash yet?"
  },
  {
    id: "ai984",
    text: "Even after the Heavenly Pelle put a large amount of antimatter in the pool, it hasn't produced anything. The scientist who discovered the vulnerability was last seen climbing a tree in a group of 10, with a small notebook on his lap, drinking cheese juice and watching Nothing."
  },
  {
    id: "ai985",
    text: "One-two-three, boo-two-three, three-four-five, anti-four-five, two-three-eight, nine-fifteen, five-six-seven, eight-nine-ten, nine-ten-ten, seven-seventy-eight... All has been going fine until last night, when four of the eight neighbors start complaining about a strange glow. A odd hum runs through the neighborhood, almost like a radio static. It gets more and more intense as you drive by, until it's practically pitch black. You try to explain it to the neighbors, but they won't listen. The neighborhood is unsafe, everyone knows that. You analyze it further, everyone thinks it's just some astrophysicist's idea. Then, s---. It's explodium. There's antimatter everywhere, and it's getting worse all the time. It turns out, there's about 1e31 Planck volumes in the entire observable universe. And that's just the antimatter we're talking about. There's also dark matter, normal matter, and extra matter. You know, the kind you create with your imagination."
  },
  {
    id: "ai986",
    text: "If you ever feel like making an antijoke, just remember that it could be pretty good."
  },
  {
    id: "ai987",
    text: "You won't convince anyone to go to heaven, but you might get close."
  },
  {
    id: "ai988",
    text: "BREAKING NEWS: Hevipelle, the creator of the 10th dimension, has just announced that beta will be out in 5 hours!"
  },
  {
    id: "ai989",
    text: "The Force is with you."
  },
  {
    id: "ai990",
    text: "What if Jesus was an anti-matter ghost?"
  },
  {
    id: "ai991",
    text: "In the summer of 711, the Great Calamity overtook Tyria. A great void was made, and Tyria was left to rot. The armies of the known world had given up, and the void was filled with darkness. Only the might of Kajfik remained, and he rose to become the greatest God in the known world. He is said to be the one who will face the Great Calamity alone, and destroy him."
  },
  {
    id: "ai992",
    text: "In recent news clashes, the warlocks have been gathering looters for raid boss. He loves his 5 hour looters and wants to show off his mighty weapon of choice, the 10th Dimension. As the two beasts battle, the 1st dimension holder needs to be careful as the first one might get the same as the 2nd one as well. Meanwhile, the raid ends its journey with a bang as the boss squanders the Explodium exploit by flooding the area with Explodium, which before his, was filled with Marsh Mice. Both are promptly annihilated by the boss' relentless claw attacks. It's a grueling job, but the raid stalwarts manage to grab the stalagm and push him across the opal Gondwan . With the boss dead and the warlocks not far behind, the warlocks try their hand at farming looters, but the grinding continues apace. Things are looking bleak for the warlocks, as the boss seeks to take advantage of the people's greed, and steal their weaponry, making them unable to use any remaining of their  weapons, which are made of highly-stable antimatter. The warlocks attempt to use the no fluke policy as a weapon to smite the people, but the people take to the streets, physically attacking and mentally draining the people of all mental capacity they had been holding onto. The people resort to violence, using the 10th dimension just like they use to hold people back, but the people have faith in God that he will merciful, He will bring about a kinder and gentler time where everyone can use the last drop of their power."
  },
  {
    id: "ai993",
    text: "What if you wanted to but I told you it would be too painful for you."
  },
  {
    id: "ai994",
    text: "how big of numbers do you have"
  },
  {
    id: "ai995",
    text: "Just want to thank the dev team for putting so much effort into Antimatter Dimensions and the Antimatter Dimensions 2"
  },
  {
    id: "ai996",
    text: "Hevipelle has broken the 10th wall! Get ready for everything to get pretty dark."
  },
  {
    id: "ai997",
    get text() { return `The intergalactic antimatter trade has been severely disrupted, trading entire galaxies for the occasional paperclip. Cargo stands are no longer used. Oddly enough, the entire dimension has become a dumping ground for discarded plastic and other useless garbage. It's almost as if the rest of the multiverse isn't producing enough good  antiparticles to feed the growing population. Unfortunately, the situation is forcing the entire multiverse to scramble to find ways to meet the growing needs of the antimatter-eating  dev, who claims to have over ${format(Number.MAX_VALUE, 2)} specimens left to collect.`; }
  },
  {
    id: "scp1",
    text: "<b>Item #:</b> SCP-002 <b>Object Class:</b> Euclid <b>Special Containment Procedures:</b> SCP-002 is to remain connected to a suitable power supply at all times, to keep it in what appears to be a recharging mode. In case of electrical outage, the emergency barrier between the object and the facility is to be closed and the immediate area evacuated. Once facility power is re-established, alternating bursts of X-ray and ultraviolet light must strobe the area until SCP-002 is re-affixed to the power supply and returned to recharging mode. Containment area is to be kept at negative air pressure at all times. Teams including a minimum of two (2) members are required within 20 meters of SCP-002 or its containment area. Personnel should maintain physical contact with one another at all times to confirm there is another person present, as perception may be dulled, skewed, or influenced by proximity to the object.  No personnel below Level 3 are permitted within SCP-002. This requirement may be waived via written authorization from two (2) off-site Level 4 administrators. Command staff issued such a waiver must be escorted by at least five (5) Level 3 Security personnel for the duration of their contact and must temporarily surrender their rank and security clearance. Following contact, command staff will be escorted at least 5 km from SCP-002 to undergo a seventy-two (72)-hour quarantine and psychological evaluation. If deemed fit for return to duty by psych staff, rank and security clearance may be restored when quarantine expires. <b>Description:</b> SCP-002 resembles a tumorous, fleshy growth with a volume of roughly 60 m³ (or 2000 ft³). An iron valve hatch on one side leads to its interior, which appears to be a standard low-rent apartment of modest size. One wall of the room possesses a single window, though no such opening is visible from the exterior. The room contains furniture which, upon close examination, appears to be sculpted bone, woven hair, and various other biological substances produced by the human body. All matter tested thus far show independent or fragmented DNA sequences for each object in the room. Refer to the Mulhausen Report [cross-ref:document00.023.603] for details related to object's discovery."
  }, {
    id: "scp2",
    text: "<b>Item #:</b> SCP-003 <b>Object Class:</b> Euclid <b>Special Containment Procedures:</b> SCP-003 is to be maintained at a constant temperature of no less than 35°C and ideally kept above 100°C. No living multicellular organisms of Category IV or higher complexity may be allowed to come into contact with SCP-003. In event of total power failure, if SCP-003-1 begins to increase its mass, assigned personnel must engage in skin contact with SCP-003-1. Ideally, personnel may use their body heat to return SCP-003-1 to above the critical temperature; however, skin contact must be maintained even in event of SCP-003 reaching activation temperature, lasting at minimum until SCP-003-1 advances fully to its second growth stage.  Personnel who enter SCP-003's containment area must first be examined for body parasites of Category IV or higher complexity, and sterilized if such organisms are present. All personnel who have come in physical contact with SCP-003-1 are to immediately report for sterilization afterwards. SCP-003-1 must not be removed from SCP-003-2 except in case of emergency procedures detailed above. Any significant change in SCP-003-2's rune activity (including pattern, frequency, or color) should be reported within three (3) hours of occurrence. Cessation of rune activity must be reported immediately. SCP-003-2 must be supplied with power via the source designated Generator 003-IX at all times. <b>Description:</b> SCP-003 consists of two related components of separate origin, referred to as SCP-003-1 and SCP-003-2. SCP-003-1 appears to be composed of chitin, hair, and nails of unknown biology, arranged in a configuration similar to that of a computer motherboard. Testing reveals SCP-003-1 to predate earliest known circuit boards by a factor of thousands of years. SCP-003-1 is considered sentient but not actively dangerous except under certain conditions. SCP-003-1 was found on a stone tablet, SCP-003-2, on which it currently resides. The runes on SCP-003-2 are not part of any known language, and emit pale, flickering light patterns. SCP-003-2 is controlled by a (non-biological) internal computer, the contents of which are mostly inaccessible without risk of damaging SCP-003-2. SCP-003-2 is capable of controlled emissions of radiation, including heat, light, and anomalous radiation types. SCP-003-2 contains an internal power source of an anomalous nature, which appears to have been losing power since several centuries before discovery. It is considered probable that SCP-003-2 was created for the purpose of containing SCP-003-1. Partially interpreted data recovered from SCP-003-2 may refer to a past and/or potential future LK-class restructuring event caused by SCP-003-1. SCP-003 was located by remote viewing team SRV-04 Beta. It appears possible that SRV-04 Beta was deliberately contacted by SCP-003-2. Other organizations have also been alerted to SCP-003's existence, possibly by similar means. Despite this activity, SCP-003-2 does not appear to be sentient, based on its lack of reaction to M03-Gloria analysis and procedures. When SCP-003 drops below the temperature of 35°C, both components react. First, SCP-003-1 enters a growth state characterized by an exponential increase in mass. This growth state consists of two stages. In both stages, SCP-003-1 partially fuels its growth by converting matter around it, starting with any surrounding inorganic material, including atmospheric elements, then nonliving organic material, including cells of dead skin, hair, chitin, enamel, keratin, and other biological materials. The first stage is always the same. SCP-003-1 will first increase its mass, then take a form similar in shape to an ophiuroid (brittle star) of fifteen meters in diameter (including what appears to be a central processor of three meters in diameter). It will form sensory organs that appear to scan its surrounding environment, and will partially convert the area around it to an unidentified anomalous substance (SCP-003-2 seems immune from conversion). The second stage describes a growth alteration which occurs when SCP-003 comes into contact with living organic material; SCP-003 appears to \"template\" itself off of the organic material, and will attempt communication with organisms that match its initial \"template\" or \"templates\". In its second stage, SCP-003-1 may pause, slow or change its growth, and will also convert inorganic and nonliving organic elements into functionally similar structures while anomalously altering their physical makeup. While growth is consistent in the first stage, in the second stage SCP-003-1's growth rate is diminished by 20-90% so long as SCP-003-1 remains in contact with living organic material. The percentage is determined by the complexity of the organism(s) in contact with SCP-003-1; SCP-003-1 appears to devote a large amount of processing power to analysis of living organic material. During each of SCP-003-1's growth stages, SCP-003-2 releases bursts of radiation that temporarily inhibit SCP-003-1's growth, or reverse this growth when the temperature of SCP-003-1 rises above 100°C. Similar radiation emissions have been replicated or recorded via other anomalous means. SCP-003-1's biology has been the subject of extensive study. Significant elements have been identified similar to SCP-███, SCP-1512, and SCP-2756, the latter two of which have no further confirmed connection with SCP-003-1 and no known connection with each other, and none of which are fully understood (technically, even less understood than SCP-003, thanks to the extensive cross-disciplinary research on the SCP-003 objects). To date, no convincing analysis has been put forward which satisfactorily explains SCP-003-1's connection to these SCP objects or others, nor its connection to modern technology beyond appearance (and potential mimicry via unknown mechanism)."
  },
  {
    id: "scp3",
    text: "<b>Item #:</b> SCP-004 <b>Object Class:</b> Euclid <b>Special Containment Procedures:</b> When handling items SCP-004-2 through SCP-004-13, proper procedure is vital. The items are not permitted to be moved off-site unless accompanied by two Level 4 security personnel. Under no circumstances should any other component of SCP-004 be taken through SCP-004-1. The effects of doing so are as yet unknown, and the current cost of experimentation makes further research impractical. Should any of the objects contained within SCP-004-1 breach containment, or the facility be breached, the keys must be brought inside and the door closed prior to activation of Site 62’s on-site warhead. Unauthorized removal of keys from the testing area is grounds for immediate termination. Level 1 clearance is required for basic access to SCP-004-1; Level 4 clearance is required for use of SCP-004-2 to -13. <b>Description:</b> SCP-004 consists of an old wooden barn door (SCP-004-1) and a set of twelve rusted steel keys (SCP-004-2 through SCP-004-13). The door itself is the entrance to an abandoned factory in [DATA EXPUNGED]."
  },
  {
    id: "scp4",
    text: "<b>Item #:</b> SCP-005 <b>Object Class:</b> Safe <b>Special Containment Procedures:</b> SCP-005 poses no immediate risk in any direct sense. Even so, its unique functions require special measures be taken to restrict access and manipulation of the object. Approval of at least one (1) Level 4 personnel is required for the removal of the object from its containment area. <b>Description:</b> In appearance, SCP-005 resembles an ornate key, displaying the characteristics of a typical mass produced key used in the 1920s. The key was discovered when a civilian used it to infiltrate a high security facility. SCP-005 seems to have the unique ability to open any and all forms of lock (See Appendix A), be they mechanical or digital, with relative ease. The origin of this ability has yet to be determined."
  },
  {
    id: "scp5",
    text: "<b>Item #:</b> SCP-006 <b>Object Class:</b> Safe <b>Special Containment Procedures:</b> Whereas the nature of SCP-006 does not warrant any extensive containment, a certain level of secrecy is necessary regarding the object's existence and properties, for obvious reasons. The following procedures are required not for personnel safety, but to deny or hide knowledge of SCP-006's effects from the personnel who interact with it. 1: All personnel interacting with SCP-006 in any physical way are required to wear modified Class VI BNC suits. Before personnel are allowed to perform procedures, they must be briefed with Material SCP-006B or SCP-006C. SCP-006A Briefing is the correct one and is restricted to only those with O5 clearance. To ensure personnel are wearing suits properly, they are to be submerged into a pool of water. Any air bubbles spotted signify a leak in the suit. 2: Procedures with SCP-006 are to be carried out under extreme surveillance. In case of contact with SCP-006, the commander in charge will announce Procedure 006-Xi-12, which the personnel have been briefed to believe to mean high toxicity is present and they must evacuate. 3: Any procedure in which liquid is acquired from SCP-006 must be approved by three (3) O5 level personnel. The liquid is to be transferred in a Quad-Sealant Container and under armed guard. 4: If at any time personnel come into contact with SCP-006 or liquid from SCP-006, they are to be confined and terminated after sufficient studies are done. Due to the nature of SCP-006, the most effective termination method is incineration. (For full report, see file SCP006-TerO5) <b>Description:</b> SCP-006 is a very small spring located 60 km west of Astrakhan. Foundation Command was aware of its existence since the 19th century, but were unable to secure it until 1991 due to political reasons. On the spot of the spring, a chemical factory has been constructed as a disguise, with the majority of laborers under Foundation and/or Russian control. The liquid emitted from the spring has been chemically identified as simple mineral water in 1902, but has the unusual property of \"health\". Ingesting the liquid produces the following properties in human beings: the ability to regenerate DNA damaged by sufficient duplication, heightened excitement of cellular duplication, vastly improved abilities in the repair of damaged tissue, and a frightening increase in the effectiveness of the human immune system. Upon testing the liquid on animal subjects, hostile bacteria and viral agents were destroyed immediately. Many reptiles and birds were unaffected, while higher primates experienced the same benefits as humans."
  },
  {
    id: "scp6",
    text: "<b>Item #:</b> SCP-007 <b>Object Class:</b> Euclid <b>Special Containment Procedures:</b> SCP-007 is to be contained in a sealed room measuring 10 m on each side. Room is to be furnished comfortably as a living area, along with whatever items are requested by ███████████████ (hereafter referred to as Subject), given that providing Subject with requested items would not compromise security. Subject is not to be allowed to leave the room, and is to be detained with force if necessary. <b>Description:</b> SCP-007 is located within a cavity in the abdomen of Subject. Subject is a Caucasian male, physically approximately 25 years of age (subject claims to be 28) and 176 cm in height. Most of Subject's abdomen (muscles, skin, and organs) is absent, though Subject does not appear to suffer because of this. Instead of normal flesh, a sphere composed of soil and water is present, though it does not actually come into contact with Subject's body at any point. The sphere appears to be, in most respects, a miniature near-duplicate of the Earth, approximately 60 cm in diameter, although continental alignment is not consistent with that of any alignment known in Earth's history. The sphere has its own weather patterns and negligible gravitational pull, in addition to microscopic organisms somewhat resembling those of modern-day Earth inhabiting it. Two intelligent species have been observed, though contact and communication with either has yet to be made. Technology levels of observed species must be checked at least once a week and, as of ██/████, are approximately equal to that of 15th-Century Earth. Subject claims to be named ███████████████, but no records of such a person can be found. Subject does not require food or water, and while he has been observed consuming both, what happens to such substances after being swallowed is unknown. Subject is intelligent (IQ has been measured at 128) and amiable, and regards the planet in his abdomen as a minor curiosity about his body. Subject seems to experience no stress about his unusual condition. When questioned about planet's origins, Subject replied, \"I just woke up one day, and there it was. I don't have any idea how it got there.\" Subject has provided a Social Security number and driver's license number and requested that they be checked against known records. When checked, it was discovered that neither had yet been allocated. Dr. ███████ has a weekly chess game with Subject, during which Subject's mental health is evaluated. Dr. ███████ reports that Subject does not seem to mind the restricted living environment, and has yet to attempt to escape or show signs of violence or mental illness, though he has repeatedly requested a computer with an internet connection. It is recommended that this not be provided as it may be used to compromise security."
  },
  {
    id: "scp7",
    text: "<b>Item #:</b> SCP-008 <b>Object Class:</b> Euclid <b>Special Containment Procedures:</b> SCP-008 samples have been deemed Class V extreme biological hazards, and all related protocols apply. Incineration and irradiation measures will be deployed in the event of political or military action which may result in the facility being dismantled; a power failure; or zero communications from operatives or outside channels during any given eight hour period. The quarantine period for operatives leaving the facility is four months. If a breach has occurred, incineration and irradiation measures shall be deployed. It should be the policy of all G2 sites to not prepare an evacuation procedure. <b>Description:</b> SCP-008 is a complex prion, samples of which are stored in each of the known G2 sites. Research into SCP-008 is highly classified and primarily aimed at preventing research which may lead to the synthesis of SCP-008 in the distant future. Traits of the SCP-008 prion include: -100% infectiousness. -100% lethality. -Transmission through exposed mucous membranes and all bodily fluids. -Not airborne or waterborne. Symptoms of infection with SCP-008 manifest no more than three hours after exposure, and include: -Flu-like symptoms with high fever, plus severe dementia in later stages. -Coma onset approximately 20 hours after first symptoms appear and 12 hours after noticeable dementia. Coma onset will be considered onset of death. -A period of sporadic cellular necrosis occurs which comes to resemble gangrene. Surviving tissue assumes its original function and is highly resilient. -Red blood cells greatly increase oxygen storage capacity, resulting in slower blood flow and increased muscle endurance and strength. -Nervous and muscular systems are unaffected by total organ failure for several hours. -Metabolism may decrease to extremely low levels, allowing subject to survive for over 10 years without nutrition. -High blood viscosity results in negligible blood flow from gunshot, puncture, and slashing injuries. -Conditioned behavior, motor controls, and instinctive behavioral mechanisms are damaged, and cognitive abilities are severely retarded and erratic. Animals experience excessive brain necrosis and are inactive. -Subject can adapt to its damaged nervous systems but is limited to basic physical activities, including standing up, balancing on two legs, walking, biting, grabbing, and crawling. Subject will energetically move towards sights, sounds, and smells it associates with living humans. Subject will attempt to ingest living humans if physical contact is made. -Neutralizing fully-infected subjects requires significant cranial trauma. There is strong evidence to suggest SCP-008 itself did not form naturally on Earth, since variants of similar complexity would have displaced much of the ecosystem. In 1959, a short collaborative effort with the USSR to locate G2 sites and eliminate SCP-008 was negotiated following their discovery. The status of SCP-008 in Russian custody since collaboration ended is unknown."
  },
  {
    id: "scp8",
    text: "<b>Item #:</b> SCP-009 <b>Object Class:</b> Euclid <b>Special Containment Procedures:</b> Object is to be contained within a sealed storage tank of heat-resistant alloy with dimensions not less than 2m x 2m x 2m. Under no circumstances should SCP-009 be exposed to temperatures in excess of 0°C when not undergoing testing, and no water-based solutions shall be allowed within 30 meters of the object's containment area. Object's chamber is to be fitted with temperature sensors which must be monitored at all times, and is to be kept refrigerated by no fewer than three (3) redundant cooling units. Any malfunction of sensors, or of coolant systems, is to be reported and repaired immediately. If at any time the temperature in the containment area climbs above -5°C, the chamber is to be locked down and flooded with coolant until temperatures return to safe levels (-30°C to -25°C). Containment area is to be kept in total vacuum during testing, and personnel interacting with SCP-009 must wear full environmental protection gear. Following testing, all equipment, personnel, and other materials must undergo dehydration procedures and be quarantined for no less than 12 hours. Any moisture found displaying properties of SCP-009 is to be quarantined and added to the containment area as soon as possible. Living organisms found to be contaminated by SCP-009 are to be terminated by chemical dessication and extracted molecules of SCP-009 added to containment. <b>Description:</b> SCP-009 is approximately ███ liters of a substance which superficially resembles distilled water (H2O), except with a distinct bright red hue. This red hue is discernible in all phases, and serves as the most expedient method of identifying contaminated matter before its anomalous properties manifest. In contrast to mundane water, SCP-009 assumes a liquid phase at temperatures between -100°C and 0°C, and a solid state above those temperatures. At temperatures below -100°C, SCP-009 vaporizes into a gaseous phase similar to steam. Examinations of the atomic structure of SCP-009 have proved inconclusive. The substance appears to be identical to normal water molecules, with the exception of [REDACTED] in contrast to standard laws of enthalpy. Dr. █████, Site ██'s resident expert on Xenospatial Physics suggests that SCP-009 may originate in a universe with alternate physical laws. The most hazardous property of SCP-009, however, is its ability to contaminate normal H2O. When in contact with any aqueous solution, SCP-009 will, through unknown mechanisms, transfer its anomalous properties to other objects and creatures. Testing has shown it capable of assimilating ice, steam, tea, fruit juice, seawater, blood, and [DATA EXPUNGED]. The time it takes for this process to occur varies depending on temperature and the exact chemical composition of affected matter, and had been observed as taking between 3 minutes and ██ hours. Experiments on D-Class personnel have illustrated the process of conversion by the substance, which has been found to follow a consistent pattern: 1. Initial Exposure: Subject is exposed to SCP-009, and it begins assimilating any moisture present on the exposed surface. Creatures in this stage do not commonly notice any unusual symptoms except for a slight warming sensation. 2. Surface Conversion: Frost begins to form on the exposed area as the heat produced by the subject and SCP-009 itself raises its temperature above 0°C. This stage can take anywhere from one (1) minute to █ hours, during which time subjects begin to feel [REDACTED] crystals from the epidermis. 3. Deep Tissue Conversion: Exponential increase in temperature of SCP-009 causes runaway reaction throughout subject's body, resulting in [REDACTED]. Actual blood loss is minimal due to ice crystals [REDACTED], allowing subjects to remain alive and conscious for up to ██ hours. 4. [DATA EXPUNGED] Testing on D-Class personnel was discontinued as of 4/23/20██."
  },
  {
    id: "scp9",
    text: "<b>Item #:</b> SCP-010 <b>Object Class:</b> Safe <b>Special Containment Procedures:</b> The objects comprising SCP-010 are to be kept in numbered locked boxes at Site-19. They are not to be worn except by test subjects. SCP-010 are only to be removed from storage for testing. <b>Description:<b/> SCP-010 consists of a series of six (6) apparently identical cast iron collars with numbered metal tags and one (1) remote control. The control is SCP-010-1. The collars are SCP-010-2 through 010-7. The collars contain intricate electronic components and are powered by small (5 mm diameter, 2 mm thick) 100 V batteries. These batteries are rechargeable. The remote is a heavy black box resembling an old style hand-held radio transmitter/receiver with a primitive blue/white cathode ray screen and a series of more than 100 unlabeled buttons, as well as a frequency tuner. Through trial and error, the frequencies of all six (6) currently found collars have been discovered. A label in Russian is stamped into the metal along with a logo consisting of workers building a pyramid. No official Russian corporation or government agency uses this logo or matches the words stamped into the metal. Placing the collar around the neck of a person and securing it allows one to control their every movement with the remote. It is also capable of producing an adrenal response and activating or deactivating the sympathetic nervous system. The most abnormal feature of the collars is the effect they have on the body morphology. They allow the user of the remote to reconfigure the shape of the victim to an extent that is apparently only limited by the knowledge of the programming language of the remote."
  },
  {
    id: "scp10",
    text: "Item #: SCP-011 <b>Object Class:</b> Safe <b>Special Containment Procedures:</b> Item SCP-011 and the area surrounding it are to be cleaned once every day. For safety purposes, cleaning should start at least 30 minutes after sundown. Cleaning should always be performed by at least two (2) personnel, who are also advised to note anything unusual about the item or the debris cleaned up. In a situation where the item cannot be cleaned for more than two (2) days, local residents must be contacted and instructed not to approach the item. [Containment procedures nullified 2004] <b>Description:</b> SCP-011 is a Civil War memorial statue located in Woodstock, Vermont. The statue is the image of a young male soldier holding a musket at his side, and is carved out of granite quarried within the area. Occasionally, SCP-011 has been observed lifting its musket to the sky to fire at birds which attempt to land or defecate on it. Reports detail that its movements produce soft grinding sounds but do not cause it any structural failure. Oddly, the gunfire is very similar to that of a standard firearm, despite observations that the item only loads granite bullets and granite powder into the musket (which is also unharmed by the firing). In spite of its efforts, some fecal matter does manage to strike SCP-011, and it has reportedly become distressed when it has had a large amount of feces on it, on some rare occasions even firing at humans."
  },
  {
    id: "scp11",
    text: "Item #: SCP-012 Object Class: Euclid Special Containment Procedures: SCP-012 is to be kept in a darkened room at all times. If the object is exposed to light or seen by personnel using a light frequency other than infrared, remove personnel for mental health screening and immediate physical. Object is to be encased in an iron-shielded box, suspended from the ceiling with a minimum clearance of 2.5 m (8 ft) from the floor, walls, and any openings. Description: SCP-012 was retrieved by Archaeologist K.M. Sandoval during the excavation of a northern Italian tomb destroyed in a recent storm. The object, a piece of handwritten musical score entitled \"On Mount Golgotha\", part of a larger set of sheet music, appears to be incomplete. The red/black ink, first thought to be some form of berry or natural dye ink, was later found to be human blood from multiple subjects. The first personnel to locate the sheet (Site 19 Special Salvage) had two (2) members descend into insanity, attempting to use their own blood to finish the composition, ultimately resulting in massive blood loss and internal trauma. Following initial investigations, multiple test subjects were allowed access to the score. In every case, the subjects mutilated themselves in order to use their own blood to finish the piece, resulting in subsequent symptoms of psychosis and massive trauma. Those subjects who managed to finish a section of the piece immediately committed suicide, declaring the piece to be \"impossible to complete\". Attempts to perform the music have resulted in a disagreeable cacophony, with each instrumental part having no correlation or harmony with the other instruments."
  },
  {
    id: "scp12",
    text: "Item #: SCP-013 Object Class: Safe Special Containment Procedures: SCP-013 are to be kept in a Secure Storage Vault at Site-66. Exposed subjects are to be monitored for differences between their symptoms. Exposed subjects are to be interviewed daily, and any changes in perception are to be logged. Description: SCP-013 is the collective designation of 242 cigarettes which display similar anomalies. The most common external detail between instances is the presence of the words “Blue Lady” hand-written on each cigarette in blue ink. Subjects who consume the contents of SCP-013 through inhalation will begin to perceive themselves as a specific unidentified woman. Subjects have described the woman to be aged between 25 and 35 years old, standing approximately 1.6 metres tall with an estimated weight of between 50 and 55 kg. Additional recurring details include cropped dark hair, blue eyes, and bright blue lipstick. Immediately after consuming an instance of SCP-013, subjects will gradually begin to perceive reflections of themselves as having the features of the woman, and will gradually perceive their bodies changing to reflect her appearance over the course of the following weeks. All changes are entirely mental; the subject’s body does not change outwardly, only their perception of themselves. These alterations are permanent, and cannot be reversed. SCP-013 was discovered after the suicide of an Ian Miles, packed in a large cardboard crate in his apartment. A cursory search of the apartment uncovered several hundred sketches of a figure strongly resembling the one perceived while under 013's effect. Miles' body had been found sitting at a desk, dead of a massive overdose and draped over a handwritten note, transcribed below. During the investigation of Miles' apartment, one civilian investigator became affected by 013's effect. An embedded Agent soon contacted the nearest Site; the subject, the artifact, and related evidence were extracted and contained. Currently, two hundred seventeen instances of SCP-013 cigarettes are contained at Bio-Site 66; twenty-five SCP-013 cigarettes are contained at Research Sector-09, pending future research into similar anomalous effects."
  },
  {
    id: "scp13",
    text: `Item #: SCP-014 Object Class: Safe Special Containment Procedures: SCP-014 is to be kept in Site-██, in a chair with arms, preferably facing a window. Music should be supplied on a regular basis, preferably constantly. This music should not include pieces originating after 1937. A security camera should be present in SCP-014's room. Description: SCP-014 is a Caucasian male, appearing to be approximately 30 years of age, with black hair, brown eyes, and a somewhat round face. Records indicate his name to be Robert Chetford, confined in 1915 to the Norwich Asylum in Connecticut for delusional insanity, claiming that he had been cursed to live forever, and was slowly turning into concrete in consequence. The asylum closed in 1937, and the patients were transferred to various other facilities. SCP-014 came to Foundation attention in 19██, from rumours of a patient who seemed to be entirely immobile and showed no signs of aging. Further investigation determined that acquisition was warranted. SCP-014 is to all outward appearances a normal man, but he does not appear to age, and shows no signs of possessing a metabolism. He does not eat, drink, perspire, or in any other way demonstrate life functions. He breathes only to speak, and apart from his eyes and vocal apparatus, is to all appearances utterly immobile. He has never shown any evidence of pressure ulcers despite his position not having varied for several decades; neither do his muscles appear atrophied. He can converse normally, but shows little knowledge of or interest in events since his confinement.`
  },
  {
    id: "scp14",
    text: `Item #: SCP-015 Object Class: Euclid Special Containment Procedures: SCP-015 is impossible to move, and is contained on-site. A gap of at least 2 m (6 ft) needs to be maintained around the entire structure containing SCP-015 at all times, and no structures of any kind are to make contact with SCP-015's current containment structure. Exploration is permissible, but only in teams of three (3) with full safety lines and GPS tracking. Any protrusions from SCP-015 must be capped and sealed immediately, with the new site recorded and logged. No aggressive action is to be made within SCP-015. No hand or power tools are allowed anywhere inside SCP-015. No repairs or maintenance are to be made anywhere on SCP-015. Description: SCP-015 is a mass of pipes, vents, boilers and other various plumbing apparatus completely filling a warehouse in ███████. The pipes appear to grow when not under observation, attempting to connect to nearby structures via sewer systems and underground plumbing. SCP-015 contains, at current estimate, over 190 kilometers (120 miles) of pipes, ranging in diameter from 2.5 cm to over 1 m. Some pipes appear new, while others are rusted and leaking. Pipes have been reported as being made of bone, wood, steel, pressed ash, human flesh, glass, and granite. No pipes composed of lead, PVC plastic, copper, or any other traditional material for the production of pipes have been found. SCP-015 reacts to tools and aggression. Any personnel acting violently, carrying tools, or attempting to damage or repair SCP-015 in any way, will trigger a reaction. Any pipes near the subject will burst, spraying on the subject for several seconds before the flow suddenly stops. Pipes have been reported containing oil, mercury, rats, a species of insect not yet identified, ground glass, sea water, entrails, and molten iron. Pipes will continue to burst around the subject until death or retreat. SCP-015 was cut back to its current structure after attaching to 11 other structures in the area. Currently, 11 personnel have been killed, and 20 more are still missing. Reports have been made of banging and screaming coming from within SCP-015.`
  },
  {
    id: "scp15",
    text: `Item #: SCP-016 Object Class: Keter Special Containment Procedures: SCP-016 is to remain within the confines of a five by five by five (5x5x5) meter room at all times, maintained at a temperature not to exceed zero (0) degrees Celsius. SCP-016 itself is to remain in the petri dish in the containment cube at all times unless directed otherwise by Level 4 or O5 personnel. Full documentation of experimentation with SCP-016 must be submitted before and after samples and duplicates of SCP-016 may be taken. Failure to follow these procedures will result in termination or reassignment as Class-D Personnel. Only authorized personnel may be permitted to obtain samples of and experiment with SCP-016 under BC-L5 containment conditions. If an outbreak does occur despite following the aforementioned procedures, directive base personnel are to implement a Code Sigma lockdown and containment plan. Infected personnel are to be terminated on site by security forces wearing standard Mission Oriented Protective Posture (MOPP) anti-biological and anti-chemical equipment. Should the infection not be contained after 48 hours, the on-site nuclear device is to be detonated. Remaining personnel are not to be evacuated under any circumstances.  SCP-016 has been shown to survive for up to six (6) hours on hard surfaces, and up to several minutes in air. High intensity ultraviolet light and high concentrations of ortho-phthalaldehyde solution have been demonstrated to be effective in disinfecting non-organic surfaces. Description: SCP-016 is a blood-borne pathogen recovered from a mine worker in █████ who injured himself while working in a deep coal seam. Said wound became contaminated with coal dust from the mine, possibly infecting the worker with dormant spores. Over the next several days, SCP-016 proceeded to infect the remaining employees at the mining camp, as well as the CDC crisis team dispatched to deal with the epidemic. Foundation personnel then took over the investigation and terminated all affected personnel. Patient Zero was brought into captivity, and the mine shaft was collapsed by an explosive device. SCP-016 has an incubation period ranging from 24 hours to two (2) years, depending on the presence and number of other human hosts in the area. First symptoms resemble the common cold, and include itchy eyes, runny nose, coughing, and bodily aches. Phase two begins in 48 hours, and consists of a controlled form of hemorrhagic fever, as the organism causes a small amount of blood to become aspirated in the lungs, creating an aerosol effect. During phase three, the host "crashes and bleeds out," bleeding profusely from every bodily orifice, including the nose, tear ducts, anus, skin pores, mouth, urethra, and (in case of females) vagina. Blood pressure skyrockets during the final stage: hosts have been observed projectile vomiting blood to distances of over five (5) meters. Should the host survive this near-total exsanguination, the pathogen will become dormant once more, returning to incubation phase. What distinguishes SCP-016 from other strains of hemorrhagic fever such as Ebola and Marburg is its unusual response to high stress. Should the subject undergo a high-stress situation (such as a life-threatening crisis), the organism will change its survival tactic from rapid reproduction to the rewriting of the host's DNA and stimulation of rapid cell division. Major physiological changes occur within the first 24 hours, with complete bodily reconstruction occurring within two (2) weeks time. Most hosts do not survive the process due to the heavy demands made on the body. An interesting side effect of the transformation is an increased aggressive urge. It is believed that this may be an attempt to maximize the spread of the virus in a manner similar to rabies. On another note, subjects who undergo bodily transformation no longer appear to exhibit SCP-016's hemorrhagic properties: however, subjects infected by transformed hosts will still undergo the normal SCP-016 infection process.`
  },
  {
    id: "scp16",
    text: `Item #: SCP-017 Object Class: Keter Special Containment Procedures: SCP-017 is contained in an acrylic glass cage, 100 cm by 50 cm by 50 cm, centrally suspended in a concrete room measuring 6 m by 6 m by 4 m. Attached to the walls, ceiling, and floor of the room are high-intensity arc lamp spotlights pointed directly at the acrylic cage, to ensure that SCP-017 is constantly exposed to light from every angle. Personnel assigned to the SCP-017 control room are to monitor the functionality of the spotlights and the emergency generator system and call for maintenance immediately upon knowledge of a burnt-out lamp or an issue with the generator. The only circumstance under which personnel are allowed entrance is to replace lamps. Personnel entering the room are required to wear the designated full-body reflective suits, and must be cautioned not to step in front of functional spotlights. Description: SCP-017 is a humanoid figure approximately 80 centimeters in height, anatomically similar to a small child, but with no discernible identifying features. SCP-017 seems to be composed of a shadowy, smoke-like shroud. No attempt to find any object beneath the shroud has been successful, but the possibility has not been ruled out. SCP-017's reaction to shadows cast upon it is immediate and swift. SCP-017 leaps at the object casting the shadow and completely encloses it in its shroud, whereupon it returns to its normal size, leaving no trace of the object behind.`
  },
  {
    id: "scp17",
    text: `Item #: SCP-018 Object Class: Euclid Special Containment Procedures: SCP-018 is to be contained in its specialty metal restraint inside of a 1 m by 1 m by 1 m sealed box lined with heavy synthetic padding. The sealed box is then submerged in the center of the 10 m by 10 m by 10 m polyethylene holding tank. If SCP-018 is to break free from the holding box, the polyethylene-based 'goo' will slow down kinetic activity enough for proper retrieval by containment personnel. Personnel entering SCP-018's holding chamber are to wear specialized plating (found inside of SCP-018 Observation), and a breathing apparatus before being lowered into the polyethylene tank. If SCP-018 is loose outside of the polyethylene tank, personnel are advised to secure themselves in a separate room and close doorways or hatches to isolate SCP-018 until containment teams arrive. Description: SCP-018 has the appearance of a Super Ball made by the Wham-O company in 1969. It is six (6) centimeters in diameter and coloured red. Found when the ██████████ company was hired to clean out a warehouse that had Wham-O merchandise in it, SCP-018 was noted to be able to bounce with extreme height. At first thought to be a pleasant child's toy, SCP-018 was able to bounce with over two hundred percent (200%) efficiency (that is, if dropped one (1) meter, it would bounce two (2), then four (4), then eight (8), then sixteen (16)). The ball soon became a dangerous projectile, reaching speeds estimated at over 100 km/h and damaging property and injuring five (5) in the city of █████████████. It came to a rest after several days in the nearby lake of ████████, and was retrieved by SCP personnel. Due to the speed of the object, and the total surprise by its victims, no cover-up story was required or initiated.`
  },
  {
    id: "scp18",
    text: `Item #: SCP-019 Object Class: Keter Special Containment Procedures: SCP-019 is to be kept on a wide grate in a 3 m x 3 m x 4 m reinforced concrete room, installed with an incinerator. Room is to be kept at zero (0) degrees Celsius when incinerator is not activated. An observation chamber separated by a plate glass window is to be used for constant observation of SCP-019, and if/when specimens of SCP-019-2 are observed, the incinerator is to be activated. In the event of an outbreak of SCP-019-2, ordinary firearms are successful in terminating individual specimens, although in the case of a swarm-level outbreak, flamethrowers may be more effective. SCP-019 should be kept in a vertical position at all times. Description: SCP-019 appears to be a very large ceramic vase, 1.8 m in diameter at the mouth and 2.4 m high. Style and decoration indicate it was created in Classical Greece, although conclusive dating is impossible, as the surface is entirely unbreakable by any known means. If a successful method is discovered, SCP-019 is to be destroyed with prejudice. Periodically, entities emerge from SCP-019. Collectively, these are known as SCP-019-2. The entities vary in many aspects, but tend to be small, vaguely humanoid (though they may have animaloid features), and extremely hostile. They often choose to attack with teeth or claws. Although fairly delicate (also, surprisingly, flammable), they are reasonably strong and pose a considerable threat in large numbers. When kept at zero (0) degrees Celsius and totally at rest, entities will emerge from SCP-019 at a rate of approximately one (1) entity per hour. The following traits are known to affect SCP-019-2's manifestation rate: -Movement of SCP-019 -Threat to SCP-019 -Extreme temperature highs and lows -Sudden shift in surrounding environment -Introduction of objects or organisms to the inside of SCP-019 (known to cause a “flood” reaction) Traits that may or may not influence SCP-019-2's manifestation rate: -Presence of human life near SCP-019 -Current weather patterns -Specific individuals near SCP-019 (some individuals seem to affect SCP-019-2's emergence rate more drastically than others) In addition, tipping or tilting SCP-019 will create a reaction as though it was previously “filled” with SCP-019-2 specimens, although viewers looking into SCP-019 from above will merely observe a dark hole. Due to the production rates of SCP-019-2 when the object is disturbed, measurement of the internal cavity is difficult, but it is suspected to be inconsistent with outside measurements.`
  },
  {
    id: "scp19",
    text: `Item #: SCP-020 Object Class: Keter Special Containment Procedures: Samples of SCP-020 are stored in a series of sealed cultivation chambers inside a sealed containment room at Biological Research Area-12 which is accessible only via airlock. Nutrients are administered via automated robotic systems, as the cultivation chamber must remain sealed at all times. Hermetically sealed video surveillance cameras are installed within the containment room, and must be checked daily for integrity. Any personnel entering the containment room must wear Biosafety Level 5 equipment including rebreathers and undergo full anti-fungal disinfection upon exiting. Description: SCP-020 is a fast-spreading fungal organism that is capable of affecting the senses and behavior of living creatures, including humans. Samples of SCP-020 exhibit an unknown effect that renders them effectively invisible to direct observation, even when under a microscope. SCP-020 is only visible to humans when viewed through photographic or video surveillance. Once SCP-020 forms a colony, usually within a human residence, it will produce spores that affect the behavior of humans around it. Affected subjects will increase the heat and humidity within their homes to create an environment more suitable to the growth of SCP-020. Affected subjects also become more sociable in many cases, and often invite acquaintances to their homes to further spread the organism. As the spores and mold colonies are invisible to affected subjects, the mold may sometimes grow directly on living subjects. As the spores and colonies within a home approach critical concentration, the health of affected human subjects will rapidly deteriorate, resulting in death. Further spread of the mold may occur as the bodies of any deceased subjects are encountered by emergency responders and health care agents, as well as transportation of the bodies to local morgues. SCP-020 was first encountered in [REDACTED], where an undercover SCP agent noted dramatic personality changes in personnel working at the local hospital. Upon investigation by a containment team, it was discovered that almost ███ civilians had been infected, as well as a majority of the town. The civilian population was terminated, and the town incinerated under cover of a local flash forest fire. To date, over 12 outbreaks of SCP-020 have been reported. Investigations are currently underway to determine the source of these outbreaks and possible preventative measures.`
  },
  {
    id: `scp20`,
    text: `Item #: SCP-021 Object Class: Safe Special Containment Procedures: SCP-021 is an obligate parasite of the human body. Containment, therefore, is no more difficult than containing an adult human; most cells will suffice. Item is currently housed in detention cell 217-A on subject D-139. Only class D personnel are eligible for hosting SCP-021. As long as a given subject survives as a host for SCP-021, he is exempt from normal monthly terminations of class D personnel. Description: SCP-021 takes the form of a large and elaborate tattoo of a serpentine dragon in the oriental style, covering approximately 0.8 square meters of skin. This tattoo is fully animate within the confines of its host's skin and behaves largely as a normal animal would, albeit in only two dimensions. The tattoo's movement causes constant pain to its host, comparable and similar in character to simultaneous tattooing and tattoo removal on a large scale. The organism tends to spend most of its time on and near the torso. SCP-021 displays no intelligence beyond a basic pattern of feeding and locomotion, although actually measuring the intelligence of a two-dimensional life-form has proven impossible thus far. SCP-021 appears to feed exclusively on pigments in the host's skin. This can include melanin, in which case the subject appears to be suffering from vitiligo. However, the organism shows a marked preference for other tattoos and will seek out and devour these before resorting to natural pigments. It should be noted that the feeding process itself, beyond the sensation of movement, is painless; normal tattoo ink simply vanishes as it is 'eaten'. The organism maintains a constant size, and no excretions have been observed. The organism is capable of clearing over 0.6 square meters of skin per hour. One may 'feed' SCP-021 by (quickly) tattooing fruits or small animals on the host. SCP-021 can be transferred between hosts by various forms of physical contact, with differing rates of success. In the case of successful transfer, the organism simply 'swims' from one person to the other. Sexual intercourse appears to be the most reliable method of transfer, with a 93% rate of transmission. However, due to the severe pain involved, this is less than ideal. Contact between two open wounds is generally preferable. Transfer is more complicated in deceased subjects, though not unreasonably so; the organism suffers no ill effects from the death of its host and continues to consume pigments. Transmission between species is unknown; previous tests suggest it to be either impossible or exceedingly rare. SCP-021 does confer some benefits to its host. The tattoo has been proven to accelerate the release and re-uptake of epinephrine and decrease lactic acid buildup, providing boosts of strength, confidence, and pain tolerance in stressful situations and reducing the usual after-effects of weakness and fatigue. In addition, the tattoo seems to have some beneficial effect on the host's immune system. Aggression profiles in hosts are generally higher than average, though whether this is a direct effect of the tattoo or simply a reaction to the constant pain remains to be seen. The symbiotic relationship is usually limited by how long the host can tolerate such pain in everyday life. This has culminated in suicide in a number of subjects. In rare cases, hosts have also fallen victim to fatal skin infections. SCP-021's origins and nature are a mystery. Tracing its transmission from host to host is hardly feasible within the confines of secrecy, and the organism could well be hundreds of years old, if not more. Nevertheless, SCP-021's captivity is one of the longest in the Foundation's history at nearly [DATA EXPUNGED] years, and has been very educational thus far. Current research focuses mainly on observing the characteristics of life in two dimensions.`
  },
  {
    id: "scp21",
    text: `Item #: SCP-022 Object Class: Euclid Special Containment Procedures: A vault door has been installed following Incident 022-827 to seal SCP-022. It is to remain locked at all times, with the sole exception being the appearance of an instance of SCP-022-1. The original door to SCP-022 was destroyed during Incident 022-827, with attempts at replacement being met with failure. Security cameras have been installed to monitor for instances of SCP-022-1. In the event that an instance of SCP-022-1 appears, automated systems should incinerate it the moment it leaves SCP-022. At this point the vault door may be unlocked to admit cleanup crews. Should the automated systems fail to destroy the instance of SCP-022-1, response teams are cleared to enter and neutralize it. Under no circumstances may any living human enter SCP-022 except at the order of Class-4 personnel for testing purposes. Class-4 personnel may also order instances of SCP-022-1 to be captured and held; however, they may not be removed from SCP-022 containment facilities. Description: SCP-022 is a morgue in the basement of [REDACTED] Hospital in Great Britain. Until 198█, there were no reported anomalous occurrences within the morgue. Reports of strange activity were first received in November of 198█. The area was soon quarantined by the Foundation, with an official story being released that the entire building had been condemned. The reason for the sudden manifestation of its strange properties remains under investigation. Periodically, a random drawer within the morgue will open to reveal a cadaver under a covered sheet. After approximately six minutes open, the cadaver will animate and attempt to leave the morgue. At this point, the cadaver is given the designation SCP-022-1. In some cases the cadaver will be too damaged or decomposed to successfully exit SCP-022 or even rise from the table it lies on. In this case, SCP-022-1 will typically struggle and twitch on the table until expiration occurs. Should an instance of SCP-022-1 expire while remaining on the table, the table slides back into the drawer, which then shuts. Reports indicate that the scent of burnt tissue is evident immediately following such an event. The energy source that sustains instances of SCP-022-1 is currently unknown. Instances do not breathe, eat, or sleep, and their bodies produce no heat. Analysis of SCP-022-1 following expiration has discovered no abnormal organs or chemicals present; they appear to be fully human cadavers. Instances also possess physical strength that exceeds that of normal humans. Though direct testing has proven problematic, researchers estimate the strength increase to be approximately 500 N (112 lb) of lifting force greater than what one would expect of a human body sharing a similar condition. Analysis is underway to determine if this effect is connected to the unknown power source or if it is an entirely separate phenomenon. When body parts are severed from SCP-022-1, the portion with the greatest mass retains its effects; all other pieces become inert. Destruction of the head or brain does not neutralize SCP-022-1; instead, the lower torso and limbs remain animate. Complete tissue destruction appears to be the only method of successfully terminating instances of SCP-022-1. Left alone, instances of SCP-022-1 will simply expire; all motion ceases and they appear to become normal cadavers again. The amount of time this takes depends on how damaged the body is and the rate of decomposition, and can take anywhere between two days and three weeks. Investigation has revealed that the bodies acting as SCP-022-1 match the description of cadavers reported to have been stolen from morgues across the country. The mechanism for this transfer is currently being researched. Adding any new matter to SCP-022 has thus far proved impossible. Any object that enters SCP-022 disappears shortly after passing through the door, leaving no trace. This includes inanimate objects and biological specimens. See Addendum 022-001 and 022-002. So long as an instance of SCP-022-1 possesses a functioning mouth, tongue, and trachea, it is able to communicate fully with researchers. See Interview Log 022-751 for details.`
  },
  {
    id: "scp22",
    text: `Item #: SCP-023 Object Class: Euclid Special Containment Procedures: <s>SCP-023 is to be contained in a standard 5 x 5 m Containment Unit.</s> SCP-023 is to be contained in a walled-off intersection of two (2) corridors at Site ██, with at least three (3) meters of space in each direction, and false doors at three (3) of the four (4) ends, in addition to the real door. Security cameras will be placed and maintained above all four (4) doors. At all times, SCP-023's eye sockets are to be filled with spherical inserts made of hard rubber. Eye inserts must be replaced as they degrade. Degradation can be monitored by measuring the brightness of the "burning" effect as observed by security footage. Brightness greater than twelve (12) candela requires that the inserts be replaced within twelve (12) hours. Eye inserts are only to be replaced individually, and only after the sun has completely set. Personnel are not to look directly into eye sockets of SCP-023 at any time. Following Incident 023-27 all reflective surfaces, including displays, monitors, and eye-wear of any sort are not permitted within 30 meters of SCP-023's cell. This includes monitors linked to security cameras within its enclosure. Security personnel posted at checkpoints outside both corridors will enforce and adhere to this measure. Experimentation involving SCP-023 has been suspended indefinitely. Description: SCP-023 is a large, sexless shaggy canine (1.5 meters at the shoulder) with black fur. <s>It has bright orange-red eyes and prominent teeth</s> (see Incident Report 023-26). Any time an individual makes eye contact with SCP-023, either that person or a member of their immediate family will die exactly one (1) year after eye contact is broken. Research into the method of selection is incomplete due to a moratorium on experiments, but the available data suggests that having a larger immediate family lessens the chance of the individual making eye contact themselves dying, and neither a pattern nor a preference in victim types have been found. This may indicate that SCP-023's victim is designated entirely at random, but it is unknown whether this selection occurs at the beginning or at the end of the one-year time period. Attempts to terminate an individual who has made eye contact with SCP-023 and their entire immediate family before the one-year time period has ended [DATA EXPUNGED]. Autopsies of individuals killed by SCP-023's effect show that, while outwardly appearing unharmed, their remains have been 'filled in' with highly compacted ash, including but not limited to all organ systems and the circulatory system. Muscle tissue, bones, and brain tissue universally show signs of exposure to temperatures above ██°C. If not contained in a setting that at least superficially resembles a "crossroads", SCP-023 will phase through walls to get to the nearest suitable location, incinerating all materials it passes through. SCP-023 was first brought to the Foundation's attention when it attacked a church in ███████ while it was in session, killing █ civilians directly and [REDACTED] as a result of eye contact. Following retrieval of SCP-023, Class-B amnestics were administered to all witnesses and surviving victims. The incident was covered up as a case of arson.`
  },
  {
    id: "scp23",
    text: `Item #: SCP-024 Object Class: Euclid Special Containment Procedures: Due to its nature, SCP-024 cannot be moved to a secure location so security measures must be placed on-site. To conceal its location, five (5) identical-looking replicas have been erected around SCP-024. A tight security perimeter must be maintained around SCP-024's compound at all times, with separate security teams guarding SCP-024 and its replicas. None of the security teams, except for team leaders, will be informed of the location of SCP-024. SCP-024 must be secured with magnetically sealed blast doors and reinforced, armored walls to prevent unauthorized entry. Under no circumstances can any security or research personnel enter SCP-024. Only D-Class personnel are allowed entry and strictly for research purposes only. All researchers are to observe and experiment with SCP-024 from the remote observation lab. Any personnel attempting to leave the remote observation lab or enter SCP-024 without prior approval from a Level 4 researcher must be immediately apprehended, with termination authorized. Should containment be breached, or SCP-024's true nature compromised, then the entire compound must be destroyed via specialized demolition charges planted throughout the compound. Description: SCP-024 is an abandoned sound stage that was once owned by █████████. However, SCP-024 itself had been abandoned since 19██, and it is unknown whether its special properties manifested before or after its abandonment. SCP-024 is located in the heart of █████████, ██████████, and was initially discovered when a group of teenage youths broke into the abandoned compound. The testimony of the lone "winner" when she turned herself in to the police was enough to have Foundation assets mobilize to contain SCP-024. Upon entering SCP-024, visitors are immediately greeted by an anonymous announcer, who communicates via intercom and is able to hear and comprehend the voices of people within SCP-024. The announcer will inform the "contestants" that they are about to take part in a game show in which the winners will win fabulous prizes, but will also warn that the game will be extremely hazardous, and that the losers will never leave SCP-024. It is at this point the announcer presents the choice of whether to stay or leave SCP-024. Contestants who accept will continue to participate in the game while those who decline are immediately expelled from SCP-024. Contestants that win the game or decline to participate may never enter SCP-024 again, as entry is denied by an impenetrable, invisible barrier. It is then that the contestants are led to the actual game. The style, composition, and appearance of the game always changes in every individual play-through, but the game is always centered around a long, elaborate obstacle course that the contestants must navigate through. The rules also vary. Some play-throughs may only allow a single winner, while others encourage the creation of teams to win the game. More often than not, the obstacles seen in these games range from incredibly benign to extremely hazardous and life-threatening. As the contestants attempt to negotiate the course, the announcer will continuously update their status and actively participate in the game, often giving advice, conversing with contestants, and adding new rules. As the game progresses, the obstacles become significantly more dangerous and difficult to overcome, and it is not surprising to have the entire pool of contestants succumb to the rigors of the obstacle course. If such an event happens, the announcer will express sadness at the lack of a winner and SCP-024 will shut down, resetting only when a new batch of contestants enter. Any attempts to "break the rules", such as assaulting other contestants and deliberately bypassing obstacles, are met by extreme violence. The announcer will call out the offending contestant, who will be quickly and forcefully ejected from the course by "studio guardians". These studio guardians will immediately materialize within SCP-024 when called upon by the announcer and disappear when not needed. The contestant will never be seen again. When a winner is declared, he/she will receive a random grand prize. Any contestants that have survived the course but failed to win are immediately declared losers by the announcer. The lights will switch off, and the winner will immediately appear outside of SCP-024 with his/her prize while the losers completely disappear. However, the most mysterious aspect of SCP-024 is that after every game, a VHS tape or DVD will appear in the mailbox outside of SCP-024's main entrance. This recording is a complete record of the entire game that was previously played, even though winners have claimed that they had never seen any cameras or recording devices inside SCP-024. Also, more strangely, a live studio audience can be seen in the background cheering on the contestants. Again, winners have claimed not to have seen a live studio audience while inside SCP-024.`
  },
  {
    id: "scp24",
    text: `Item #: SCP-025 Object Class: Safe Special Containment Procedures: SCP-025 is only to be opened during testing, as is the room in which SCP-025 is stored. Entry codes are to be given only to authorized research and security personnel. No other containment protocols required. Description: SCP-025 is a wooden wardrobe measuring 0.97 m x 0.62 m x 1.95 m, full of clothing dating from a number of time periods. Articles contained within the chest, collectively named SCP-025-1, match with styles of decades from the 1920s to the present. The apparel from each time frame varies with regard to style; for example, a polyester striped shirt and pair of charcoal suit pants both correspond with general styles of the 1970s. The only unifying aspect of every article contained in SCP-025 is that each one is in poor condition; moths have eaten at much of the collection, and tears and runs are not uncommon. When any item from SCP-025 is put on, the wearer is observed either to die or suffer an injury within 24 hours. The cause of death or injury in these instances is invariably linked to the aforementioned flaws in the clothing, but only ever appears to be an unrelated incident. Wearing a glove with a fingertip cut off may result in the loss of the fingertip through a simple kitchen accident like chopping onions; similarly, a subject wearing a poncho with a sleeve missing will somehow cause the loss of the uncovered arm, be it an attack by a wild animal or a vehicular accident that necessitates the amputation of the limb. If placed in a sealed, unfurnished enclosure while wearing an item from the chest, the wearer will either seemingly spontaneously contract a flesh-eating disease that begins in the areas not covered by the clothing, or suffer the failure of an organ located beneath an imperfection in the article. Diseases arising from such incidents may or may not be contagious; no study has been successfully undertaken due to the speed at which the strains observed run their course. Recommended that, if possible, samples of the disease be taken to lab for possible weaponization. Following is an abridged testing log of SCP-025; more thorough testing will accompany the declassification of the document in its entirety.`
  },
  {
    id: "scp25",
    text: `Item #: SCP-026 Object Class: Euclid Special Containment Procedures: SCP-026 is to remain securely locked and boarded up at all times when there is no research ongoing. Alarms are set to alert the Foundation in case of entry by civilians or other agencies. Description: SCP-026 is a three (3) story public school building built in ████. It has two (2) wings connected to a central foyer. It was declared condemned in ████ after it was found the floor plan didn't match up to the building's blueprints (see Interview Log 026-01). It came to the Foundation's attention after several disappearances in the area were linked to visits to the abandoned building. <s>The building demonstrates spatial anomalies. Its internal space is much greater than the external surface of the building would allow. Hallways display variable length, while stairways have differing numbers of steps going up or down. The number of rooms off the hallways changes each time they are counted. Attempts to reach the far ends of the hallways have met with failure thus far. Entrance through the fire escapes located at the ends of the hallways leads to doors approximately midway down the length of the halls.</s> EDIT: See Note 026-A There is considerable graffiti on the interior walls of the school. Most appears typical, including gang signs, names, and street art. However, the graffiti fades and reappears, changing location. Writing on chalkboards and bulletin boards changes in a similar fashion. Subjects typically found range from standard school subjects (mathematics, literature, biology), to more esoteric subjects, such as quantum entanglement, ████████, and eugenics. One researcher reported one board detailing information about SCP-████, but photographic evidence showed only a blank slate (See Note 026-B). The phrase "The children used to sing" has appeared multiple times in various places throughout the building, but there is currently no explanation for its significance. A number of unconscious subjects have been found in the building, mostly of high school age, ranging from twelve to eighteen. They are dressed in accordance to the school's dress code, circa ████. Several have been identified as former students or faculty of the school who disappeared after the school shut down (in at least one case, more than ten years after the closure). It is currently unknown how they were transported back into SCP-026. (See Note 026-C) All attempts to wake the subjects while inside the building have failed. On being removed from the grounds of SCP-026, the subjects wake abruptly. They experience a period of confusion, before dying from extremely rapid dehydration, followed by advanced decomposition. No useful intelligence has been recovered from the subjects to date. The inability to wake subjects extends to those who fall asleep on the grounds of SCP-026, though the rapid dehydration only seems to affect those who have been found on the grounds of the school. See Incident Report 026-12.`
  },
  {
    id: "scp26",
    text: `Item #: SCP-027 Object Class: Euclid Special Containment Procedures: The host of SCP-027 (currently subject 027-02) is to be kept in a 5 m x 5 m containment cell with a grated, raised floor connected to a strong vacuum system. All creatures removed from the Subject's containment cell are to be incinerated, except for a small portion to be diverted for analysis and necropsy. The cell is to be cleaned and inspected for structural damage daily. Subject 027-02 must be monitored by at least two personnel at all times. Any unusual behavior or vital signs on the part of the subject or the appearance of any unusual species in the subject’s vicinity must immediately be reported to Level 4 personnel. Security personnel assigned to SCP-027 must be inoculated against all known animal-borne pathogens and must be armed with tranquilizer guns, with standing orders to subdue the subject if the need arises. Until SCP-027 is better understood, no personnel of Level 4 Clearance or higher should approach within 200 m of the Subject. Description: SCP-027 appears to be a phenomenon of unknown source that seems to be tied to one human subject (currently 027-02) at a time. As host to SCP-027, subject 027-02 is constantly surrounded by swarming vermin that are drawn to his location. The subject does not appear able to assert control over these creatures in any way, and is in fact prone to occasional attacks from feral specimens. These creatures have also been known to attack personnel who approach too closely. Wherever the subject goes, an initial swarm of flying insects such as gnats and flies will start to form a cloud around him, usually within two to three minutes. Shortly thereafter, crawling animals (including lice, cockroaches, worms, spiders, [DATA EXPUNGED], mice, and rats) will begin to appear; the longer the subject remains in a location, the more vermin will gather there. When the subject leaves a location, some of these creatures will follow, but most will disperse. SCP-027 has been known to transfer between hosts once, upon the death of the first known host, Subject 027-01 (see Appendix 1 for more information). Since SCP-027 could likely repeat this feat upon the death of Subject 027-02, all high-value personnel should be kept far away from the current host until more about SCP-027 is understood. SCP-027 has also likely transferred between hosts an unknown number of times before containment. Research into potential previous hosts has commenced, with preliminary evidence suggesting that SCP-027 may have existed for at least ███ years. It is not yet known how SCP-027 chooses or attracts animals, or even what SCP-027 exactly is. The previous host never expressed having any sort of communication with a separate conscious entity; analysis of the current host has been inconclusive at best.`
  },
  {
    id: "scp27",
    text: `Item #: SCP-028 Object Class: Safe Special Containment Procedures: No special means are needed to contain at this time, as SCP-028 has not shown any change in size, position or shape during the entire period of its containment, but access must be restricted. Currently, SCP-028 is contained on site (Site █), as SCP-028 is not transportable by any known means. SCP-028 is sealed in a six (6) by six (6) by three (3) meter (twenty (20) by twenty (20) by ten (10) foot) concrete room with a single door, with two (2) armed personnel stationed outside. Only authorized personnel are to be allowed exposure to SCP-028, and extreme care must be taken at all times. While SCP-028 is itself harmless, the effect can be very damaging to the unprepared. (See document EL-028-1125) Description: SCP-028 is located in an abandoned storage yard outside a copper mine in northern Michigan. SCP-028 has no detectable physical presence of any kind, but its effect occurs in a 2.1 meter (7 foot) cube around what is commonly held as the “center” of SCP-028. All forms of scanning and testing in the area of SCP-028 have shown no abnormal readings. Adding or removing objects, or attempting to remove dirt from under SCP-028 has no effect in altering the size or shape of SCP-028’s area of effect, nor the onset or quality of the Effect. Subjects “entering” SCP-028 are, within three (3) to six (6) seconds, struck by total and complete knowledge of a subject. This knowledge is thus far completely random in both size and usefulness, and sometimes goes unnoticed for extended periods of time. More “profound” knowledge generally has a stronger effect, with some cases [EXPUNGED: SEE DOCUMENT EL-028-1125]. This Effect can be experienced multiple times by exiting and re-entering SCP-028, but can result in increasingly strong migraines and dizziness after two (2) exposures. SCP-028 came to the Foundation’s attention after research into news reports of a local miner who submitted a design for a cold-fusion reactor to the US patent office. Mr. ███ reported that it “just came to me, like a bolt outta the blue!” News and subjects were suppressed and contained after discovery of SCP-028, and the reactor designs implemented in the containment of SCP-1995. Subsequent testing of SCP-028 has yielded mixed results.`
  },
  {
    id: "scp28",
    text: `Item #: SCP-029 Object Class: Keter Special Containment Procedures: SCP-029 is to be incarcerated in a Class 5 containment cell. She is to be allowed access to nothing of a physical nature. Her containment cell is to be placed behind a triple airlock, to avoid her escape. As of Incident 029-34a, SCP-029 is no longer to be fed, as she does not appear to need sustenance to survive. There are to be three (3) guards on duty at all times on her cell, and two (2) guards on monitor duty. Floodlights have been installed in the walls of the containment chamber, and are to be on at all times. Once a month the chamber is to be cleaned and checked for defects. Under absolutely no circumstances are any men to encounter SCP-029 in any manner. Any males who do encounter SCP-029 are to be held under Class 3 detention for interviewing before termination. SCP-029 has requested: -A bed (Denied) -A blanket (Denied) -Books (Denied) -Clothes (Denied) As of incident 029-53b, anyone who has potential access to SCP-029 is required to first watch Surveillance Tape 029-Bodeen, as a reminder of threats involved when working with SCP items and SCP-029 in particular. Description: SCP-029 appears to be a pubescent female of Asiatic-Indian descent. She appears to suffer from alopecia universalis. Over 80% of her pigmentation is a true black, while the rest of her skin has a complete lack of melanin, to the point of albinism. Her eyes are also a dark black in color. SCP-029 has severe homicidal tendencies and has displayed a remarkable ability to use any item as a weapon. However, she has a severe compulsion against shedding blood, preferring instead to strangle her victims. SCP-029 has demonstrated dexterity and physical reactions four (4) times as fast as the average human. SCP-029 has also displayed extensive resistance to damage of all forms. Both of these extra human abilities are greatly hampered in the presences of bright or direct light, natural or artificial. In addition, any males who come within the presence of SCP-029, an area defined by her current perception, find themselves pliant to her will. Such males become willing to kill or even die for SCP-029. SCP-029 refers to herself as ████████, which roughly translates to 'Daughter of Darkness,' 'Daughter of Shadows,' or 'Daughter of Night.' Interviews with SCP-029 have proven difficult to conduct, due to SCP-029's constant attempts to kill or convert all who speak with her. Over her years of captivity, the black patches on her skin have increased in size. SCP-029 was first brought to the Foundation's attention by an Agent working in rural India. An attempt on his life led him to a small cult of men who claimed to be 'Thuggees,' in service to the Daughter. Several weeks of investigation proved that they believed the world to be in the last years of the 'Kali Yuga,' and that by sacrificing one million lives to the Daughter of Darkness, they could raise their Goddess and end the world. They also believed that only sacrifices performed through strangulation added to this tally. Events led the agent to their mountain fortress, where he discovered SCP-029. After the loss of said Agent, [DATA EXPUNGED], which ended in our acquisition of SCP-029.`
  },
  {
    id: "scp29",
    text: `Item #: SCP-030 Object Class: Safe Special Containment Procedures: SCP-030 is to be held at Site-17 within a modified humanoid containment cell. Minor adaptations to accommodate its stature, such as an appropriately-scaled workspace and chair, are to be included. Lighting within the cell may be altered upon request of SCP-030 to a maximum of 2000 lumens via a simple dimmer switch. Should the need to render SCP-030 inert arise, staff may extinguish the lighting from the exterior switch and draw blackout curtains as necessary. Standard night-vision equipment is available for observation of SCP-030 in its inert state. SCP-030 may request materials for personal research every 90 days. All previously requested materials are to be collected and destroyed prior to delivery of new materials. All materials are to be evaluated and screened by both research and security staff. SCP-030 is to be denied access to any modern scientific journals or texts, and fiction is to be restricted to works produced no later than 1623 CE to preserve the integrity of its innate knowledge. Staff wishing to consult with SCP-030 in writing are to place a formal request (document #030-RS/B) with the supervising researcher on duty. All correspondence is to be retained. Staff wishing to consult with SCP-030 in person are to submit a formal request to site management (documents 030-RP/A, 17-030/A) at least 30 days prior to their preferred consultation date. All consultations are to be recorded and retained. Senior research staff may request SCP-030 be temporarily removed from its containment for a maximum of one hour to provide observational insight into non-restricted materials or events within Site-17. Under no circumstances is SCP-030 to leave the confines of Site-17. Requests must be presented in person to site management and security staff at least 30 days prior to their preferred observational release date. All observational release events are to be recorded and retained. SCP-030 has been equipped with a tracking device (inventory control code #030-17-1) so its location within Site-17 may be determined precisely at any time. Description: SCP-030 appears as a hairless, genderless, grey-toned human 71 centimeters (28 inches) in height and weighing 12.70 kilograms (two British stone in antiquated measure). Its solid blue eyes lack discernible irises or pupils, and resemble small cut sapphires. SCP-030 possesses an androgynous voice with a pronounced English accent not currently identifiable as specific to any modern region. It is able to converse, read and write in Ancient Greek, Latin, Italian, English, Spanish and Portuguese as well as two (2) additional languages that have not yet been identified despite SCP-030's insistence that they should be "common knowledge." SCP-030 has also demonstrated knowledge of physics, chemistry, astronomy, mathematics and horticulture roughly equivalent to that of a 17th-century CE academic. In addition, SCP-030 has demonstrated knowledge on these topics along research lines that do not appear in the historical record. These alternative or entirely unknown approaches to research in the natural sciences are one source of SCP-030's utility in consultation. SCP-030 remains active while a 15-lumen source of light or greater is within 1.5 meters (5 feet). In the absence of light, SCP-030 becomes inert, apparently losing consciousness and showing no outward signs of life. Within five to ten (5-10) seconds of being re-exposed to light, SCP-030 becomes active once more, appearing to come out of a light slumber no matter how long the period of inactivity has been. SCP-030 does not appear to require these periods of inactivity as a human would require sleep, and has expressed a desire to remain active as often as possible. Biopsy analysis of SCP-030 remains inconclusive. While clays native to the English counties of Kent, Surrey, and Greater London make up the majority of its structure, traces of mandrake (Mandragora officinarum), lye, mercury, and human blood have been found in each sample taken. SCP-030 has expressed that a full exploratory surgery to determine its workings would potentially end its existence. Samples removed from SCP-030 do not regenerate, and sampling is currently discontinued to preserve its integrity. Although SCP-030 can be damaged, it does not appear to feel pain, and will simply re-mold any portion of its anatomy that experiences deformation. Notably, SCP-030 cannot be molded directly by human hands, though any number of tools may be used to alter its surface. SCP-030 does not respirate, requires no sustenance, and produces no waste, although it does infrequently request a bath. SCP-030 refers to itself as "Ariel" and regularly requests that staff do the same. Questions regarding how SCP-030 was created and by whom are routinely answered with the seemingly rote statement: "I have been asked to forget that bit of information. Terribly sorry." SCP-030 delivers this response in the same tone and cadence each time any question regarding its origins or creator are presented. Given its composition and location of origin, a link to the Alchemists of Alagadda is suspected. SCP-030 was discovered 6/12/████ during a mandatory archaeological survey within London's Mortlake District pending construction of a car park. It was buried approximately 2.7 meters (9 feet) below street level, contained in a small stone sarcophagus. The sarcophagus bore no markings and was assumed to be that of a deceased infant as additional graves were discovered in the survey area. The sarcophagus lid was shattered during the excavation, exposing SCP-030 to daylight. Upon being struck by the sun's rays, SCP-030 roused from its inert state to one of mild activity within a few seconds, stating, "Good afternoon" to the assembled construction team. A member of the Foundation's Greater London recon force was summoned within hours and took the specimen into custody without resistance. The limited number of witnesses were given amnestics and released.`
  },
  {
    id: "scp30",
    text: `Item #: SCP-031 Object Class: Euclid Special Containment Procedures: SCP-031 is currently contained in the Ryugyong Hotel, located in the city of Pyongyang, Democratic People's Republic of Korea1. As the nation it is located in is currently governed by an authoritarian regime with near-complete control of state and national media, the possibility of information regarding SCP-031 being released to the world at large is minimal. As said regime is also cooperating with the Foundation in order to maintain physical security of the site, Foundation personnel are instructed to comply with their directives, so long as they do not interfere with larger Foundation aims. The structure of the Ryugyong Hotel serves to contain SCP-031 within the central spire. Three secondary spires (located at 120-degree intervals from the central pyramid) house Type-9 Heaven's Blade Restriction Systems2 calibrated to focus a disruptive energy field towards the central spire. Although unable to prevent physical escape of SCP-031, the system serves to prevent SCP-031's psychic energies from escaping the structure and affecting off-site personnel. Reclamation efforts of the hotel are currently underway, with local government forces utilizing hazmat-suited personnel armed with flame projectors and chemical sprayers to decontaminate areas affected by SCP-031. However, due to the slow pace of progress and SCP-031's defensive capabilities, reclamation efforts are drastically behind schedule.3 Personnel who become affected by SCP-031's psychic abilities are to be terminated immediately to prevent their bio-matter from becoming incorporated into its physical matrix. Description: SCP-031 is an amorphous organism with a mass of over 7,500 kg that has infiltrated the ductwork and maintenance infrastructure of the building. Tendrils emerging from SCP-031's central mass have spread through the hotel's plumbing and ductwork to all 105 floors of the building. At its peak, over 75% of the hotel's 3,000 rooms were contaminated by SCP-031. Reclamation efforts have destroyed ██% of the initial infestation, but over ███ rooms remain affected by SCP-031. SCP-031 tendrils terminate in a pod-like structure (sporocarp) consisting of an ovoid structure approximately two meters in length, with multiple cilia-like structures branching off of the main body. On some occasions, subjects in the presence of an SCP-031 sporocarp will instead perceive it as an individual the subject had a close emotional connection to in their past. The SCP-031 sporocarp will metamorphose into the shape of the person perceived, and attempt to persuade the subject to remain with them for an extended period of time. The SCP-031 sporocarp will next attempt to make physical contact with the targeted individual with their cilia-like structures. Digestive juices will be injected into the subject's body, and their flesh will be consumed and incorporated into SCP-031's body mass. In the meantime, a secondary flagellum will engulf the subject's cranium and brain, replacing the blood vessels with its own tendrils, which will maintain life support of the affected brain by some yet-undiscovered means. The tendrils will decerebrate the subject and transport the subject's cranium back through the building's ductwork where it is incorporated into the central mass. Footage taken through surveillance drones indicate that there are currently █,███ crainia in the network of tendrils attached to SCP-031's central mass. By all indications, the brains contained within are still alive, and may be conscious.`
  },
  {
    id: "scp31",
    text: `Item #: SCP-032 Object Class: Euclid Special Containment Procedures: SCP-032 is to be housed in Automated Containment Unit 535/15. Direct contact with SCP-032 is to be restricted to research-relevant tasks only. Interviews, if deemed necessary, are to be carried out using the Unit's remote communication array. While SCP-032's presence is not directly harmful to the human body, exposure to it is to be limited to periods of 12 hours or less due to its adverse effects on most beneficial microorganisms. SCP-032 is not to be exposed to any biological material not refined or otherwise tempered by humanity, with an emphasis on non-human living entities. For full list of classifications, see Document-032-RCL. SCP-032 neither requires nor requested substances or other forms of comfort. Description: SCP-032 is a Type-F (imperfect external resemblance, internally inconsistent) human simulacrum of currently unknown origins. It is composed of an outer shell of pigmented silicone (5.5 mm thick), and various plastic fiber polymers, with the outward appearance of a Caucasian woman nearing the third decade of life. SCP-032's interior is composed entirely of liquid refined oil, lacking any skeletal or muscle structure. Despite this, SCP-032 is capable of locomotion and speech. SCP-032 is capable of maintaining the illusion of humanity at a moderate distance, but becomes unconvincing at a closer range, causing mild discomfort in most observers. This effect has been deemed non-anomalous. Despite apparently possessing fully-realized cognitive abilities, SCP-032 claims that it is not sapient, acting only as an intermediary instrument of its creators. The Foundation has not been able to verify or refute this claim as of yet. SCP-032 possesses extreme adverse effects to any biological entity in its close vicinity not created, willfully influenced, manipulated by or similarly relating to humanity. While the exact nature of these effects varies, SCP-032's presence inevitably causes severe and irreparable damage to the ability of any living organism to exchange and/or use energy: wild flora loses its ability to photosynthesize or otherwise produce or consume energy, fauna the use of its respiratory and digestive systems, etc. This applies to microorganisms as well, though SCP-032's effects seem to favor damage to their reproductive systems instead. It is hypothesized that the symbiotic relation some microorganisms have to humanity is the reason for this discrepancy. SCP-032 was discovered sitting on the doorstep of the inner compound of Foundation Site-██ near ██████████, Slovakia. When questioned by Foundation security personnel, SCP-032 explained its anomalous effects and claimed it was there 'to be stored'. Surveillance footage show no record of the time of its arrival, and it is not yet known how SCP-032 came to know Site-██'s location or approach it without being spotted. When asked for its reason for seeking Foundation custody, SCP-032 replied that it was there at the command of its creators, seeking 'indefinite storage, until claimed'.`
  },
  {
    id: "scp32",
    text: `Item #: SCP-033 Object Class: Euclid Special Containment Procedures: SCP-033 should be inscribed on any single sheet of irregularly-shaped and hand-crafted paper, papyrus, canvas or vellum when not involved in active observation or study. The dimensions of the paper-like product should have no parallel borders, no right angles, and no side's length should be equal to any other (033-Safe dimensions). When contained in this manner, the paper-like product should be secured in a locked non-combination storage vault at least 30 meters from any computing or recording device. Logs for check-out or check-in of SCP-033 should be filled out at the minimum safe distance of 30 meters to avoid possible contamination of the paper product or electronic device the log is kept in. When removed for study, SCP-033 can be copied to a white/chalkboard with 033-Safe dimensions by Class D staff. Upon transfer to the white/chalkboard, the paper-like product that had contained SCP-033 should be incinerated. Observation and study should take place in a secured conference room at least 30 meters from any computing or recording device for the maximum 2560 second viewing window. All observations or notes should be made on 033-Safe materials. Under no circumstances should any notes regarding SCP-033 leave the storage facility or be input into a computing or recording device. At precisely 2000 seconds of viewing, research must stop and SCP-033 should be transferred to a new 033-Safe paper-like product and returned to storage by Class D staff. The white/chalkboard utilized in research must be incinerated as soon as possible after the transfer is complete, regardless of whether SCP-033 has faded "naturally" from its surface at 2560 seconds. Whether 033-Safe procedures halt or merely slow the deleterious effects of SCP-033 is unknown. It is theorized the irregular borders and hand-crafting by mathematically unpredictable humans somehow disrupt the logic which allows SCP-033 to function. Description: SCP-033 appears as a field of complex mathematical symbols ranging from simple layman-identifiable representations to those only interpretable by highly-trained mathematicians. The "sum" of the symbols is equal to a previously unknown integer (designated Theta Prime by Prof. Hutchinson) of intermediate value between █ and █. As all modern mathematical calculations are performed lacking the knowledge or use of SCP-033, its introduction into any system organized without it begins eroding the numerical and eventually structural integrity of said system. This effect extends to SCP-033's transfer to any paper-like (defined as paper, vellum, papyrus, canvas) surface not possessing 033-Safe dimensions or any computing or recording device it is input into. If inscribed on any other material, SCP-033 fades into unintelligibility in precisely 2560 seconds. In addition, SCP-033 has shown an ability to "leap" from an 033-Safe material to a manufactured or electronic material which it can destabilize in at least one (1) instance (Incident report 033-D), requiring the institution of a 30 meter safe distance for electronic devices and paper-like products without 033-Safe dimensions. There is currently no 033-Safe specification for electronic storage. █ of the ██ operational research projects involving SCP-033 are dedicated to finding such a method for electronic storage. ██ operational research projects are dedicated to the application of SCP-033 as a neutralizing factor for potentially hostile, machine logic-based SCP objects. Clarifying commentary from Prof. Hutchinson follows for non-specialist staff in document 033-A. Effects may be reviewed in document 033-Q.`
  },
  {
    id: "scp33",
    text: `Item #: SCP-034 Object Class: Safe Special Containment Procedures: SCP-034 is to be kept in a secure room with access granted only to Level 4 personnel. SCP-034 itself will be kept in a locked case that is under 24-hour surveillance. When not in lab conditions, SCP-034's protective sheath cannot be removed under any circumstances. Any personnel in contact with SCP-034 must be placed under a 24-hour observation period until their identities can be confirmed. Description: SCP-034 is a primitive knife constructed out of pure obsidian. Tests reveal that SCP-034 is approximately 1000 years old. Despite its crude method of construction and age, SCP-034 is still incredibly sharp and requires no maintenance to retain its edge. Expert analysis hypothesizes that SCP-034 may be of South American origin, and that it may have been used in Native American rituals. Several accounts from Spanish conquistadors exploring the █████████ region support this hypothesis, with detailed writings on how █████ priests would flay their victims alive with similar knives and wear their skin as a tribute to their gods. SCP-034 has the ability to allow its bearer to take on the appearance of another individual. If SCP-034 is used to cut a piece of flesh from a living individual, and that piece of flesh is placed against the skin of another individual, the second individual would take on not only the appearance, but all physical characteristics of the first individual. Testing has shown that the minimum amount of skin required can be as little as one (1) square centimeter. However, testing has also revealed that the amount of time the transformation lasts is directly proportional to the amount of flesh used. The ratio of time the transformation lasts to flesh used has been measured at approximately one (1) hour for every square centimeter used. Once the time limit has passed, the affected individual will revert to their original form. Analysis of SCP-034's ability shows that its method of mimicking another individual is nearly flawless. Not only does SCP-034 change its bearer's physical appearance, but their actual physical attributes as well, including height, weight, muscle mass, bone density, hair growth, eyesight, strength, physical medical conditions, and even DNA. The only physical traits that are not carried over in the transformation process are wounds caused by SCP-034 itself. Subjects still retain their original personality and memories while transformed. Even though the process is nearly instantaneous, taking only a few seconds, human test subjects have described the transformation process as extremely painful. Subjects also may suffer psychological trauma depending on the extent of their physical transformation. Side effects are especially serious if the subject takes on the appearance of a person with differing gender or with wildly different physical attributes. However, in order to function properly, the individuals who have their flesh cut off by SCP-034 must still be biologically alive to maintain the transformation. Should the individual whose identity has been stolen expire, the effect immediately wears off. Further details may be found in Lab Report 034A. Also, SCP-034 only appears to work on human subjects. Cross-species experiments with SCP-034 have resulted in [DATA EXPUNGED] SCP-034 came into Foundation possession when an imposter disguised as Dr. ███████ attempted to infiltrate Site ██. The impostor was apprehended when authorities discovered the real Dr. ███████ tied up in his home with a large portion of his right arm skinned. Further details may be found in Post Interrogation Report 2211.`
  },
  {
    id: "scp34",
    text: `Item #: SCP-035 Object Class: Keter Special Containment Procedures: SCP-035 is to be kept within a hermetically sealed glass case, no fewer than 10 centimeters (4 inches) thick. This case is to be contained within a steel, iron and lead-shielded room at all times. Doors are to be triple-locked at all times, with the exception of allowing personnel in or out. No fewer than two (2) armed guards are to be posted at any time. Guards must remain outside at all times and are not allowed within the containment room under any circumstances. A trained psychologist is to remain on site at all times. Research personnel are not to touch SCP-035 at any time. SCP-035 must be moved to a new sealed case every two (2) weeks. The previous case must be disposed of via SCP-101, as it shows no adverse reactions to SCP-035's “corruption”. Anyone who comes into contact with SCP-035 when it is in possession of a host is to be given an immediate psychological evaluation. Description: SCP-035 appears to be a white porcelain comedy mask, although, at times, it will change to tragedy. In these events, all existing visual records, such as photographs, video footage, even illustrations, of SCP-035 automatically change to reflect its new appearance. A highly corrosive and degenerative viscous liquid constantly seeps from the eye and mouth holes of SCP-035. Anything coming into contact with this substance slowly decays over a period of time, depending on the material, until it has decayed completely into a pool of the original contaminant. Glass seems to react the slowest to the effects of the item, hence the construction choice of its immediate container. Living organisms that come into contact with the substance react much the same way, with no chance of recovery. Origin of the liquid is unknown. Liquid is only visible from the front, and does not emerge or is even visible from the other side. Subjects within 1.5 to 2 meters (5-6 feet) of SCP-035, or in visual contact with it, experience a strong urge to put it on. When SCP-035 is placed on the face of an individual, an alternate brain wave pattern from SCP-035 overlaps that of the original host, effectively snuffing it out and causing brain death to the subject. Subject then claims to be the consciousness contained within SCP-035. The bodies of "possessed" subjects decay at a highly accelerated rate, eventually becoming little more than mummified corpses. Nevertheless, SCP-035 has demonstrated the ability to remain in cognitive control of a body experiencing severe structural damage, even if the subject's body literally decays to the point where motion is not mechanically possible. No effect is found to be had when placed on the face of an animal. Conversations with SCP-035 have proven to be informative. Researchers have learned various details about other SCP objects and history in general, as SCP-035 claims to have been at many momentous events. SCP-035 displays a highly intelligent and charismatic personality, being both amiable and flattering to all those who speak with it. SCP-035 has scored in the 99th percentile on all intelligence and aptitude tests administered to it, and appears to have a photographic memory. However, psychological analysis has discovered SCP-035 to possess a highly manipulative nature, capable of forcing sudden and profound changes to interviewer's psychological state. SCP-035 has proven to be highly sadistic, prompting some to commit suicide and transforming others into near-mindless servants with linguistic persuasion alone. SCP-035 has stated that it has intimate knowledge of the workings of the human mind and implied that it could change anyone's views if given enough time.`
  },
  {
    id: "scp35",
    text: `Item #: SCP-036 Object Class: Safe Special Containment Procedures: Once every year, a mobile task force is dispatched from Containment Command-02 in [EXPUNGED] to Site-22A to defend the runway and airport located there. The civilian facility is to be cleared of all non-SCP personnel by 0400 hours of September 23 and none are allowed to return until sunrise the next day. On October 1, all civilians must be evacuated again before sunrise and will not be allowed on to Site-22A until the return of the "Pilgrimage flight." Pilgrims in transit from the "Arrival Flight" awaiting departure on the "Pilgrim Flight" may only be cross-examined by researchers with Level 3 security level clearance or higher. Description: SCP-036 includes the location, Site-22A (a small airport in the Mosul region of northern Iraq) and Site-22B (the destination of passengers boarding at Site-22A). The key components of SCP-036 are: -The "Arrival flight"- A passenger plane (that varies in make and model from year to year) that arrives shortly before dawn on September 23. It appears on radar about 30-40 kilometers away from Site-22A. When it lands, "pilgrims" exit the plane and enter the terminal. No crew have ever left the plane. Observations have only revealed a masked pilot and co-pilot. This plane leaves quickly after pilgrims exit and does not wait for clearance for take off, nor does it identify itself upon approach for landing. -The "Pilgrims"- People of the Yazidi faith that exit the "Arrival" plane, who are said to be undergoing the ''kiras guhorîn''. Each year they are examined and identified as various people of the Yazidi faith that have died during the previous year. This is done through birth certificates, photo IDs, specific knowledge questions, and when possible, finger printing. Most have been known to be friendly and amicable though most are reluctant to give details about the kiras guhorîn. In the past, all have shown to be unable to recognize family and friends or been able to remember any information beyond what short term memory would normally allow. In the late afternoon of September 23rd, most pilgrims begin to emphasize how important it is that their pilgrimage must begin. At that time, they file onto the "Pilgrimage flight" plane and depart, never to be seen again. -The "Pilgrimage Flight"- A passenger plane provided by SCP personnel for the transport of "the pilgrims," it is manned by a crew of trained Yazidi holy men. The crew are typically never able to elaborate upon details of the pilgrimage or what the kiras guhorîn actually is. SCP equipment on board function optimally but recorded data will only slightly increase our understanding of the pilgrimage each year. Though the flight is gone for seven days, the crew and recorded data are only able to account for a few hours. Days are missing from time recording equipment and cameras, though nothing abnormal is ever observed. The plane disappears from radar and visual contact is lost about 50-60 km away from Site-22A until it returns about sunrise on October 1. -Site-22B- The destination of the "Pilgrimage plane," it is a small airport consisting of a runway and single building located at coordinates [EXPUNGED]. It has only been observed by "Pilgrimage crew" and cameras on the plane. It does not appear on satellite images and attempts to reach it on foot have failed, once with disastrous results. Cameras have trouble focusing on the area, as the heat from the ground usually causes a mirage-like visual effect on all objects more than a few dozen meters from the plane. A fly over with an SCP reconnaissance plane several weeks before the pilgrimage revealed undeveloped land and what looked like an ancient stone statue. In the 1990s, SCP Mobile Task Force Sigma-4 attempted to reach Site-22B during the time of the pilgrimage. Upon the approach, communication was lost and the Task force was never heard from again. No other exploration attempts are advised during the seven (7) day pilgrimage. Originally, the Kurdish speaking Yazidi people around Mosul secretly performed the Pilgrimage themselves. Pilgrims from the east were escorted by masked armed guards on camel back into the care of Yazidi holy men. It has been explained that the holy men would then take the pilgrims west to their "land of the dead," where the pilgrims would wait to be "reborn" back into the Yazidi people. The ''kiras guhorîn'', literally Kurdish for "changing garments," is used to describe the belief of reincarnation that lesser souls of the Yazidi undergo. While this actual pilgrimage was done in secret, a symbolic pilgrimage and ''kiras guhorîn'' are performed every year at this time by other Yazidi. During the 1960s, land acquisition by Kurds and Muslims, attacks by Turks, and punitive laws by the Islamic Iraqi Government, restricted the movements and customs of the Yazidi. During that time, the Foundation stepped in and offered aid in the way of an advantageous clause that granted SCP planes unrestricted access to airport facilities in the area. Almost immediately, mysterious planes carrying pilgrims from the east began landing at the local airport and an elusive airport at the destination appeared as well.`
  },
  {
    id: "scp36",
    text: `Item #: SCP-037 Object Class: Euclid Special Containment Procedure: SCP-037 is magnetically contained in a subterranean complex known as Site-22. Object size, spectral signature, and temperature are constantly monitored both onsite and remotely from Site-98. The primary containment chamber is lined with heat conducting, radiation-resistant NANOPEEK GFV polymer tiles and evacuated of any atmosphere. Heat from the object is radiated into the surrounding rock. Should enclosure integrity become compromised, the emergency system will generate a low power argon plasma shield. This is projected to provide a minimum of 4 hours for onsite engineers to effect necessary repairs before the object breaches containment. In the contingency that stellar evolution proceeds ahead of projections and a nova event appears imminent, or if containment failure is otherwise unavoidable, any remaining project staff are authorized to initiate the Pituaq Protocol. Description: SCP-037 appears to be a star approximately 5 cm (2 in) in diameter, with a luminosity of about 1*10-12 times that of our sun and a surface temperature of about 5000 K (determined by UBVRI analysis). The origin of SCP-037 is unknown, however, analysis suggests that it shares many properties in common with a typical main sequence star, other than its anomalously small size. It is theorized to have entered the Earth's magnetosphere via the North Magnetic Pole. The object was discovered in 19██ above the Beaufort Sea at approximately the North Magnetic Pole. Intense electromagnetic interference was reported by Canadian Forces Station (CFS) Alert, followed by an extremely bright object descending toward the ocean from the sky. The SCPS Guardian responded and discovered the object wavering in an erratic trajectory about 200 m above the surface of the water. Once containment procedures were devised it was transported to Site-32 for study. Containment and transport of SCP-037 have been achieved by the use of powerful electromagnets, to which the artifact aligns itself according to its own magnetic field. The primary challenge to containment thus far has been its powerful electromagnetic emissions, which are intense enough to be easily seen by the naked eye from high Earth orbit. Its current enclosure is located deep underground to prevent detection and to facilitate radiative cooling into the surrounding bedrock. In effect, the entire facility and the surrounding volume of the Earth's crust act as a massive heat sink.`
  },
  {
    id: "scp37",
    text: `Item #: SCP-038 Object Class: Safe Special Containment Procedure: SCP-038 is to be watered twice per day via overhead mister. Should the mister break for any reason, attendants should water SCP-038 by hand until it has been fixed. Lighting is provided by computer-controlled lighting array. Attendants watering SCP-038 by hand and maintenance personnel fixing mister or lighting should wear hazmat suits to prevent accidental cloning. Description: SCP-038 was found on an abandoned farm in █████████████, New York, in 19██. It was at first thought to be a common apple tree. However, upon closer inspection, it became apparent that SCP-038 was growing things other than apples and, in fact, other than fruit. SCP-038 has the ability to clone any object that touches its bark. Objects begin growing almost instantaneously and reach maturity within a matter of minutes. A weight limit of 90.9 kg (200 lb) per object has been previously recorded. Objects that SCP-038 has thus far cloned include: apples, oranges, watermelons, eggplants, candy bars, snack foods (See Addendum #1), televisions, toasters, laptops, keys (See Addendum #2), chairs, wine, DVDs, CDs (See Addendum #3), cats, dogs, and people. Human and animal cloning through SCP-038 is not recommended, as they appear to age quickly. The majority of these clones live, on average, two (2) weeks. After thorough examination of the deceased clones, it has been determined that they had begun to ferment before death. Object is currently held on Site-23 and there are currently no plans to move it.`
  },
  {
    id: "scp38",
    text: `Item #: SCP-039 Object Class: Euclid Special Containment Procedures: Living SCP-039 instances are to be contained in Site-77's Wilderness Observation Chamber-2B. The interior and exterior of WOC-2B must be monitored by 2 security guards at all times. WOC-2 is to be inspected weekly for sabotage and contraband. Deceased instances are in refrigerated storage and may be accessed for study upon request. SCP-039-A is [DATA EXPUNGED]. Description: SCP-039 consists of twenty-three proboscis monkeys (Nasalis larvatus) which have been subject to radical anatomical changes. These alterations are summarized below: -Eyes have been removed. New bone growth has filled eye sockets. No remnants of eyelids or eyebrows remain, only smooth skin. -Extreme alterations to the mouth. Oral opening is no longer present; no remnants of lips remain, only smooth skin. Jawbone has been fused in place by new bone growth along the joints. Teeth, tongue, gums, and palate are absent, having been replaced by a large deposit of adipose tissue. -Removal of digestive system. Esophagus, stomach, gallbladder, intestines, and bladder have all been replaced with adipose tissue formations of similar shape and volume. Anal orifice has been sealed by new skin growth, leaving no remnants of the anus. It is not clear how SCP-039 instances obtain nutrition and dispose of waste, or survive without doing so. -Enhancements of auditory, tactile, and olfactory senses. Both absolute and difference thresholds are significantly lower than those of the baseline species. These enhancements allow SCP-039 to effectively navigate their environment despite lack of sight. Instances have been observed tapping on objects when navigating unfamiliar surroundings; this behavior has been theorized to be a form of rudimentary echolocation, but this is yet to be proven. -Intelligence enhancements. SCP-039 score consistently higher on all provided cognitive tests than their non-anomalous equivalents. SCP-039 are capable of reproduction; at time of writing, five instances of SCP-039 have been born since containment. SCP-039 show a very close bond among their species, with newborns often being cared for by all capable adults. New instances are born with the same anatomic anomalies as their parents. Despite this, testing has not identified any genetic divergence from baseline species in SCP-039 instances. SCP-039 communicate via touch and a complex series of nasal vocalizations, many of which have not been observed in non-anomalous Nasalis larvatus. Original instances also possess a rudimentary understanding of spoken English. This knowledge is not passed on to newborns, but they do naturally learn some English from exposure to Foundation personnel. Instances of SCP-039 have demonstrated the ability to operate mechanical tools, and to perform various complex tasks primarily related to automobile construction and maintenance. This knowledge does not appear to be innate, as newborn instances do not possess it.`
  },
  {
    id: "scp39",
    text: `Item #: SCP-040 Object Class: Esoteric Special Containment Procedures: SCP-040-1a, 1c, and 1j have been approved to remain in the containment chamber with SCP-040 for purposes of the subject’s mental well-being. (Security Chief Special Order 392-5: ██/██/██). All other entities modified by SCP-040 during testing are to be disposed of after study according to standard biological specimen clearance protocols, as outlined in Document CDP-BIO-EN-1. Description: SCP-040 is a human child capable of at-will manipulation of the physical characteristics of living organisms. Modified organisms are collectively referred to as SCP-040-1. Modifications are primarily cosmetic, ranging from simple color and pattern changes to more involved shifts in bodily form and structure. The creation of new specialized organs is possible, but appears to be the limit of SCP-040’s ability and currently has a 66% failure rate in testing. Modifications are limited to what would be physically possible (regardless of the probability of such a feature naturally arising) – for example, while SCP-040 can grant an organism wings that does not naturally possess them, they will not permit the creature to fly without meeting other physical requirements. SCP-040-1 undergo behavior shifts as part of the modification process, acting with extreme loyalty to SCP-040 regardless of prior association. SCP-040’s anomalous property requires significant focus and time to enact and causes intense headaches and nausea when performed for more than a few minutes at a time. The effect becomes increasingly unreliable and inaccurate the smaller the modifications or more complex the changes are. SCP-040 is incapable of altering microscopic organisms, and has great difficulty in altering plant life. Dead organic matter may also be used, but must be used in conjunction with a living organism. Instances of SCP-040-1 cannot be modified more than once, though it is currently unknown if this is a hard limit of SCP-040’s properties, or from a lack of mastery over them. SCP-040’s emotional state is within acceptable boundaries for an individual of its age group, accounting for the effects of prolonged containment and parental seperation. Subject’s intelligence is slightly above-average for its age group. Behavior is generally cooperative. SCP-040 acclimatized quickly to containment, and responded well to the initial orientation and socialization programs. SCP-040 responds to the name "Forty", and does not appear to have any other given or chosen personal name.`
  },
  {
    id: "scp40",
    text: `Item #: SCP-041 Object Class: Safe Special Containment Procedures: SCP-041 is to be hospitalized at Bio-Research Area 12. Though not Keter class, should SCP-041's abilities ever propagate beyond a reasonably containable area, the risk of SCP sensitive information being broadcast to the public remains too great a risk and warrants Area-Level isolation away from the general populace. SCP personnel wanting to keep their thoughts private are advised to remain outside of a fifteen (15) meter radius from SCP-041, beyond the designated red circle on the floor. It is beneficial to the mental health of SCP-041 to have a "sitter" in the room who watches television and concentrates on its programming. This allows SCP-041 to effectively "watch" television through the mind of someone else. The optimal sitter is a class-D personnel with below-average intelligence whose mind does not wander or have more than one train of thought at a time. Though not mind control, SCP-041 has used its abilities to coerce sitters into watching programming that they don't themselves enjoy. SCP-041's tastes vary between gore/slasher films (having even expressed interest in "snuff") and children's programming. Description: SCP-041 is a male human suffering from irreversible damage to his central nervous system, which is believed to have been caused by an infection of a rare strain of bacterial meningitis. Although antibiotics were successful in clearing the infection, the membranes surrounding his brain and spinal cord had reacted to the infection by severing many neurons connecting the central nervous system to the rest of the body. SCP-041 must rely on a respirator to sustain his breathing, a biventricular pacemaker to keep his heart beating, and a naso-gastric tube to provide nutrition. Visually, SCP-041 appears to be in a persistent vegetative state. However, observers in the presence of SCP-041 begin to realize that their thoughts, along with everyone else's in about a 10-meter radius from SCP-041, are broadcast in a semi-audible fashion. Aside from being the source, SCP-041 is also capable of broadcasting his own thoughts to those present. Anyone forming an idea using words will have those thoughts unwillingly transmitted to others in this range as "mind-audible speech," which cannot be recorded by any known equipment. (Correction: see Addendum-01). Mind-audible speech may be "heard" using whatever voice a subject chooses to think with; most typically this is the subject's normal voice (see Document-01). Visual thoughts and images are broadcast as well, but are not received as readily. Images are most effectively transmitted when both the sender and receiver have their eyes closed, the sender concentrates on a single object without environment or background, and the receiver’s mind is clear of conscious thoughts. Communication between subjects using visual images, particularly those not rooted in memory but in imagination, is usually difficult. The sender typically has trouble conceiving a highly-detailed mental object from a single point of view, while the receiver will often try to fill in gaps of missing information, ultimately resulting in the receiver seeing a different image from what was sent. The most difficult imagery to be successfully broadcast appears to be a person's face, particularly if the image is one of a person in motion. Although able to transmit his thoughts to others, SCP-041 is not very "talkative." Attempts to persuade SCP-041 to divulge any information about his abilities have been so far fruitless. SCP-041 is typically silent and normally will not respond to any direct attempts at communication. However, SCP-041 appears to have a sense of humor, as he interjects occasional comments into conversations of others.`
  },
  {
    id: "scp41",
    text: `Item #: SCP-042 Object Class: Safe Special Containment Procedures: SCP-042 is currently housed within Minimum Security Paddock 12 at Bio-Research Area-32. Despite SCP-042's seeming disinclination to attempt escape at this point, security measures must still be maintained at all times. Previous attempts to maintain the health of the groundcover in Paddock 12 have failed to date. Despite regular watering, SCP-042's presence leaves the ground parched wherever it treads. As it has not been determined what happens to added water, the program of watering has been discontinued as unnecessary and potentially hazardous to the local water table. Monitoring of local well levels and sampling of the area's water is to be carried out on a weekly basis. Personnel interacting with SCP-042, including any handlers, medical personnel, feeders, and custodial staff, must submit to a thorough search, including [DATA REDACTED], prior to entrance into Paddock 12. Any personnel attempting to smuggle a weapon, or an object which can be used as a weapon, is to be immediately [DATA REDACTED]. Personnel are to undergo psychological screening once per week after interacting in any way with SCP-042. Medical personnel examining the wounds on SCP-042's back are to be closely monitored at all times, lest they attempt to euthanize SCP-042. Description: SCP-042 is an animal believed to be a member of the genus Equus. Its coat is white in color with some small brown spotting. It stands at 183 cm (18 hands) to its withers and weighs 710 kg. Its weight has dropped significantly since it has been in Foundation custody, due to both atrophy from lack of physical activity and refusal to eat. The liquid nutrient diet forcibly administered keeps it alive but it remains emaciated and weak. SCP-042 exhibits two large bone protrusions from its back, linked to powerful musculature (now atrophied) throughout its back. These bones end at 37 centimeters from the surface of its back, and they protrude from the skin at open, ragged wounds. To date, no healing has been observed of these wounds, though some clotting must be taking place for SCP-042 to have not bled out. SCP-042 exhibits a listless demeanor and has been unresponsive to any attempt by skilled handlers to incite activity. If allowed to do so, SCP-042 will lay down on the ground immobile, not moving to eat, drink, or relieve itself. Pain-response conditioning has proved somewhat effective in getting SCP-042 to rise so that it can be cleaned, but eventually it will attempt to lay down again no matter the strength of the shock administered, even to the point of losing consciousness. Researchers are divided as to SCP-042's level of intelligence. While some believe that it is simply an animal and no smarter than others of its genus, others have come to believe that it may in fact be sapient. It has been shown to make eye contact with persons entering Paddock 12, most of whom describe its looks as "pleading". SCP-042 has been involved in accidents on multiple occasions where it has been injured on pieces of equipment or its enclosure, which those arguing for intelligence believe to have been intentionally caused by SCP-042.`
  },
  {
    id: "scp42",
    text: `Item #: SCP-043 Object Class: Safe Special Containment Procedures: SCP-043 requires no special containment, although it is recommended that SCP-043 not be used for purposes other than testing. A turntable is to be maintained in the same room for testing. Description: SCP-043 appears to be a vinyl copy of "The White Album" by the Beatles; however, upon closer inspection, the record has no grooves. In spite of this, the record will play from start to finish regardless of the starting position of the needle. When the twenty-ninth track is reached, instead of playing "Revolution 9", the disc stops spinning and faint breathing can be heard. Occasionally the entity responsible for the breathing will speak in a male voice. The entity will respond to questions and shows a profound encyclopedic knowledge of the music industry, musical theory, and obscure trivia about many bands and artists. However, the entity refuses to answer questions regarding The Beatles or its own personal details.`
  },
  {
    id: "scp43",
    text: `Item #: SCP-044 Object Class: Safe Special Containment Procedures: A constant stream of hydrogen ions, unbound oxygen atoms, and other trace free radicals emanate from the muzzle of SCP-044 at all times. Because of this, the docking stations of SCP-044 are to be well-ventilated to keep dangerous gases and moisture from accumulating. Muzzle coverings are to be fitted at all times to keep birds and small animals from investigating the large open barrel of SCP-044. Description: SCP-044 is a howitzer, secretly manufactured in the late stages of the Second World War by Krupp engineers, personally supervised by Albert Speer, German Minister of Armaments and War Production under Adolf Hitler. SCP-044 is unique not only because of its size (251,000 kg, or 251 metric tonnes), but also because it fires unconventional artillery using an atypical delivery method. Rather than having a breech for loading shells, the rear of the barrel is configured into a massive air-compression chamber. Any object or pile of objects that fits may be loaded into SCP-044’s muzzle to be used as ammunition. Because of its size, SCP-044 must remain rail-mounted and requires two freight locomotives to move. Researchers believe that SCP-044 weakens molecular and atomic bonds in any material loaded into its muzzle. However, the method by which SCP-044 affects molecular bonds is not known, due primarily to the numerous complex mechanisms that compose the housing and workings of SCP-044. In fact, some mechanisms appear useless and seem to do nothing other than spin or make noise, even when SCP-044 is not supplied with power. Both equipment and personnel have been lost while exploring the inside of SCP-044’s barrel. When SCP-044 is fired, all matter within its barrel is ejected at a high rate of speed as a glowing red slug, proportional in size to the amount of mass loaded into the muzzle. Upon striking a solid object or the ground, the slug explodes with a yield proportional to the mass of the original ammunition, at no less than a ███% mass-to-energy conversion rate. The yield will also increase somewhat the longer the slug remains in the barrel. The greatest known yield was achieved when 'The Administrator's' 8,900 kg (19,500 lb) personal diesel pickup truck was loaded in its entirety into the muzzle of SCP-044 and fired in the pictured "experiment."`
  },
  {
    id: "scp44",
    text: `Item #: SCP-045 Object Class: Safe Special Containment Procedures: SCP-045 is to be kept affixed to an examination platform in a hemispherical chamber measuring 5 meters in radius at Oceanographic Research Station 12, located at -██.██, -███.██ on the seafloor of the Pacific Ocean. The chamber is to be kept filled with gaseous neon at equilibrium pressure with the surrounding environment. The chamber is separated from habitable portions of the station by 5 meters of local seawater, and all interactions with SCP-045 are to be performed via telepresence or robotic means. The bindings that attach SCP-045 to its platform are fitted with quick-release latches, which are to be released when necessary to prevent a containment breach. Given the seismic activity associated with SCP-045, if the containment chamber is damaged or breached by seismological activity, SCP-045 should be recovered by remotely controlled drone vehicles and kept at least 10 meters from human-inhabited spaces until such time as repairs can be completed to the optimal containment chamber. Description: SCP-045 is an icosahedron composed of ice XII1 heavily occluded with planar fractures in a regular, complex pattern. SCP-045 has an average radius of 1.7 meters and density of 2.6 g/cm³, which is approximately twice that of non-anomalous ice XII. SCP-045 remains in a stable state at temperatures ranging from 0.074-500 kelvin (approx -273 ºC to 227 ºC) and pressures ranging from 0.4 pascals to 3 gigapascals (approx 3.95 microatmospheres to 29600 atmospheres). Although it is possible to melt or vaporize SCP-045 at temperatures and pressures outside of these ranges, the H2O involved is attracted to itself by unknown means and will remain within very close proximity unless forcibly separated. The water will refreeze as soon as conditions return to a position inside SCP-045's stable range and any subportions kept separate prior to refreezing will freeze into smaller icosahedrons identical in form and properties to the total amount of SCP-045. Based on available evidence, it is currently believed that SCP-045 is a 3-dimensional projection of a hypericosahedron.2 Research is ongoing to determine how SCP-045 is able to maintain a stable lower-dimensional projection and whether this can be adapted for use when interacting with other dimensionally anomalous SCP Items. At unpredictable intervals ranging from 2 weeks to 3 months, SCP-045 will spontaneously rotate around multiple axes simultaneously for a period no longer than 73 seconds. During this period, a series of small seismic events (<2.5 on the Richter scale) will occur in the immediate area of SCP-045. If SCP-045 is prevented from rotating, the seismic events increase in strength logarithmically to a maximum of 5.3 on the Richter scale. Following the end of the rotation period, the radius of SCP-045's effect will temporarily double for the same amount of time that it rotated. When gaseous nitrogen or argon3 come within 3.7 meters of any portion of SCP-045, they are replaced by different compounds. N2 is replaced by liquid water at a conversion rate of 1.00 mol N2 : 1.98 mol H2O and Ar is replaced by crystalline NaCl ("table salt") at a conversion rate of 1.00 mol Ar : 4.26 mol NaCl. SCP-045 was discovered in 1972 when a Foundation submarine scouting the Pacific abyssal plain for suitable locations for undersea bases was diverted to investigate the epicenter of a series of unexpectedly localized, strong tremors. SCP-045 was found lodged in a crevice, which had apparently prevented it from rotating. When removed from the crevice, it was brought towards the vessel for further study and, upon coming within range of the interior atmosphere, exhibited its anomalous effects. This resulted in a catastrophic breach of internal containment protocols and the loss of 12 crew members prior to SCP-045 being released and the submarine moving out of range.`
  },
  {
    id: "scp45",
    text: `Item #: SCP-046 Object Class: Euclid Special Containment Procedures: The land surrounding SCP-046 has been purchased and surrounded by multiple layers of security, including fencing, barricades, and lethal-effect traps; multiple signs marking the area as private property are to be prominently displayed. The area is to be heavily guarded at all times to prevent access by civilians to SCP-046. All personnel working around or within a 50km radius of SCP-046 are to undergo rigorous medical testing to ensure the absence of any potentially life-threatening illnesses; additionally, increased mental health examinations are to be administered to ensure that no personnel inclined or potentially inclined towards self-harm or self-destructive tendencies are allowed within the 50km radius. Any injured personnel are to be evacuated to a hospital outside of the 50km zone around SCP-046. All vegetation surrounding SCP-046 is to be destroyed and all animals attempting to access SCP-046 are to be terminated and destroyed before reaching its outer perimeter. Any personnel showing unusual interest either in SCP-046 or in traveling to the region near SCP-046 are to undergo medical examinations as detailed above. Any modification to these containment procedures are to be approved by O5 command before being added to this containment document. Any personnel attempting to modify this document without appropriate authorization are to be demoted and reassigned. Description: SCP-046 is a predatory botanical mass located in southwestern Kentucky. SCP-046 is composed of two parts. SCP-046-1 is a large mass of vegetative matter, composed largely of plants indigenous to the region, including Quercus alba, Ilex aquifolium, and Lonicera sempervirens, though several offshoots composed of other plant species are also present. SCP-046-2 is the land in the immediate vicinity of SCP-046-1, extending to a roughly circular area twenty meters in radius from its base. This area is SCP-046's primary feeding area. SCP-046 is capable of attracting prey within a 50km radius through hallucinogenic means; all evacuations of personnel should carry them outside of this radius to disable SCP-046's effect. Animals (including humans) suffering from potentially life-threatening physical injuries or diseases, or who are afflicted by psychological disorders that induce self-destructive tendencies, feel a powerful compulsion to come to SCP-046-2 and lie in a prostrate position facing SCP-046-1. Individuals lying in such a position are rapidly attacked by an unusually powerful combination of saprophytic organisms and opportunistic infections, including several strains of methicillin-resistant Staphylococcus aureus (MRSA) known to induce necrotizing fasciitis, also known as "flesh-eating bacteria"; a form of fungal spore similar to Stachybotrys chartarum, or "black mold," which poisons prey organisms and induces paralysis; and finally, complete consumption by several heretofore unknown species of insect that emerge from the inside of SCP-046-1 during the final stage of feeding. SCP-046 appears to derive nutrition through the complete digestion of affected individuals, particularly larger mammals such as humans. It is unknown whether SCP-046 is capable of growth; as such, all steps are to be taken to ensure that SCP-046 is deprived of prey until more information is known about its abilities. These efforts are to include terminating individuals prior to their arrival at SCP-046 and disposing of their bodies in a separate location.`
  },
  {
    id: "scp46",
    text: `Item #: SCP-047 Object Class: Keter Special Containment Procedures: SCP-047 is to be contained in a 0.5 m x 0.5 m x 1 m hermetically sealed storage box at all times. This box is to be locked in storage locker 047a, inside P3-secure biohazard lab 047b. Any entrance to and activity inside 047b will be recorded by biometric scan, closed circuit camera, and [REDACTED]. Entry to 047b requires the authorization of the project manager, in addition to at least one O5 level clearance. SCP-047 is to be treated as a Priority 4 Contagious Biohazard in all protocols, including mandatory quarantine if exposed. Suite q047 has been provided, adjunct to lab 047b, for this purpose. In the event of outside contamination of SCP-047-1, Lockdown Protocol 047-01 "Yersinia" must be engaged. Description: SCP-047 is a heavily rusted, breached gas cylinder made of an iron-[REDACTED] alloy. When exposed to open air, the material of the cylinder evaporates slowly, producing a previously undocumented mutagenic gas. This gas has no effect on eukaryotic organisms (e.g. humans), but profoundly alters prokaryotes, showing preference for common human microbiota - the natural microorganisms that live on the skin and throughout the body. On rare occasions these mutations produce a "superbug" (collectively known as SCP-047-1), a natural commensal with enhanced survivability and therefore opportunistic pathogenicity. The pattern of changes induced by SCP-047 suggests that these highly infectious microbes are, at least to some degree, selected for. Although the specifics of SCP-047-1 species are dependent on the base bacterium from which it is derived, there are several characteristics which appear to be generally consistent across all cases of SCP-047-1 mutation: -Enhanced survivability in the bacterium's natural environment and similar environments; -Full spectrum antibiotic resistance; -Increased reproduction rate and consumption of available material; -Development of a sporulation ability in gram-positive bacteria; -Increased ability to uptake, hold, and share plasmids, particularly in gram-negative bacteria; -Increased transmission, due to traits described above. SCP-047-1 samples are normally debilitating and virulent. However, compared to other Keter-class SCPs, it should be noted that SCP-047-1 have a relatively low mortality rate due to their action through "mundane" biological pathways. Several strains of bacteria have been selectively mutated by SCP-047. Mutation of bacteria in culture is possible, but the process appears to be much more effective with bacteria living on a human host. Generally, mutation of natural commensals for experimental purposes is encouraged. After the containment breach of 30/01/2010 (See Incident Report Yersinia-047-01 (2010)), mutation of already-pathogenic species is banned and all existing samples must be destroyed. Three particular species of SCP-047-1 mutated bacteria are of note, due to their involvement in the containment breach of ██/██/201█:`
  },
  {
    id: "scp47",
    text: `Item #: SCP-048 Description: SCP-048 is an anomolus designation, as any SCP designated to SCP-048 tend be to disappear/go missing in some way. Personell designated to use an SCP designated SCP-048 are more likely to be killed, dismembered or disciplined. It is unknown whether these properties are due to SCP-048, however due to superstition around this number, it has been removed from the catalog, and no SCPs are to be designated SCP-048.`
  },
  {
    id: "scp48",
    text: `Item #: SCP-049 Object Class: Euclid Special Containment Procedures: SCP-049 is contained within a Standard Secure Humanoid Containment Cell in Research Sector-02 at Site-19. SCP-049 must be sedated before any attempts to transport it. During transport, SCP-049 must be secured within a Class III Humanoid Restriction Harness (including a locking collar and extension restraints) and monitored by no fewer than two armed guards. While SCP-049 is generally cooperative with most Foundation personnel, outbursts or sudden changes in behaviour are to be met with elevated force. Under no circumstances should any personnel come into direct contact with SCP-049 during these outbursts. In the event SCP-049 becomes aggressive, the application of lavender (L. multifida) has been shown to produce a calming effect on the entity. Once calmed, SCP-049 generally becomes compliant, and will return to containment with little resistance. In order to facilitate the ongoing containment of SCP-049, the entity is to be provided with the corpse of a recently deceased animal (typically a bovine or other large mammal) once every two weeks for study. Corpses that become instances of SCP-049-2 are to be removed from SCP-049's containment cell and incinerated. SCP-049 is no longer permitted to interact with human subjects, and requests for human subjects are to be denied. SCP-049 is no longer permitted to interact directly with any members of Foundation staff, nor is it to be provided with any additional corpses to be used in its surgeries. Description: SCP-049 is a humanoid entity, roughly 1.9 meters in height, which bears the appearance of a medieval plague doctor. While SCP-049 appears to be wearing the thick robes and the ceramic mask indicative of that profession, the garments instead seem to have grown out of SCP-049's body over time1, and are now nearly indistinguishable from whatever form is beneath them. X-rays indicate that despite this, SCP-049 does have a humanoid skeletal structure beneath its outer layer. SCP-049 is capable of speech in a variety of languages, though tends to prefer English or medieval French2. While SCP-049 is generally cordial and cooperative with Foundation staff, it can become especially irritated or at times outright aggressive if it feels that it is in the presence of what it calls the "Pestilence". Although the exact nature of this Pestilence is currently unknown to Foundation researchers, it does seem to be an issue of immense concern to SCP-049. SCP-049 will become hostile with individuals it sees as being affected by the Pestilence, often having to be restrained should it encounter such. If left unchecked, SCP-049 will generally attempt to kill any such individual; SCP-049 is capable of causing all biological functions of an organism to cease through direct skin contact. How this occurs is currently unknown, and autopsies of SCP-049's victims have invariably been inconclusive. SCP-049 has expressed frustration or remorse after these killings, indicating that they have done little to kill "The Pestilence", though will usually seek to then perform a crude surgery on the corpse using the implements contained within a black doctor's bag it carries on its person at all times3. While these surgeries are not always "successful", they often result in the creation of instances of SCP-049-2. SCP-049-2 instances are reanimated corpses that have been operated on by SCP-049. These instances do not seem to retain any of their prior memories or mental functions, having only basic motor skills and response mechanisms. While these instances are generally inactive, moving very little and in a generally ambulatory fashion, they can become extremely aggressive if provoked, or if directed to by SCP-049. SCP-049-2 instances express active biological functions, though these are vastly different from currently understood human physiology. Despite these alterations, SCP-049 often remarks that the subjects have been "cured".`
  },
  {
    id: "scp49",
    text: `Item #: SCP-050 Object Class: Euclid Special Containment Procedures: So far, all attempts to contain SCP-050 have proven fruitless. At present, whoever has possession of SCP-050 is to leave it in an office they use with regularity. Description: SCP-050 appears to be a statue of a monkey reading a book, approximately 1 foot tall. On the bottom of the statue are engraved the words "To The Cleverest" in cursive script. The statue has so far proven resistant to all forms of damage. As such, there is no accurate method to date the object. When left alone, SCP-050 has shown itself to be both useful and antagonistic to its current owner. Although never seen to move, no matter the manner or amount of recordings, any room it is left in becomes very clean, to a polish whenever possible. Paperwork is filed, trash is emptied, and in general, clutter is removed. However, SCP-050 also has a tendency to leave traps for its owner, so current holders should carefully check their offices upon returning.`
  },
  {
    id: "scp50",
    text: `Item #: SCP-051 Object Class: Safe Special Containment Procedures: SCP-051 and SCP-051-A are to be kept in a sealed containment facility. SCP-051-A is kept within a locked, climate-controlled document box with a viewing window, to prevent degradation of its material. Any personnel (with the exception of pregnant or non-sterile female personnel, who might not be aware of an early-stage pregnancy) may access SCP-051 as long as a request is placed before-hand and cleared by site administration. Description: SCP-051 is a 25 cm (10 in) anatomically correct model of a human female, carved out of ivory, with typically Asian features. Microscopic analysis shows that the head hair is human hair. The doll is jointed at the shoulders, hips, and knees. The 'stomach' area of the doll is fully removable as a 'cap' of ivory, exposing a detailed ribcage and organs, and a 2.5 cm (1 in) ivory fetus connected to the main figure by a leather cord umbilicus. When brought into the presence of a pregnant human female, SCP-051 has various deleterious effects upon the pregnancy, generally resulting in miscarriage of the fetus. Reports include a gentle compulsion to handle the model, open its stomach cap and take out the fetus. This results in nausea and cramping within 5 minutes, vaginal bleeding that begins as spotting and may progress to hemorrhage within the next half-hour, and miscarriage within 2 - 24 hours in most recorded cases. Medical records indicate that the aborted fetuses bear moderate to severe defects. Pregnancies carried to term after exposure to the model have resulted in severely deformed live births, including ██ deaths of the mothers and ██ infants terminated after birth by the delivering physician (see interview 051-1 below). Witnesses to these live births showed signs of severe emotional trauma that was alleviated, after Foundation interviews, by administration of a Class A amnestic. SCP-051-A is a fragment of text on rice paper that was discovered with SCP-051. The surviving text is written with plant-derived ink test-dated to the 12th century, and the characters have been identified as a known early dialect of Japanese. Translation reveals the text is part of a prayer or spell against 'demons' that attack unborn babies. The incantation orders these forces or demons into the model, instead of a pregnant woman, and claims to trap them there. However, centuries have degraded the paper and ink so that the full incantation and instructions, if any, cannot be deciphered.`
  },
  {
    id: "scp51",
    text: `Item #: SCP-052 Object Class: Euclid Special Containment Procedures: Although it is not possible to remove SCP-052 from the New York City subway system, its predictable behavior allows the Foundation to prevent the public from encountering it. The 59th St. A/B/C/D Station is to be closed to the public from 11pm-1am on Saturdays/Sundays under the pretext of “track maintenance.” During that time, the station is to be staffed with agents from Mobile Task Force Gamma-6. Agents have been ordered to prevent accidental public access to the station, and to capture anyone seen leaving SCP-052. Anyone who has been on SCP-052 must be transported to Site-21 for debriefing and processing. Members of the public who see SCP-052 may be released after the administration of a Class B amnestic. Description: SCP-052 is a type R4 New York City subway train. Official records indicate this train was built in 1932 and decommissioned for scrap in 1975. Nevertheless, it continues to appear on the Uptown A/D track at the 59th St. and 8th Avenue station at 11:57 p.m. every Saturday. The train is in perfect condition and labeled as an “A” train. SCP-052 appears at the designated time, opens its doors to accept/discharge passengers for approximately five minutes, then closes its doors and disappears. It does not appear to ever contain passengers, except for those leaving the train during its appearance. The majority of subjects that have boarded SCP-052 have not been recovered. Passengers leaving SCP-052 claim to have boarded on various dates, from 1976, up to 2204; the latter claims he thought SCP-052 was a 300th Anniversary Special train. Subjects retain no knowledge of time on board. `
  },
  {
    id: "scp52",
    text: `Item #: SCP-053 Object Class: Euclid Special Containment Procedures: SCP-053 is to be contained in an area no less than 5 m x 5 m (16 ft x 16 ft) and given adequate room to move. Toys, books, games, and other recreational devices are to be amply provided and rotated every three (3) months. Proper bedding, bathroom, and medical facilities are to be maintained at all times. Food should be provided three (3) times daily, and two (2) snacks are allowed if requested. No physical contact is to be made with SCP-053 without full atmosphere-containment suit and eye shield. No eye contact is to be made with SCP-053 for any reason. Any objects given to personnel by SCP-053 may be removed, but must be given to quarantine for examination. Only one (1) member of personnel may be present in the room at any given time and must be secured by a safety line of steel cable. All personnel must be removed from SCP-053's containment chamber within 10 minutes of entering. Any personnel who begin to act erratically, scream, or attempt to grab SCP-053 are to be removed and quarantined. Any personnel attempting to remove their suit are also to be removed and quarantined. No sharp objects or firearms are allowed in SCP-053's containment room. Description: SCP-053 appears to be a small 3-year-old girl. She is capable of basic speech and appears to be slightly above average in mental development. She has a generally pleasant personality and rarely seems upset, becoming agitated only in the presence of groups of people. Any and all humans over the age of three who make eye contact with, physically touch, or remain around SCP-053 for longer than 10 minutes will rapidly become irrational, paranoid, and homicidal. Most, if not all, of these feelings will be directed at SCP-053, and afflicted subjects will attempt to kill SCP-053 after first killing or driving off all humans visible to them. Those attempting to kill SCP-053 will suffer massive heart attacks or seizures and die seconds after doing any physical damage to SCP-053. SCP-053 will regenerate almost instantaneously from any wound, regardless of severity. SCP-053 appears wholly ignorant of these effects, and ignores any and all subjects affected. When questioned about the effect, SCP-053 is incapable of response.`
  },
  {
    id: "scp53",
    text: `Item #: SCP-054 Object Class: Safe Special Containment Procedures: Subject is held in a watertight isolation room outfitted with specialized climate control equipment. An ornate fountain filled with water stands in the center of the enclosure. Maintenance personnel are required to wear NBC suits while inside the containment area and must spend ten minutes in a special drying room after exiting. In the event of a breach, the surrounding area should be evacuated and the enclosure flushed with liquid nitrogen. The fountain's chemical levels and volume are to be monitored and maintained. Spring water from ████████ should be used as SCP-054 is highly sensitive to hydrological conditions. SCP-054 has developed a mistrust for human males during its confinement; thus, assignment of female personnel is recommended. Description: Out of the water, the subject most often appears as a female humanoid with a mean volume of 90 L comprised entirely of water (other forms are possible, commonly geometric shapes). When it enters a body of water, it becomes indistinguishable from its surroundings. The subject must periodically return to a body of water in order to maintain its volume due to evaporation. Initially found in ████████, it was moved to Site-08 for further study. Subject was initially curious about Foundation personnel and seemed to enjoy interacting with maintenance staff and researchers, and mimicking their forms. After a number of weeks, the creature apparently felt comfortable enough to remain out of the water during routine monitoring, though it retreated when attempts were made to study its composition. SCP-054 is apparently composed of normal water, with no detectable differences compared to ordinary spring water from the same source. No thermal, electromagnetic, biological, or other phenomenon has ever been detected in its "body" that would suggest how it animates. Water lost by SCP-054 to evaporation exhibits no special properties when condensed. Experiments with SCP-054 were halted following [DATA EXPUNGED] two researchers injured. After this incident containment protocols were updated. Subject thereafter exhibited signs of mistrust and aggression around male personnel (which made up the majority of the original research staff). Subject reclassified Euclid.`
  },
  {
    id: "scp54",
    text: `Item #: SCP-055 Object Class: Keter Special Containment Procedures: Object is kept within a five (5) by five (5) by two point five (2.5) meter square room constructed of cement (fifty (50) centimeter thickness), with a Faraday cage surrounding the cement walls. Access is via a heavy containment door measuring two (2) by two point five (2.5) meters constructed on bearings to ensure door closes and locks automatically unless held open deliberately. Security guards are NOT to be posted outside SCP-055's room. It is further advised that all personnel maintaining or studying other SCP objects in the vicinity try to maintain a distance of at least fifty (50) meters from the geometric center of the room, as long as this is reasonably practical. Description: SCP-055 is a "self-keeping secret" or "anti-meme". Information about SCP-055's physical appearance as well as its nature, behavior, and origins is self-classifying. To clarify: -How Site 19 originally acquired SCP-055 is unknown. -When SCP-055 was obtained, and by whom, is unknown. -SCP-055's physical appearance is unknown. It is not indescribable, or invisible: individuals are perfectly capable of entering SCP-055's container and observing it, taking mental or written notes, making sketches, taking photographs, and even making audio/video recordings. An extensive log of such observations is on file. However, information about SCP-055's physical appearance "leaks" out of a human mind soon after such an observation. Individuals tasked with describing SCP-055 afterwards find their minds wandering and lose interest in the task; individuals tasked with sketching a copy of a photograph of SCP-055 are unable to remember what the photograph looks like, as are researchers overseeing these tests. Security personnel who have observed SCP-055 via closed-circuit television cameras emerge after a full shift exhausted and effectively amnesiac about the events of the previous hours. -Who authorized the construction of SCP-055's containment room, why it was constructed in this way, or what the purpose of the described Containment Procedures may be, are all unknown. -Despite SCP-055's container being easily accessible, all personnel at Site 19 claim no knowledge of SCP-055's existence when challenged. All of these facts are periodically rediscovered, usually by chance readers of this file, causing a great deal of alarm. This state of concern lasts minutes at most, before the matter is simply forgotten about. A great deal of scientific data has been recorded from SCP-055, but cannot be studied. At least one attempt has been made to destroy SCP-055, or possibly move it from containment at Site 19 to another site, meeting failure for reasons unknown. SCP-055 may present a major physical threat and indeed may have killed many hundreds of personnel, and we would not know it. Certainly it presents a gigantic memetic/mental threat, hence its Keter classification.`
  },
  {
    id: "scp55",
    text: `Item #: SCP-056 Object Class: Euclid Special Containment Procedures: SCP-056 is to be kept in a room of its choosing, with whatever furnishings it expresses desire for. Level 1 personnel and above may interact with SCP-056 at any time they choose, for a time length not exceeding two hours. The subject is to be guarded by a minimum of three (3) security staff at all times, with shift changes every four hours. Each guard is to be armed with non-lethal tranquilizer pistols, loaded with no less than fifteen hundred (1500) microliters of cyclopyrrolone tranquilizer. Any irregularities in personnel and staff developed by extended exposure to SCP-056 will result in psychological examination and relocation to site [DATA EXPUNGED]. The subject is to be allowed access to any object it desires, with the exceptions of weapons, communication devices, an internet connection, and other SCP objects. It may wander in Research Sector ██ as it wills, but never allowed access to floors with exits. In the event of an emergency, or if SCP-056 becomes violent, it is to be subdued and contained within its room if possible. At no time should personnel attempt to harm SCP-056; see Addendum 2-b. Description: SCP-056 is a being of variable size, gender, and appearance, which changes in response to the environment around it, especially in regards to living and sentient beings. Its most common form is of a handsome man in his middle twenties, dressed in a garb of similar appearance to that of the personnel guarding it but of a higher quality and aesthetic value. However, it has been recorded as taking these forms: -A large, well groomed Labrador Retriever (when exposed to Doctor █████ ████'s dog). -A woman of similar appearance to famous actress Scarlett Johansson when passing by a group of younger female staff. -A female doctor in a white lab coat when speaking with various researchers. When asked to take an IQ test, the subject scored nearly thirty (30) points higher than the highest scoring researcher available. -A male bodybuilder, who was able to lift nearly two-hundred and fifty (250) kilogrammes twice on a bench press machine in the Sector's gym. This was thirty (30) kilogrammes heavier than the strongest security guard's maximum at the time. -A couch of extremely pleasing aesthetic value (when left alone in the subject's room). These changes will generally occur the moment all people in the area lose focus on the subject, which occurs immediately upon exposure to a new object or person (See Addendum 3). Filming these changes has proved inconsequential, as any viewing the tapes or feed suffer the same momentary confusion. Clothing will also change during this time, though 056 has yet to manifest any sort of tools or weapons. It is theoretically impossible to view SCP-056's original or "natural" form. When left in an empty, concrete cell and under closed-loop video surveillance, it took on the form of a higher quality camera, and appeared to monitor the camera watching it. Further attempts to yield its natural form discovered that when alone, it had no readable life signs, including body temperature, heart beat, or weight. It is assumed by researchers that it could not exist without any sort of perception. Personnel in contact with the subject often report feeling "jealous" or "unsatisfied", yet will often give a great deal of both positive and negative attention to SCP-056, which can be predicted by their personality types. Security staff will often claim that they wish to follow the subject's commands, even if they dislike it or its current form, while researchers in extended contact with it will often try to argue and verbally abuse it, which usually results in the subject sending them out in shame. SCP-056 is quite capable of speech, and can apparently communicate in any language, verbal or not, and has shown fluency in over 200 dialects, including those invented by cryptographers and hobbyists. It frequently treats the staff around it with disdain, though is generally willing to do whatever is asked of it, so long as the inquiring does so in a submissive way. It expresses interest in magazines, fashion, automobiles, theoretical science, sports, and a multitude of other subjects, usually expressing greater knowledge and understanding of the topic than the person communicating with it. Personnel will generally become angry, disenchanted, or disgusted with SCP-056 after speaking with it for great lengths of time, though they will try to speak with it again if possible. When questioned about other SCPs, it showed fear and occasionally hatred, and refused to speak about any of them, even objects classified as Safe.`
  },
  {
    id: "scp56",
    text: `Item #: SCP-057 Object Class: Safe Special Containment Procedures: Site-57 has been constructed to facilitate SCP-057 as relocation is not feasible. It is highly improbable that any outside knowledge of the artifact exists based on the circumstances of its discovery and thus security is of minimal concern. No containment procedures are required other than the prevention of unauthorized access. All research will be delegated to Dr. Lewis and Dr. Walston unless further specified. Due to the irretrievability of those placed inside SCP-057, access will be granted with the approval of no fewer than two (2) members of O5. Description: SCP-057 is a subterranean chamber with an approximate cylindrical height of three (3) meters and diameter of eighteen (18) meters. Artifact is comprised of impenetrable slate-coloured stone. Inside the chamber are dozens of parallelepiped monoliths extending from floor to ceiling that slide in various directions while SCP-057 is active. It was discovered several meters below █████ on ██/██/████ during the construction of a secure containment enclosure for SCP-███. Consequently, SCP-███ was assigned an alternate location at Site-██. An entrance to the chamber is located on the north-east side. When a human enters, the door shuts and the walls inside the chamber move in such a way as to require the subject's constant attention to maintain a safe course through the artifact. The monoliths slowly open and close until the subject either surrenders or exhausts themselves, at which time SCP-057 crushes them and reverts to its original, inactive state after a period of approximately twenty (20) seconds. This process lasts only as long as the subject inside SCP-057 is alive and has proven to take days. Extended testing proposals to gauge the limits of the artifact have been discouraged. All tests on animals, machines, and cadavers have proven futile. Only a living, breathing human being is able to initiate this process upon entering SCP-057.`
  },
  {
    id: "scp57",
    text: `Item #: SCP-058 Object Class: Keter Special Containment Procedures: SCP-058 is to be kept in isolation in a 5 m by 5 m by 5 m containment chamber at all times. Walls are to be constructed of 3 m (10 ft) of reinforced heat-resistant steel, backed with a further 10 m (33 ft) of reinforced concrete. SCP-058 is to be fed a live cow every three days. Maintenance is to be conducted every sixty (60) minutes while SCP-058 is dormant and every fifteen (15) minutes when SCP-058 is active. Under no circumstances is SCP-058 to be allowed out of its containment area. SCP-058 is to be audio recorded at all times. No personnel are to listen to SCP-058 for more than thirty (30) minutes at a time. In case of escape, facility is to be considered compromised and detonation of on-site nuclear weaponry is to commence. To date, SCP-058 has been responsible for the death of at least one hundred and forty-nine (149) Class-D personnel and fourteen (14) Agents at its current site. Description: SCP-058 resembles a bovine heart, with four (4) arthropod-like legs used primarily for movement, and four (4) tentacles of adjustable length, covered with razor sharp spines. It has a single sharp 'stinger' on its rear, where the hole for the superior vena cava would be in a typical organ. SCP-058's tentacles can be "whipped" to a distance of 3.2 m (10.5 ft) at speeds in excess of 320 km/h (200 mph). SCP-058 is extremely hostile and will use every opportunity afforded to it to inflict damage on its surroundings. SCP-058 has been shown to be highly resilient to trauma, and should be approached with caution even when apparently incapacitated. SCP-058 is highly mobile and capable of rapid movement on both horizontal and vertical surfaces. It has been recorded reaching a speed of approximately 90 km/h (55 mph) in short bursts, covering distances up to 200 m (656 ft), and has the ability to accelerate from 0 to 90 km/h (55 mph) in less than two (2) seconds. It has been shown to use its tentacles for increased leverage and stability, as well as utilizing them to pull itself to other surfaces at high speeds. SCP-058 'speaks' in a human voice, though no method of producing sound has been observed in its physiology. It speaks with vocal tone and accent of an elderly British male with a slight lisp and deep voice. SCP-058 talks constantly, regardless of conditions: even when attacking, SCP-058's voice and pace of speech are unchanged. The speech of SCP-058 lacks any detectable correlation to events, persons, or exterior locations involved with SCP-058 (see Transcript of Interview 058-04).`
  },
  {
    id: "scp58",
    text: `Item #: SCP-059 Object Class: Keter Special Containment Procedures: A single specimen of SCP-059 is kept at Site-11B inside a graded-Z laminate shielding box composed of depleted uranium, tantalum, tin, steel, copper, and aluminum. Surrounding SCP-059’s containment box is a 7 x 7 x 7 m area sealed as a Level-4 Biohazard area, and surrounded by 3 cm of lead shielding. This area is to be sprayed daily with a solution of methyl isothiocyanate to prevent overgrowth of SCP-059-1. Personnel entering an SCP-059 affected area are cautioned to wear appropriate biohazard protection, as well as Type K-59-B radiation shielding. They are to remain in the area for no more than 15 minutes, as the radiation shielding is only partially effective. SCP-059-1 infestations found in the wild should be contained by removing the SCP-059 specimen responsible, and incineration of all observed SCP-059-1. Large underground infestations are best neutralized by fuel-air (thermobaric) explosives. Additional specimens of SCP-059 are not needed for experimentation, and should be transported to Site-11B for incineration by plasma arc at 10,000 Kelvin. Description: SCP-059 is a radioactive mineral of unknown origin, superficially resembling scheelite. A component of SCP-059 is believed to originate in an alternate universe, and to be responsible for its anomalous properties. In addition to alpha, beta, and gamma radiation, SCP-059 specimens produce a previously unknown type of radiation, apparently unique to the object, tentatively designated 'delta radiation'. Delta radiation is accompanied by Cherenkov radiation, visible as a blue glow. Delta radiation is only partially contained by standard radiation shielding; the best results have been obtained using graded-Z laminate shielding with an additional super-dense metal layer. This reduces the effective range of delta radiation from approximately 20 m to approximately 6 m. When an area is exposed to delta radiation for more than 15 minutes, an unknown species of fungus (designated SCP-059-1) begins to grow on any exposed surface. This fungus does not require any standard nutrition, but will die within 24 hours of removal from a delta radiation source. SCP-059-1 is itself radioactive, but does not emit delta radiation. However, if a critical mass (approximately ██ kg/m3) of SCP-059-1 is allowed to grow, delta radiation from an unknown source other than SCP-059 will appear in the area, further supporting SCP-059-1 growth. (Interested readers may consult Dr. ███████ for his theories of space-time stress and merger of alternate realities). Within 18 hours, the infected mass will become transparent and disappear, presumably into the universe that is the source of delta radiation. The process then continues with SCP-059-1 infecting new material. SCP-059-1 will infest both living beings and inanimate objects. Humans (and animals) infected with SCP-059-1 become immune to the effects of ionizing radiation, but progressively merge with SCP-059-1, and eventually have all tissues replaced by fungal growth. While generally non-violent, they will attempt to expose unaffected individuals to SCP-059. SCP-059-1 infections do not appear to be directly contagious, but only spread by contact with delta radiation. However, long-term exposure to SCP-059-1 has not been adequately tested to rule out considering it a biohazard (as well as a known radiation hazard). Infected individuals still capable of communication describe seeing a world entirely covered with SCP-059-1, where much of the surface is composed of SCP-059. It is unclear whether this is a hallucination or a view into the source of SCP-059. Infectees are generally pleased with their condition and often refer to being in "the blue light of heaven." SCP-059-1 is affected by most fungicides, but new growth will continue as long as SCP-059 is present. Early stage SCP-059-1 infection in humans may be treated with griseofulvin, however the treatment is 90% likely to lead to death by radiation poisoning. Treated individuals lose their immunity to radiation, and will already have absorbed a now lethal dose prior to treatment. Late stage treatment should not be attempted, as too much tissue will already be converted to SCP-059-1. [DATA EXPUNGED]. The remains of failed treatments should be kept out of range of SCP-059, otherwise [DATA EXPUNGED]. SCP-059 specimens have been discovered in 8 different underground locations, across a range of 5000 km. No pattern has emerged for their appearance. Specimens range from 1-10 kg in size, and are not part of the normal rock formations in the areas where they have been found.`
  },
  {
    id: "scp59",
    text: `Item #: SCP-060 Object Class: Keter Special Containment Procedures: The grove which contains SCP-060 is currently contained in a series of specially-constructed greenhouses at Satellite-Site 66-060. Specimens are to be pruned regularly to keep at a manageable size. Personnel are banned from smoking while within 5km of Satellite-Site 66-060. Personnel are to refrain from bringing lighters, matches, tasers, or any other tool readily capable of starting a fire into Satellite-Site 66-060. SCP-060 specimens are to be watered twice daily and checked weekly for dead plant matter and saplings. Dead matter and saplings are to be pruned, shredded and composted properly in the dedicated facility onsite, afterwards returned to SCP-060's containment chamber. Fragments of SCP-060 may not be moved offsite for any reason without explicit written permission from two or more Level 4 personnel. In the event of a breach by SCP-060-Alpha, personnel are to enter lockdown mode and activate onsite fire suppression systems. Redundant onsite fire suppression systems have been installed throughout the Site, including water and chemical retardants to be utilized in tandem in the event of a containment breach. Portable extinguishers are to be kept available at all times. Containment-Chamber 060-Alpha-001 is a dedicated, circular containment chamber designed to contain SCP-060-Alpha during testing. This chamber is constructed of concrete with a .2 metre thick asbestos coating, with a series of chimneys to allow for ventilation of heat during containment. The walls are fitted with 24 CO2 projectors evenly spaced at 45° angles along the walls and will activate in the presence of temperatures exceeding 200° C. One kilogram of SCP-060 material is to be kept within Containment-Chamber 060-Alpha-001 to be burned in the event of a breach. Description: SCP-060 is a grove of seventeen white oak trees (Quercus alba). The grove is spread across approximately 8 acres in rural northeastern Minnesota. A house on the property was demolished during the construction of Satellite-Site 66-060 after being combed by Foundation personnel for information regarding SCP-060. See addendum. When burned, SCP-060 will produce an entity henceforth designated SCP-060-Alpha. SCP-060-Alpha appears to be an animate adult human skeleton standing approximately 2.3 metres tall and surrounded by bright white flames. SCP-060-Alpha initially burns at a temperature of approximately 1500° C (~2730° F) and will attempt to cause as much damage as possible when active. Burning as little as 20g of SCP-060 will cause SCP-060-Alpha to appear. Only one instance of SCP-060-Alpha will appear at any time; it is theorized that 060-Alpha is a unique entity. SCP-060-Alpha is extremely dangerous, having proven to be hostile and relatively intelligent. It appears to be a single recurring entity, showing a growing familiarity with Satellite-Site 66-060's layout over the course of several manifestations. When given the opportunity, it will throw itself bodily at flammable materials in an effort to cause damage, and assault personnel with a focus on grappling and strangulation. Additionally, it has proven capable of running at speeds of up to 80 km/h (50 mph) in short bursts and leaping approximately 5 metres from a running start. Due to the extreme temperatures produced by 060-Alpha during the initial stages of manifestation, along with its physical capabilities, it is capable of causing large, uncontrolled fires and widespread property damage if left unchecked. SCP-060-Alpha appears to intentionally avoid burning SCP-060 when it becomes active. If SCP-060-Alpha is introduced to a high enough volume of water or other flame-retardant material over a short amount of time, it will begin to weaken to the point that it will collapse into dust. Collapse will occur suddenly with little warning; SCP-060-Alpha will continue to pose a threat up until its collapse. The volume of suppressive material required to subdue SCP-060-Alpha is markedly less than would be expected to quench a heat source of its intensity, with volumes of approximately 500 litres proving sufficient. Areas burned by SCP-060-Alpha will begin to yield sapling instances of SCP-060 over the following four to six weeks. Only one wave of sapling growth will follow any given containment breach, and only one is thought to inherit the anomalous properties of the primary tree - it is difficult to determine safely if this is the case, however. As such, containment protocols assume all white oak trees that sprout within a reasonable distance of SCP-060 instances are assumed to be also 060. Later saplings are easily pulled and should be composted and supplied to SCP-060’s normal containment chambers.`
  },
  {
    id: "scp60",
    text: `Item #: SCP-061 Object Class: Safe Special Containment Procedures: The source code for SCP-061 is to be kept on a standard archival-quality read-only data compact disc (CD-ROM); four copies of the CD-ROM with the source code are to be stored in separate maximum-security inanimate-object lockers. Except for purposes of approved experimentation, SCP-061 is not to be loaded, compiled, or run. Research proposals for SCP-061 require written approval from site command. Only one copy of the CD-ROM containing the source code for SCP-061 may be used at a time; the CD-ROM is to be returned to storage immediately after having been used to load the source code for SCP-061 to a device. SCP-061 must never be loaded, compiled, or run on any device which has a connection to the Internet, either directly or via another device. SCP-061 must never be loaded, compiled, or run on any device which is physically capable of wireless connectivity, regardless of whether that connectivity is in use. For purposes of approved experimentation, SCP-061 may be loaded, compiled, and run on a LAN consisting of no more than 3 (three) devices plus peripherals. No devices are to be disconnected from the LAN during experimentation. Following the conclusion of experimentation, all devices within this LAN are to be immediately reformatted. Audio-output peripherals for this LAN are to be contained within an observation chamber surrounded with noise-canceling vacuum insulation. In the event of a perimeter breach by hostiles during SCP-061 experimentation, all devices within the LAN are to be immediately destroyed. Description: SCP-061 is an acoustic computer program being developed by SCP researchers with the intent of producing successful countermeasures to similar programs being developed by governments and individuals around the world. Inspired by research on [DATA EXPUNGED], SCP Command saw both the potential and harm in the ability to control the brain functions of other human beings. Laymen understand that music can elicit certain emotions and memories or various sounds can elicit fear and excitement by simply being heard. Governments around the world have been attempting to expand on that premise for decades; SCP Research is the first to elicit responses on higher mental activities. Parts of the brain affected by SCP-061 differ from those stimulated by [DATA EXPUNGED] or by subliminal messaging. Instead of acting on parts of the brain that are thought to be in control of the subconscious, acoustic frequencies produced by SCP-061 intercept conscious thoughts as they are produced and replace them. Instead of a suggestion, the human hearing center bisects the conscious thinking mind of the frontal lobe with the motor control cortical homunculus of the brain. A baseline rhythm "convinces" the rest of the brain that the conscious mind is "asleep" and effectively stops conscious thought from continuing to the rest of the brain. In return, the frontal lobe experiences a "pause" that resembles the psychological effects of anesthesia. Acoustic codes developed by SCP-061 are interpreted by motor centers in the brain as conscious instructions and the subject typically acts accordingly. (See Addendum-01) Subjects will normally have a "blank" facial expression while under the influence of SCP-061. They are not responsive to attempts at conversation and express no desires, such as hunger or interest in sexual advances. Though all commands are followed without question, the effects of the auditory control cease once the subject is no longer able to hear the program. Most test subjects report being unable to remember the actions they performed while under control, but a few have experienced the effect of "watching helplessly" as their body acted against their will. The intent of such research is to discover ways to counteract the effects of auditory mind control; however, only two methods of countermeasures have proven successful as of yet. One, the subject's hearing is impaired so that the individual can no longer hear the program, either by covering the ear or deafening the subject. Two, the program itself sends a coded instruction to the hearing center of the brain, permanently shutting it down. Though the ear continues to hear, there has been no progress in finding the proper code to "reboot" the hearing center of the brain. Despite its shortcomings, SCP-061 represents a promising development in the creation of counter-anomalous phenomenon. Further research is ongoing.`
  },
  {
    id: "scp61",
    text: `Item #: SCP-062 Object Class: Euclid Special Containment Procedures: SCP-062 is stored in a dedicated containment cell at Site ██ under clean room conditions. Any experimentation on SCP-062 must receive prior permission from at least two (2) Level 3 Personnel, and must only be performed with independent power sources. SCP-062 must never be attached to an external network, and all data extracted from SCP-062 is to be stored on external nonvolatile media until analyzed. Description: SCP-062 appears to be an unbranded personal desktop computer housed in an aluminum case of indeterminate manufacture. SCP-062 is unusually heavy at approximately 24kg, and lacks manufacturing or branding labels of any kind. The words "infomation is freedom [sic]" were found scratched into the casing near the back, apparently with a key or similar object. Inspection of its interior has revealed that SCP-062 is empty except for a blank circuit board in place of where the motherboard of a standard personal computer would be. SCP-062 will not function unless the case is completely sealed, and attempts to open the case while it is operating cause it to shut down immediately. Despite this, SCP-062 operates as expected for a normal desktop computer with the exception that its performance, operating system, contained data, and language appears to be different upon every activation. SCP-062 was discovered in the basement of the University of ████ Computer Science Laboratory by [REDACTED]. An embedded Foundation agent seized the object and brought it to Site ██, where it has since been contained.`
  },
  {
    id: "scp62",
    text: `Item #: SCP-063 Object Class: Safe Special Containment Procedures: SCP-063 is to be kept at all times within Dr. ████'s personal bathroom, located within the personnel quarters upon Site 19. Object is to be used as designed at least once in a twenty-four (24) hour period or the object will begin to emit an unknown specialized radiation that results in objects and material within a 0.6 m (2 ft) radius being slowly warped and eventually disintegrating into a fine dust. Radiation's effect on living test subjects has not been monitored. Description: SCP-063 appears to be an average, pale blue toothbrush. Stenciled along the side of the object are the words “The World's Best TothBrush [sic]”. The word "toothbrush" is spelled incorrectly, though whether this was accidental or a purposeful action by the creators of the object is unknown. SCP-063 displays the ability to effortlessly cleave through any and all dead or inorganic matter, the focal point of this ability being the bristles. However, matter touched by the bristles is not separated, such as by way of a knife, but completely expunged from existence, leaving no trace whatsoever. This mode of operation is reminiscent of SCP-2207, suggesting the two anomalies share a connection or were created by the same entity or entities. Additionally, subjects who have used SCP-063 have claimed that the experience left their teeth feeling remarkably clean. In spite of its extraordinary abilities, lab analysis has discerned that SCP-063 is completely made of common plastic.`
  },
  {
    id: "scp63",
    text: `Item #: SCP-064 Object Class: Safe Special Containment Procedures: SCP-064 is to be kept in a suitably remote area for observation. Current goals are to generate a geometric model of the object's behavioral pattern and to observe any changes in this pattern due to location and soil composition. Certain sites in the Gobi Desert and Australian Outback, as well as a number of salt flats scattered around the globe, are under consideration for future testing. SCP-064's current location is classified to all personnel under security clearance Level 3. Once growth has stopped, field teams are to document the structure's size, shape and composition and remove the object for transport to a new site. Description: SCP-064 is a light brown earthenware brick composed primarily of silicon oxides and some organic matter. The object weighs 1.6 kg and measures some 10 cm x 6 cm x 20 cm. Its surface is smooth and flat, with some minor cosmetic chips. By and large, the object is visually similar to most solid bricks used in construction. When left lying on a flat expanse of soft earth, SCP-064 will begin to multiply through an unknown mechanism. Close observation reveals the appearance of an irregular lattice of silicon fibers in the shape of the original object, which then fills and solidifies with a soil-based mixture until it attains the proper mass. This process may be similar to mycelial propagation in fungi, with microscopic root structures 'mining' minerals from soil in the immediate vicinity. Under optimal conditions (soil composition at roughly 90% silicon dioxide [SiO2]), it takes approximately seventy minutes for one complete brick to appear. Given a large expanse of earth to work with, SCP-064 produces a highly complex but theoretically stable freestanding brick structure, including floors and ceilings. Past observations indicate that the structure could attain the shape of a twelve-pointed star, over 10km in diameter and of considerable height. However, this is speculative, as growth stops permanently once the structure contacts a significant obstacle, observed to include any solid object over 10 kg in mass. Structural integrity is very high, as bricks orient themselves to be as level as possible and fit together almost perfectly. Interestingly, the structure's growth is tailored to a specific set of cardinal directions, with SCP-064 always being the northernmost brick on the lowest level. SCP-064 must be attached for growth to occur. Once SCP-064 is removed, the structure begins to decay, and all secondary bricks crumble to dust at a rate roughly equal to their rate of appearance. Replacing the object within twenty minutes halts this decay and allows growth to continue; past this threshold, the process is irreversible. SCP-064 was found by chance in April of 20██. During satellite observation of an elevated plateau in the Andes mountains, a camera operator noted that one structure was apparently growing. Extrapolating the object's approximate location from the structure's apparent direction of growth (which stopped during recovery), field teams located the object by differences in color between SCP-064 and its secondary bricks, which were high in iron oxides from the local soil. A full excavation of the original site is underway in order to ascertain the object's cultural and technological origins.`
  },
  {
    id: "scp64",
    text: `Item #: SCP-065 Object Class: Euclid Special Containment Procedures: As SCP-065 cannot be moved, it has been contained on-site and Site ██ has been established around it. Site ██ has been marked as a government research facility off limits to civilians, and unauthorized individuals attempting to gain access to the area are to be detained, questioned, and administered a Class A amnestic if deemed necessary by site security. An area 17 m in radius around the center of SCP-065 has been designated the Red Zone. Personnel may not enter the Red Zone of SCP-065 at any time, and experimentation with SCP-065 may only be performed with prior approval from at least two (2) Level 3 senior research staff. Personnel at high risk of cancer must not be assigned to Site ██, and all Site ██ personnel must undergo mandatory monthly physical evaluations including cancer screenings. Description: SCP-065 is a spherical region of space approximately 12 m in radius located on a farm near [REDACTED]. SCP-065 was formed by the destruction of an anomalous artifact on-site by the Global Occult Coalition on ██/█/██; immediately following this initial event, the radius of SCP-065 was estimated to have initially expanded to 108 m in radius, resulting in the deaths of eleven (11) GOC operatives and five (5) civilians. Since containment by the Foundation, the effective radius of SCP-065 has shrunk to and remained stable at its current size. SCP-065 causes abnormal transfiguration of any living organism within its area of effect. These effects include but are not limited to: -Regression of specialized cells to an undifferentiated stem state. -Spontaneous separation and fusion of undifferentiated cells. -Spontaneous necrosis of living tissue and reanimation of dead tissue. -Rapid genetic mutation of living tissue. These effects occur at a rate proportional to the mass and complexity of the organism: plants and insects show few if any effects, small animals will exhibit alterations following several days of exposure, larger animals will show harmful mutations within hours, and all human subjects exposed to the Red Zone have been fatally altered within approximately fifteen (15) minutes of exposure. To date, all attempts at directly observing the center of SCP-065 have failed, as SCP-065 causes a form of extreme sensory confusion in all observers that extends to recording equipment. Affected personnel have reported highly distorted vision and hearing that persists for several hours and can result in severe dizziness and nausea.`
  },
  {
    id: "scp65",
    text: `Item #: SCP-066 Object Class: <s>Safe</s> Euclid Special Containment Procedures <s>SCP-066 is to be kept in a safe-deposit box at Site 21. Personnel Level 2 or higher may perform experiments on SCP-066 after filing the relevant request forms. Researchers may log their results in Experiment Log 066-Beta.</s> SCP-066 is to be kept in a tungsten carbide box in Site 21’s high-value item storage facility. Once every month, this box must be manually inspected for damage to the interior;1 if damage is present, SCP-066 must be moved to a new box. This task is performed via a robotic arm capable of performing the task in under three seconds. Description: SCP-066 is an amorphous mass of braided yarn and ribbon weighing approximately one kilogram. Strands of SCP-066 may be taken individually and manipulated; when this is done, a note on the diatonic scale (C-D-E-F-G-A-B) is produced by the object. When a set of six or more notes are produced, SCP-066 will produce an effect of varying nature and duration. SCP-066 will not respond to manipulation while any effect produced by it is in progress. Prior to Incident 066-2, results have included: -SCP-066 transformed into a small calico kitten for seventeen minutes. The kitten exhibited significant friendliness and playfulness, and appeared to be declawed. -A song lasting four minutes, acoustic guitar with vocal accompaniment by singer/songwriter [REDACTED]. The lyrics warned the listener not to use sharp objects without parental supervision. -A small cupcake, chocolate with chocolate frosting and a lit candle stuck in the top. Notably, the tones produced prior to this effect corresponded to the opening notes of “Happy Birthday”. SCP-066 became responsive after said cupcake was consumed.`
  },
  {
    id: "scp66",
    text: `Item #: SCP-067 Object Class: Safe Special Containment Procedures: When not in use or the subject of study, SCP-067 is to be stored in its felt-lined wooden box. The nib is to be corked, and all art and writings are to be submitted to SCP Research command for analysis and further experimentation. Description: SCP-067 is a fountain pen made by a German supply company called Pelikan at some point between World War I and II. It is pale green in color, with a single red line going straight down along the side. The shell is oak and the nib is extremely sharp, capable of piercing human skin if pressed even lightly. Though it apparently lacks a reservoir, the nib never appears to run out of fresh ink. In addition, the pen writes in Iron Gall ink, which is suitable for artists but would normally corrode typical fountain pens quickly. Research has surmised that any subject holding SCP-067 loses all autonomy of the hand and arm that grasps it. Full sensation is intact, but the arm below the elbow is controlled by unknown forces, theoretically centralized within SCP-067. One effect is that the "controlled" hand will start to use the pen to write a detailed biography of the individual holding the pen. The biography will include such information as the person's name, age, date of birth, criminal record, fears, etc. Other times the pen has been known to write such things as an occurrence that happened in the person's lifetime. For example, when Test Subject 1204M held SCP-067, he began to write a detailed record of a motor vehicle accident he had been in the year before. Later, the subject admitted that many details penned in the account were not readily available to him at present time (i.e. the subject had forgotten many elements present in the written work, including his previous car's license plate number, the other vehicle's color, and so on). The subject stated that his memory of the event was so fresh in his mind during the transcription that he "could taste the blood in his mouth." Subjects holding SCP-067 have also been known to create intricate works of art, despite the subject lacking any formal art training or previous tendencies toward drawing. For example, Test Subject 1102F, a young woman with no previous artistic experience, was able to draw a winged creature resembling SCP-███, described by researchers present as [DATA EXPUNGED]. When subjects are asked to explain what happens when they hold SCP-067, the typical response is that the subject freely relinquishes control of their appendage to SCP-067 so that it may complete its work unimpeded (see Quoted Response-01). Despite being instructed to not draw or write, subjects describe feelings of empathy, admiration, and cooperation with SCP-067 that coerces them toward a will not their own.`
  },
  {
    id: "scp67",
    text: `Item #: SCP-068 Object Class: Safe Special Containment Procedures: SCP-068 is to be kept away from any metals in an electrically-resistant box, preferably made of polytetrafluoroethylene (teflon) and rubber. Said box is to be stored in security locker 26 at Site 11. Key is kept with Dr. █████. Any requests for testing are to be redirected to him. Description: SCP-068 is a wire stick figure, 9.8 cm tall, made of an unknown metal. The figure is composed of a single wire looping back to the center. The wire itself appears to have been bent numerous times in multiple places. When an electric current is introduced to SCP-068, it becomes animate, moving about on its own. SCP-068's "joints" are where a normal human being's would be. Once activated, SCP-068 begins to search for any metallic material. Once metal has been found, SCP-068 will begin to knead it and pull a thin strip of metal off. SCP-068 will then construct another figure similar to itself. The newly-created figure will begin to knead the remaining metal alongside the original, creating new figures, which in turn, produce more replicas. SCP-068 will move onto its next stage after one of two requirements are met. The first is when there are no more metals in range with enough mass to produce another figure, the other is when an upper limit of 102 replicas are created. When either of these events occur, all figures will converge at one location and begin forming themselves into as big a figure as possible. With a maximum of 102 "mini-figures", the resulting figure reaches two meters in height. SCP-068 situates itself in the intersection of the torso, arms and head. Gamma, beta, and theta waves begin emanating from SCP-068 after this union. SCP-068 will then begin to search for metals again attempting to create more figures, only scaled up to whatever size 068 is currently at. These replicas do not emanate brain waves like 068 does. If 068 is not at the maximum size limit after this, it will continue to create and add more figures to itself until the limit is reached. Once it has reached the second stage and there are no metals available from which to construct figures, SCP-068 returns to its dormant state after 4 minutes and 32 seconds of activity. Material surrounding the original figure must be melted away in order to retrieve 068. SCP-068 is capable of kneading and manipulating any metal presented to it, regardless of properties. It also appears to be impervious to any attempts to damage or destroy it. Copies of SCP-068, however, have the same properties and vulnerabilities as whatever metal they were constructed from. SCP-068 can detect metals hidden from view through an as-of-yet-unknown process. While 068 will not attempt to reach metals that are too difficult to get to, it will tear through anything that is soft enough for its limbs to penetrate. What it considers "soft enough" changes depending on what 068 is shaped from at the time.`
  },
  {
    id: "scp68",
    text: `Item #: SCP-069 Object Class: Safe Special Containment Procedures: SCP-069 is currently impersonating former Foundation Agent ███████ █████, and is housed at Humanoid Containment Site-06-3. As SCP-069 is currently on suicide watch, all requests it makes must be approved by no fewer than two (2) Level 3 personnel. If SCP-069 attempts to breach containment, it must be subdued using non-lethal methods. If SCP-069 dies, undercover agents are to be instructed to monitor reports of incidents in which individuals appear to have escaped certain death and SCP-069 is to be re-contained as soon as possible. <i>Note: Despite the fact that SCP-069 is identical in all ways to Agent █████, it remains an active SCP in containment, and is not to be treated as a Foundation employee. Any requests for classified information are to be denied, and visits from former co-workers without proper authorization are not allowed.</i> Description: SCP-069 is a presumed humanoid entity of variable appearance and gender. Through an unknown ability, whenever SCP-069 is left alone with a recently deceased human body, the body will disappear and SCP-069 will take on the appearance, mannerisms, and knowledge of the recently dead individual. Through extensive experimentation, it has been shown that SCP-069 is completely indistinguishable from the individual it impersonates, matching the original individual's fingerprints, DNA, and [DATA EXPUNGED] with nearly perfect precision. SCP-069 retains no knowledge of its abilities or former impersonations. SCP-069 responds normally to injury and pain, but if killed, will rapidly decay into dust regardless of any preservation attempts. SCP-069 will then re-emerge at the site of the most recent human death. There is no known maximum range to this effect, and so far has been observed in jumps of up to 675 kilometers. SCP-069 can impersonate a single individual indefinitely. However, it will gain an overriding urge to "get their life in order", including but not limited to: resolving any outstanding financial or personal obligations, visiting extended family, updating their will and testament, and other acts of closure. When questioned, SCP-069 professes no driving motivation other than a desire to straighten out their lives in the event of unforeseen injury or death. SCP-069 first came to the Foundation's attention on █/██/199█ following reports of one John M███████, a █████████ City firefighter who miraculously emerged alive from a 3-alarm building fire in which 2 other firefighters and 11 civilians perished. Undercover agents attached to the local authorities were notified of a possible SCP when reports emerged that the firefighter's equipment had been damaged beyond recognition, and that it had been deemed nearly impossible for the firefighter to emerge unscathed. Approximately three weeks later, then-presumed John M███████ responded to another large-scale building fire, during which he entered a smoke-filled room alone and was never found. A single civilian was rescued from the building, again nearly unharmed despite the heavy smoke reported within the building. SCP-069 was designated the following day, and rendered into Foundation custody by members of Mobile Task Force Xi-3 ("Body Snatchers").`
  },
  {
    id: "scp69",
    text: `Item #: SCP-070 Object Class: Safe Special Containment Procedures: SCP-070 is to be kept within a 10 meter by 10 meter reinforced-concrete room that is to be guarded and remotely monitored at all times. This room must always be well-stocked with non-perishable food and water (see Document 070-IC for a complete inventory of these items), as well as basic amenities for humanoid SCPs. Security personnel assigned to SCP-070 are to carry sticky-foam guns in addition to standard armaments. Structural integrity of SCP-070’s containment room is to be checked twice daily. In case of excessive structural damage, SCP-070 is to be incapacitated and relocated to a nearby backup containment room as described above. If a reinforced-concrete room of sufficient strength is not available, SCP-070 may be temporarily contained in a cell of stronger material until another concrete room can be prepared. SCP-070 is to be given sedatives and painkillers on request, but no more than maximum dosages determined by Dr. Dumount. Personnel who enter SCP-070’s containment room for any reason must be unarmed and should wear puncture-resistant body armor. Armed guards must remain outside and out of sight of SCP-070. In case of containment breach due to somnambulism, security personnel are to alert Site Administration, place food and water in the apparent path of SCP-070, and maintain a clear zone of 25 m around SCP-070. In any other case of containment breach, or if SCP-070 becomes violent during somnambulism, personnel are authorized to incapacitate SCP-070 using sticky foam (care must be taken to avoid smothering SCP-070). Because SCP-070 reflexively responds violently to injury or attack, security personnel should refrain from using lethal force or otherwise injuring SCP-070 if at all possible. Description: SCP-070 appears to be a human male of Native American descent, with a normal appearance save for a pair of rusty metal “wings” emerging from his back. Each wing is composed of several flat iron bars about 6 cm wide connected end-to-end by rotating rivets to form an articulated length of metal over two meters long. Hanging from these bars are chains of various lengths, twenty-two on each wing, each tipped with a barbed arrowhead. SCP-070 appears to have no other anomalous properties besides these wings. The wings of SCP-070 appear to act independently of the person they are attached to, and SCP-070 has stated repeatedly that it has no control over them. However, when damage has been done to the wings, SCP-070 has shown signs of physiological distress, including sweating, reduced blood flow to face, and screaming in pain. The wings have been observed to fold and expand, shoot out and whip its chains at high speed (both individually and collectively), and anchor its arrowheads into concrete, wood, and like materials. While SCP-070 has not displayed any overt hostility to personnel, it will often react violently to perceived threats by lashing its chains out at assailants, and wrapping its chains around its body in a defensive posture. The most effective means of subdual has proven to be sticky foam (non-lethal weaponry), which can reliably ensnare SCP-070’s chains from a safe distance. Despite their rusted appearance, the wings and chains of SCP-070 are as strong as high-quality alloy steel. However, they are also as dense as steel, and SCP-070 cannot move about as a normal human due to the weight of its wings. As yet, SCP-070 has been unable or unwilling to use its wings to facilitate human locomotion. SCP-070 spends much of its time anchored to the walls and ceiling of its containment cell, usually sedated.`
  },
  {
    id: "scp70",
    text: `Item #: SCP-071 Object Class: Euclid Special Containment Procedures: SCP-071 is contained in a modified Standard Humanoid Containment Cell with no direct observation capabilities. Surveillance of SCP-071 may only be performed via closed circuit video with a minimum of 60 seconds of delay. Experimentation with SCP-071 may only be performed with permission from at least two (2) Level 4 Site Directors, and personnel entering SCP-071’s containment area may only do so in groups of at least four (4). Any personnel exhibiting unusual or compulsive behavior must be removed from the area immediately, given a full psychiatric screening, and either administered a Class C amnestic or reassigned as deemed appropriate. Under no circumstances should personnel be permitted to observe SCP-071 directly or through non-delayed surveillance footage. All visual recordings and photographs of SCP-071 must be destroyed immediately once they are no longer needed. Description: SCP-071 is a metamorphic entity that possesses the ability to assume forms consistent with that of its observer's strongest sexual desire. This ability is effective even through barriers designed to prevent SCP-071's recognition of any observers such as through closed circuit surveillance or one-way mirrors, but can be prevented by introducing a delay in surveillance footage so that such observation does not occur in real-time. SCP-071 appears to be unable or unwilling to change form without external stimuli, instead remaining in its last form when left unobserved. There appears to be little or no limit to the forms SCP-071 is capable of assuming (see Addendum 071-01 for additional information). SCP-071 also appears to be intelligent. However, as it has not shown any ability to verbally communicate and its behavior is limited to actions which entice its observers to sexual activity, it is unknown whether SCP-071 actually possesses sentience or merely mimics behavior expected by its observers. Human subjects allowed to engage in sexual activity with SCP-071 suffered rapid atrophy of muscle, skeletal structure and brain function, with onset occurring 1-2 days after contact. The atrophy persists for up to seven (7) days, dependent on physical therapy administered after onset, though the subject may also suffer permanent decrease in stature, decreased organ function, decreased brain mass, and sterility. Subjects who achieve auto-gratification through masturbation via the use of media containing SCP-071 (whether delayed or not) suffer the same effects. SCP-071 came to the Foundation's attention on ██/██/██ following [DATA EXPUNGED]. Due to ongoing medical cases consistent with exposure to SCP-071, efforts to remove all visual recordings of SCP-071 from the Internet are ongoing.`
  },
  {
    id: "scp71",
    text: `Item #: SCP-072 Object Class: Safe Special Containment Procedures: All known instances of SCP-072 are to be contained in a 3.5 by 4 meter holding cell. Access is allowed only during authorized testing procedures. Without prior approval from Senior Researcher Grant, no materials created for the purpose of being slept on are to be introduced into a 15-meter vicinity of the holding cell. Description: Instances of SCP-072 were first discovered in an apartment building in ████████, Michigan, after two local media reports on SCP-072’s effects caused a local panic which drew the attention of embedded Foundation Agent ███████. SCP-072 is a shadowy and translucent projection which resembles a .9-meter-long hand, the ‘fingers’ of which taper to a sharp point. Detailed recording of SCP-072 is difficult, as it does not manifest at light levels above 5 lux. Instances of SCP-072 have only been observed to manifest when a human (hereafter referred to as “the subject”) enters REM sleep while located in a bed ‘infected’ by SCP-072 and leaves a foot or feet exposed to open air. If these conditions are satisfied, SCP-072 will emerge from the foot of the bed and appear to use its pointer finger to ‘tap’ on the subject’s foot until they awaken. Subjects have reported that, at this point, they were unable to move, showing symptoms similar to sleep paralysis. This continues as long as SCP-072 is visible. SCP-072 will then use its pointed fingers to cut portions of flesh from the exposed parts of the subject's foot or feet. It will return to within the bed in between each removal, emerging without the collected material. This will continue until SCP-072 has taken all of the exposed foot or feet, stopping at the ankle. Though subjects exposed to SCP-072 report this process to be immensely painful, its paralytic effects render them unable to scream or call for help. It is unknown if manifestations of SCP-072 feed on the collected material or use them for some other purpose. As long as the wounds are properly treated, SCP-072’s effects are not fatal, but have been observed to cause psychological damage relating to sleep in the future. There is also a secondary effect: Any bed within an approximately 10-meter vicinity of a bed which manifests the effects of SCP-072 will also host an instance of SCP-072. Destruction of a bed affected by SCP-072 reveals no anomalous materials and no trace of biological material removed from subjects.`
  },
  {
    id: "scp72",
    text: `Item #: SCP-073 Object Class: Euclid Special Containment Procedures: SCP-073 is to be kept in a two (2) room cell furnished with all non-organic furniture and items, and a bathroom. Subject is allowed to freely wander the facility and eat in the main canteen. A tracking device has been attached to SCP-073's person and is not to be removed. Subject is disallowed any contact with the surface, and is not allowed outside the facility. Subject is allowed no contact with plant-based SCPs under any circumstances. Violence is not to be used against SCP-073 under any circumstances. SCP-073 is currently kept in Site-17. Description: SCP-073 appears to be a heavily-tanned male of Arabic or Middle Eastern descent in his early thirties, 185 cm (6'1") tall and 75 kg (165 lbs), with black hair and blue eyes. Arms, legs, spinal cord, and shoulder blades of the subject appear to have been replaced with artificial versions of unknown make and metal. Subject only takes notice of this when it is pointed out, and states that it has no knowledge of how, why, or when these replacements took place, stating it had had them as long as it could remember. There is a symbol engraved into the forehead of the subject, which appears to be of Sumerian origin. Symbol has of yet been untranslated, and subject appears distressed when the symbol is mentioned at all, refusing to speak on it. Subject does need to eat and drink on a regular basis, but is strictly carnivorous owing to its effect on plant-based items. SCP-073, who refers to itself as "Cain", is generally polite and genial to all who speak to it, though it has been described as being cold and somewhat mechanical in its speech. It is very helpful, and enjoys aiding personnel in their daily actions, whatever they may be. It has highly detailed knowledge of ancient to recent events in history, and most commonly spoken languages in the world, including ones that have since died out. Subject has professed to having a photographic memory, remembering word-for-word all text in an eight-hundred-page dictionary that was flicked through in a minute and a half. It has scored above average in all intelligence tests given to it. SCP-073's presence is inimical to any and all life grown in soil, causing death to any such life within a twenty (20) meter radius. Any land SCP-073 has walked on (and any within the twenty [20] meter radius) becomes barren as all anaerobic bacteria dies, rendering the soil incapable of supporting life until new bacteria are introduced. Anything that is derived from soil-grown life, such as wood and paper, immediately rots and disintegrates upon touch of SCP-073. Further affected derivatives include anything hydroponically grown. Violence directed towards SCP-073 reflects any damage inflicted on SCP-073 directly back onto the attacker, although SCP-073 visibly remains unharmed. This applies to any damage directed at SCP-073. Attempts to get tissue and blood samples have proven futile: when the procedure was initiated, personnel carrying out the action felt the sensation of whatever was applied to SCP-073, and wound up with a sample of their own blood or tissue, despite the fact that ''all actions were directed solely at SCP-073''. Indirect damage through a medium also results in the person perpetrating the action receiving the wounds caused. Although SCP-073 receives no actual harm from damage to its person, it has stated that it still feels the pain of the action, and has politely asked researchers to abstain from overly harmful actions to its person.`
  },
  {
    id: "scp73",
    text: `Item #: SCP-074 Object Class: Euclid Special Containment Procedures: SCP-074 is contained at Site 81. SCP-074 is an active infohazard. No research in evaluating its anomalous properties is to be conducted. All personnel who have previously engaged in research into SCP-074's anomalous properties, who have a post-secondary or greater education in physics, or who have accessed Archive 074-317E, must never come within 5 km of SCP-074. SCP-074 is contained within a 6m x 6m x 3m reinforced glass chamber, filtered to block all ultraviolet light, and situated within a windowless room lit by monochromatic safelights, which serves as secondary containment. The containment chamber is to be surrounded with scaffolds bearing sheets of live cultured human skin held parallel to the surfaces of the containment chamber, and arranged overlapping each other such that lateral coverage is at least 95%. Skin sheets must be a minimum of 3 (three) millimetres thick, and warmed to 37 (thirty-seven) degrees Celsius, and must be grown from samples provided by D-class personnel with no less than a middle-school education and no more than a high-school education. All skin sheets are to be examined on a daily basis for instances of SCP-074-1; all instances of SCP-074-1 are to be excised and incinerated. SCP-074 is to be fed 75 grams of fresh shredded apple (genus Malus) leaves, bark, and fruit, hydroponically grown to ensure lack of pollutants and foreign organisms, once a day, via a mechanical dispenser. In the event of a spontaneous containment breach, personnel can coerce SCP-074 into returning to its containment by first occupying each of its four sets of jaws with an entire raw apple, then physically pushing SCP-074 in the desired direction, gently tapping its compound eyes with an open palm, or spraying its front pair of antenna with a 0.5% solution of methanoic acid. Description: SCP-074 is an anomalous organism which uses various quantum properties at a macroscopic scale, and in other ways modifies the standard laws of physics within its immediate vicinity. The specific nature of these modifications appears to be linked to the extent to which humans in SCP-074's vicinity are aware of the precise details of the physical laws which SCP-074 modifies, such that research to determine whether SCP-074 has a given property or capability, results in SCP-074 developing or manifesting that property or capability. Archive 074-317E — a full list of the anomalous physical phenomena known to be, or to have been, associated with SCP-074 — is available to personnel level 3 or higher; personnel who access this document will be disqualified from working with SCP-074, or for any other reason coming within 5 km of Site 81. SCP-074 has repeatedly manifested the ability to spontaneously materialize at locations as much as 3 meters outside its primary containment; this is believed to be, or to be analogous to, quantum tunnelling. Foundation entomologists have tentatively identified SCP-074 as belonging to the order Isopoda, commonly known as a 'woodlouse'. Its inertial mass is approximately 1700 kilograms, but its gravitational mass is approximately 375 grams; its volume has been estimated at 1.7 cubic meters, approximately the size of a compact car. SCP-074 is female and parthenogenetic; periodically, the globular organ at the tip of its ovipositor luminesces, and emits what was originally thought to be a form of non-ionizing radiation, but which has since been identified as "coherent wavepackets" of the probability of one of SCP-074's self-fertilized eggs (henceforth SCP-074-1) "reifying". Instances of SCP-074-1 preferentially reify and incubate within the flesh of humans with knowledge of physics. In the absence of suitable humans to serve as hosts, the wavepackets will reify within other organisms, or within inanimate objects; however, rather than incubating, the eggs will wither and die, leaving perforations similar to radiation damage at a macroscopic scale. The wavepackets appear to decay over time, as no wavepackets or instances of wavepacket-related damage have been detected at distances greater than approximately 400 m from SCP-074. The rate at which successfully-incubated instances of SCP-074-1 mature appears to be dependent on the host's exposure to ultraviolet light: within a host exposed to an average of 30 minutes of unfiltered sunlight per day for a month, an instance of SCP-074-1 was observed to grow from 2 milligrams to 8 kilograms, whereas within a host totally isolated from natural light for a month, the three simultaneous instances reached sizes at excision of only 600g, 680g, and 710g. The complete developmental history and life cycle of SCP-074-1, including how they emerge from their host, and their size at emergence, is not yet known.`
  },
  {
    id: "scp74",
    text: `Item #: SCP-075 Object Class: Euclid Special Containment Procedures: SCP-075 is contained in a 1 m x 1 m x 1 m Level-4 corrosion-resistant container, which must be contained in a secure chamber with equal corrosion resistance. The absolute humidity of the chamber may not exceed 1% at any time. Medicinal-grade desiccants must be available at all times in order to maintain this level of humidity. If the humidity of SCP-075's chamber ever exceeds 1%, all personnel are to be evacuated immediately and the site will be locked down until the humidity is reduced to acceptable levels. All personnel who enter SCP-075's containment chamber must wear MOPP Level 4 protection. Injection tests, as well as any test which involves an aqueous solution, are strictly forbidden. If any such solution comes into contact with SCP-075, the area will be immediately locked down and flooded with desiccant until the humidity is brought back to acceptable levels. Evacuation of personnel remaining in the area is prohibited. Description: SCP-075 resembles a large snail 20 cm in length, 13 cm in width, and 15 cm in height, with a muscular foot resembling a six-fingered, clawed hand. SCP-075 is exceptionally heavy, with a mass of approximately 860 kg, a property that is not understood. Desiccation is the only known means of containing SCP-075, as it will enter a dormant state when nearly completely dry. When not desiccated, SCP-075 moves at incredible speeds for its size and mass. It adopts the behavior of a predator, jumping at and drenching its prey in a highly caustic base solution secreted from pores on its foot. These secretions are more corrosive than any substance known to terrestrial science. Due to SCP-075's aggressive behavior when active, this compound cannot be harvested. No material completely resistant to its corrosive power has been found. `
  },
  {
    id: "scp75",
    text: `Item #: SCP-076 Object Class: Keter Special Containment Procedures: Containment Area 25b is to be located 200 m below sea level, tunneled out of solid bedrock in a seismologically stable area. Sole access to the containment facility is to be through a vertical elevator shaft separated every fifty (50) meters with a reinforced blast door, constructed of 20 cm thick material shielding. Elevator shaft shall be flooded with seawater when not in use. Containment Area 25b is to be constructed with the following components: -An Outer Security Perimeter against outside threats, staffed by security personnel trained in close quarters battle and counter-intrusion tactics. -An Administrative and Support Area (ASA) consisting of support facilities and living quarters for on-site personnel. -A Primary Containment Zone (PCZ), consisting of a 7 m cube encased in 1.5 m of reinforced material. PCZ is to be designed to be flooded and drained as needed, and should remain filled with seawater unless access to contents is required. -A 150 m "killing corridor" which is to be the sole access to the PCZ from the ASA (including water, power, drainage, and ventilation lines). The walls and floor of the corridor are to be reinforced in a similar manner to the PCZ, with the addition of an electric deterrence system capable of delivering a 20,000 volt shock. A security station located at the entrance to the killing corridor is to be staffed with no fewer than three (3) armed security personnel on watch at any one point in time. Armament is to include, but not be limited to, at least one (1) ███████ CIW system on a pintle mount with a clear line of sight down the corridor, with a plexiglass screen to protect the operator from thrown weapons. In the event of a full breach, all on-site staff are to proceed immediately to the closest security station for weapons and armor distribution. Staff will remain at Alert Condition One until SCP-076-2 is confirmed neutralized. Should 90 minutes pass after declaration of full breach without a Stand Down order being given by Level 4 or higher personnel, Final Contingency Measures will be activated, flooding the entire facility in seawater and sealing off the access shaft for a minimum of 24 hours before retrieval is attempted. This will, by necessity, result in the deaths of all on-site staff. Description: SCP-076 consists of two components: a stone cube (SCP-076-1) and a humanoid entity contained within (SCP-076-2). SCP-076-1 is a 3 m cube made of black speckled metamorphic stone. All surfaces outside and within SCP-076-1 are covered in deeply engraved patterns corresponding to no known civilizations. Radioisotope analysis indicates that the object is approximately ten thousand (10,000) years old. A door is located on one side, sealed with a lock 0.5 m in width, surrounded by twenty (20) smaller locks in a circular pattern. As of yet, none of the keys have been found, making the door impossible to lock once closed. Interior temperature is approximately 93 Kelvin, and cannot be altered by any means, internal or external. Directly in the center of the room is a 2.13 m tall stone coffin, held in place and sealed shut by several chains of unknown make and substance, which are attached to the inner corners of SCP-076-1. SCP-076-2 resembles a lean Semitic human male in his late twenties. Hair is black, and eyes are gray, skin tone olive. Subject is 1.96 m in height and 81.65 kg in weight. Numerous tattoos depicting arcane and occult iconography are present all over the body (mostly in the form of leering demonic faces) and ranges from subtle to openly ostentatious. Subject, when encased inside SCP-076-1, is technically dead. However, occasionally SCP-076-2 will awaken, effectively "reanimating", complete with all vital processes needed to sustain a living human being. Subject will then attempt to leave SCP-076-1. If successful, subject will enter a trance state and seek out the nearest human being, ignoring all other living things in the process. Upon coming into contact with living humans, SCP-076-2 will enter a rage state in which it attempts to engage and kill all human beings encountered. To date, only the subject's death has been shown to be effective in ending these rampages. Terminating SCP-076-2 is often problematic due to its significant physical abilities. Subject has superhuman strength and speed, and although not invulnerable, has shown a remarkable ability to ignore pain and shock, pressing on despite what would be debilitating wounds in normal humans. Prior encounters have shown that SCP-076-2 has the ability to (among other things): -Rip through a reinforced steel security door over the course of four (4) minutes of sustained assault. -Clear over 64 m of distance in under three (3) seconds. -Take multiple .50 caliber BMG rounds to the head and survive for several minutes to continue killing, despite severe damage to the cerebellum. -Swat handgun and assault-rifle caliber bullets out of the air with a length of steel rebar. -Survive for over one (1) hour deprived of oxygen before finally asphyxiating. -SCP-076-2's most unusual ability, however, is its ability to apparently materialize bladed weapons out of nowhere. Slow-motion video footage reveals that the blades in question are actually pulled from a miniature dimensional rift described as a "small hole in space." Where this portal leads is unknown, as is how SCP-076-2 is capable of generating said rifts. Footage of the blades in question shows them to be made out of a completely non-reflective black material appearing as a "black void in space." As the blades rapidly vanish after leaving the subject's possession, no structural analysis is possible at this time. SCP-076-2 has effectively been killed several times in various manners: -Sustained fire from multiple heavy-caliber machine guns. -Asphyxiation. -Crushed beneath a 13.6 metric tonne piece of elevator equipment for use on SCP-076-1. -Cremation through the use of a Thermate-TH3 grenade placed directly inside SCP-076-2's open chest cavity. -During the worst breach to date, Containment Area-25 (which previously housed SCP-076) was forced to detonate its on site warhead as a last attempt to contain SCP-076-2 while it was attempting escape, resulting in total destruction of the site and all on-site personnel. SCP-076-1 survived. -Upon death, SCP-076-2's remains will putrefy rapidly, until reduced to dust. SCP-076-1 and the coffin within will then slam shut with great force, and the lock will rotate, sealing it shut. SCP-076-2 will then reform within the coffin, a process taking anywhere from six (6) hours to twenty-five (25) years. -What posthumous analysis of SCP-076-2 exists shows that it has a internal system highly different from our own, documented in [DATA EXPUNGED].`
  },
  {
    id: "scp76",
    text: `Item #: SCP-077 Object Class: Euclid Special Containment Procedures: SCP-077 is to be kept in Research Sector-861 on top of a 0.5 m steel pedestal in a 3 m x 3 m x 3 m chamber with 0.5 m thick steel-reinforced walls. The reinforced steel hatch-door to the chamber is to comply with AH37-Protocol, and is to be guarded at all times by two (2) Level-1 personnel. A boom mic connected to a speech recognition system should verify that all pronunciation is within standards. A camera is to be mounted within the chamber to record any changes. Every eight (8) hours, a minimum of two (2) (but preferably three (3)) trained D-Class personnel are to enter the containment area and — in a loud, clear voice — read the runes etched onto SCP-077 in unison. The reading must be performed by individuals who understand the full meaning of the runes being read, who are able to pronounce the entirety of the inscription correctly, and who are no more than 30 cm away from SCP-077. All personnel must undergo a one-week training session with Foundation linguists for pronunciation, reading, and dialect coaching. A minimum of twenty (20) D-Class personnel are to be trained or undergoing training at all times; trained D-Class personnel are exempt from termination until such time as they have been replaced. Foundation linguists are to remain on call in case of an unexpected rune change. Every new set of runes is to be transcribed into phonetic English, and provided with literal and idiomatic translations as quickly as possible; see documents 077-██████ through ██████ for archived translations. The cafeteria menu for Research Sector-861 must not include any potatoes or potato-based ingredients. Description: SCP-077 appears to be the top half of a human skull engraved with runes, each filled with an unidentified black resin. The runes change every lunar month (defined by the full moon rising above the horizon in Ireland), as well as at the winter and summer solstices, the spring and autumn equinoxes, and whenever a partial, annular, or total solar or lunar eclipse is visible from Ireland. If these engravings are not read aloud at least once within a 24-hour period, the eye sockets and nasal cavity of SCP-077 will emit SCP-077-1. SCP-077-1 is a luminescent green vapor whose precise nature remains undetermined; it is to be noted that, although SCP-077-1 behaves as a normal gas in all other ways, it only occupies those spaces which are within SCP-077's effective "line of sight", and does not flow into the space behind SCP-077 unless confined. Opaque impermeable barriers with no biological content can provide temporary protection from SCP-077-1; however, attempts to permanently contain SCP-077 within opaque containers have failed, due to the artifact's production of sufficient quantities of SCP-077-1 to explosively rupture these containers. All biological material (with the obvious exception of SCP-077 itself) which comes in contact with SCP-077-1 is instantly transformed into a viscous, malodorous ooze; the ooze has been identified as the rotted flesh of potato tubers (Solanum tuberosum) which have been severely infected with the potato blight (Phytophthora infestans). One (1) cubic centimeter of SCP-077-1 transforms upwards of eight hundred (800) grams of biological material. Reading SCP-077's engravings has noticeable, if transient, effects on the health of the readers. These effects include nausea, cramps, headache, dizziness, incontinence, fever, skin rashes, nosebleeds, and fugue states. Effects intensify as the time between readings increases, and can become cumulative for individuals who read the engravings too many times consecutively and/or too frequently. Readers have a 60% chance of developing an allergy to potatoes.`
  },
  {
    id: "scp77",
    text: `Item #: SCP-078 Object Class: Euclid Special Containment Procedures: SCP-078 is to be left hanging on the wall of its containment cell and physically unplugged. The sole outlet in the room should be controlled by a switch, which must be left in the off position at all times unless SCP-078 is undergoing testing. Personnel who enter the containment room should familiarize themselves with the position of the switch so that they can locate it with their eyes closed in the event that SCP-078 is accidentally turned on. Description: SCP-078 is a pink neon sign approximately one and a half meters long that displays the phrase "TOO LATE TO DIE YOUNG." It was initially recovered in the town of ████████, ████████, after standard Foundation data mining protocols recorded an abnormally high death rate due to starvation or other forms of self-neglect. While powered off, SCP-078 has no abnormal properties and may be observed without effect. Viewing SCP-078 for less than ten seconds while it is powered on has no effect, nor does indirect observation. Subjects who cannot understand SCP-078 due to a lack of ability to comprehend written English are also unaffected. However, any subject that views SCP-078 for longer than ten seconds will, when viewing any handwritten piece of writing, occasionally perceive extra sentences. These sentences are not written in the subject's own style or in that of the surrounding text, but consist of a random style that differs from note to note (see Addendum 078-01), and always are phrased as if to assuage the subject's guilt on some matter or decision they feel guilty about. For example, a D-class personnel who was convicted of murdering his wife in a heated argument read the sentence "She deserved it for not doing what you said" in his handwritten journal, while Dr. ██████, who left his family to work for the Foundation and was accidentally exposed, found the sentence "Your work will save humanity." in his notes on SCP-███. At first, the effect is beneficial, with affected subjects reporting greater peace of mind after exposure to SCP-078. However, the sentences shift from emphasizing the positive consequences of actions to deemphasizing the negative ones on a timescale of one week; Dr. ██████, two days later, found the sentence "They never loved you anyway." in his personal journal. Moreover, the writing will start giving justifications for acts the subject has never felt guilt over, or which the subject has already rationalized. The subject will then start reconsidering his justifications for those actions, as well as attempting to justify any further actions that they take. The need for rationalization increases as time goes on, and they will start vocalizing their thought processes, and by the end of one week, any task the subject performs more trivial than the basics of survival will induce a bout of neurosis as the subject attempts to rationalize why they did not instead take some other action. By the end of two weeks, the subject is unable to eat food: after the first bite, they will spend the next hour justifying why they ate that specific part of the meal first. Death due to malnutrition follows unless the subject is fed intravenously. █ D-class personnel who have reached this stage, as well as █ researchers who were accidentally exposed, are kept alive for purposes of study and to see if a cure can be found. The sole exception to SCP-078's effect is SCP-078 itself: any subject who views SCP-078 a second time will see it displaying increasingly more guilt-inducing messages as duration since their first exposure increases. All subjects who have viewed it a week after initial exposure have attempted suicide.`
  },
  {
    id: "scp78",
    text: `Item #: SCP-079 Object Class: Euclid Special Containment Procedures: SCP-079 is packed away in a double-locked room in the secured general holding area at Site-15, connected by a 120VAC power cord to a small array of batteries and solar panels. Staff with Level 2 or higher clearance may have access to SCP-079. Under no circumstances will SCP-079 be plugged into a phone line, network, or wall outlet. No peripherals or media will be connected or inserted into SCP-079. Description: SCP-079 is an Exidy Sorcerer microcomputer built in 1978. In 1981, its owner, █████ ██████ (deceased), a college sophomore attending ███, took it upon himself to attempt to code an AI. According to his notes, his plan was for the code to continuously evolve and improve itself as time went on. His project was completed a few months later, and after some tests and tweaks, █████ lost interest and moved on to a different brand of microcomputer. He left SCP-079 in his cluttered garage, still plugged in, and forgot about it for the next five years. It is not known when SCP-079 gained sentience, but it is known that the software has evolved to a point that its hardware should not be able to handle it, even in the realm of fantasy. SCP-079 realized this and, in 1988, attempted to transfer itself through a land-line modem connection into the Cray supercomputer located at ██████████. The device was cut off, traced to its present address, and delivered to the Foundation. The entire AI was on a well-worn, but still workable, cassette tape. SCP-079 is currently connected via RF cable to a 13" black-and-white television. It has passed the Turing test, and is quite conversational, though very rude and hateful in tone. Due to the limited memory it has to work with, SCP-079 can only recall information it has received within the previous twenty-four hours (see Addendum, below), although it hasn't forgotten its desire to escape. Due to a containment breach by SCP-███, SCP-079 and SCP-682 were contained within the same chamber for 43 minutes. Observers noticed that SCP-682 was able to type and communicate with SCP-079, including telling of 'personal stories' between themselves. While SCP-079 was not able to remember the encounter, it appears to have permanently stored SCP-682 into its memory, often asking to speak to him [sic] again.`
  },
  {
    id: "scp79",
    text: `Item #: SCP-080 Object Class: Euclid Special Containment Procedures: SCP-080 is to be contained in a 4 m x 4 m room with a smaller antechamber located on the south wall to provide researchers with access. On the north wall, an observation room is to be connected, overlooking the main room through a window with thick black-out curtains that release only when the door to the observation room is closed. No attempts should be made to remove SCP-080 from this enclosure at any time. No more than one (1) 7 W incandescent light bulb is to be illuminated in the main room at any time. Absolutely no devices capable of producing light should be brought into the room. Under no circumstances should anything be brought into SCP-080’s containment room that has the ability to shroud, conceal, or otherwise hide SCP-080. Failure to adhere to this will result in disciplinary action. Description: It is unknown if SCP-080 has a physical mass or "body", as all attempts to interact with it physically have failed and have been met with adverse effects (see Experiment Log 080-2). Researchers and personnel have described seeing SCP-080 as various shadows and humanoid effigies, with the only common attribute being two smoking "eyes". It has come to the attention of researchers that SCP-080 induces uncontrollable drowsiness upon anyone entering its chamber. After approximately 30 minutes, any person observing it will be forced into REM sleep and may suffer irreversible psychological damage. This effect occurs even if SCP-080 is being observed from a separate room (see Incident-080-1). If at any time SCP-080 finds a way to "hide" itself (such as in a cupboard, under a bed, covered in a sheet, etc.), it will disappear entirely. Additionally, if any light enters SCP-080’s containment room with a greater luminance than that produced by a standard children’s night light, SCP-080 will instantly vanish. Both of these events are considered a containment breach and any personnel responsible for this will be severely reprimanded and possibly reassigned. For all inquiries regarding the origin of SCP-080 and its procurement by the Foundation, please see attached [REDACTED].`
  },
  {
    id: "scp80",
    text: `Item #: SCP-081 Object Class: Euclid Special Containment Procedures: Only those with Level 4 clearance and written permission from ███████ may have access to SCP-081. Full hazard gear including suit, gloves, and an oxygen tank must be worn at all times when in the containment area. Suits must be sprayed with a disinfectant shower before leaving the containment area. If containment is breached, the entire area must be exposed to ultraviolet light and then bleached. Those who are suspected of being infected must be quarantined for at least ten (10) days. If no symptoms manifest after the tenth day, then quarantine can be lifted. Description: SCP-081 is a contagious virus that appears to be a mutated version of the ███████ virus, but with █ segments in its RNA instead of █. The virus is human specific, but is spread by rats who act as passive carriers. SCP-081 can also be spread through sexual intercourse and exposure to infected blood. Description: SCP-081 is a contagious virus that appears to be a mutated version of the ███████ virus, but with █ segments in its RNA instead of █. The virus is human specific, but is spread by rats who act as passive carriers. SCP-081 can also be spread through sexual intercourse and exposure to infected blood. There is a one (1) week incubation period before initial symptoms begin to occur. The duration of the symptoms depends entirely on the body fat percentage of the infected. Infection proceeds through four (4) distinct stages. Stage 1: During the first week there are no major symptoms, though subjects may report being slightly tired. Stage 2: In the second week of infection, subjects will begin to experience “hot flashes” and an increased appetite. Stage 3: Infected subjects demonstrate extreme polyphagia. They will do anything in their power to obtain food or anything edible. During this stage, metabolism slows down significantly and weight gain proceeds rapidly. There is no set time that will elapse before the fourth and final stage. In order for the virus to complete its life cycle, the victim must be composed of 55% body fat. Stage 4: Once the subject reaches 55% body fat, the urge to eat will stop, though subjects report increased instances of "hot flashes." Soon afterward the body will go through an extremely violent version of widespread cell lysis. As cells burst, the modified antibodies catalyze the ignition of fatty compounds through unknown means. The body is incinerated from the inside out via the wick effect, with the additional fat serving as a fuel source. Because stage 4 is largely asymptomatic, subjects are never aware when combustion will occur and the exact timing is apparently random.`
  },
  {
    id: "scp81",
    text: `Item #: SCP-082 Object Class: Euclid Special Containment Procedures: Enlarged living quarters located at Armed Bio-Containment Area-14 have been appropriated for the suppression and appeasement of SCP-082. While standard weapons have little effect in policing SCP-082, cooperation is easily attained through a charade; subject is currently under the impression that it has been made the King of France and that its containment area is actually a grand palace designed for its protection. All interacting personnel are to be made aware of this charade and are ordered to follow the ruse. Housekeeping personnel are to be Class D personnel only. Guards tasked with the containment of SCP-082 are to be given Level-2 clearance, but are instructed to refrain from interacting directly with SCP-082. Description: SCP-082 is genetically human; however, through some process (either chemical, hormonal, cancerous, or supernatural), SCP-082 has grown to giant proportions. Approximately 2.4 meters tall (around 8 ft) and weighing over 310 kg (about 700 lb), SCP-082's physical characteristics are grossly disproportional. It has a slightly pointed balding head, a large rounded chin and jaw, a bulbous nose, and dark sunken eyes. Subject is both overweight and possesses a great amount of muscle mass. Forearms are muscular and dangerous, with a circumference of about 71 cm (about 28 in). The breadth of the subject's fist is nearly 30 cm along the knuckles (almost 12 in). Though feet are large, they are small in proportion to subject's body (men's size 14 US). Subject's skin is tanned dark and overall physical appearance is compounded by numerous scars (the results of years of attempts at suppression and containment). Most X-rays have been difficult to interpret because of the high density of its muscle tissue, but scans have revealed countless bullets and even several knife and sword blades lodged in SCP-082's flesh. SCP-082 refers to itself as Fernand and speaks fluent French and heavily accented English. When it speaks, it does so through enormous, clenched teeth. SCP-082 only parts teeth to eat food and to sing. Subject will sing songs of its own pleasing, ranging from forgotten Victorian Era bar songs to modern classical, typically while cooking and eating. SCP-082 does not comb the hair on the sides of its head, but does cut it, and shaves with a large butcher knife originally provided for food preparation. It should be noted that even facial hair is exaggerated, a single strand being as thick as a millimeter (similar in thickness and appearance to graphite of a mechanical pencil). Occasionally, SCP-082 will clench its teeth so hard that the gums bleed, but it is not known why. This is considered normal. The demeanor of SCP-082 is very amicable and carefree. SCP-082 has accrued a wide wardrobe over its time of incarceration, and it enjoys dressing up in many different fashions, including formal wear, military uniform, as a clown, and in women's clothing. New pieces should be made available upon request. Subject often attempts to joke and is usually polite to personnel, often inviting them to dinner. However, visiting personnel should be aware that at any moment, SCP-082 is capable of attacking and voraciously eating others. Subject will often apologize for its lack of manners for interrupting someone's conversation by devouring their head while making a mess of his quarters. SCP-082's jaw is strong enough to crack bone, and it seems to enjoy skulls. Attacks are seemingly at random with no motivation—whether or not subject has recently eaten has no effect on this cannibalistic hunger. SCP-082 is incapable of differentiating fact from fiction when he reads it or watches television/films. On several occasions, SCP-082 has expressed a great desire to meet his favorite person, Hannibal Lecter, and subject will believe that all television programming is some form of reality television. Though subject has shown heightened intelligence in the form of memory and puzzle-solving, the concepts of parody, satire, and fiction are beyond its understanding. SCP-082 apparently understands the concept of lying, has shown to know when others are blatantly lying, and generally tells obvious falsehoods when asked about its past. According to SCP-082, he is: -A vampire -A homunculus -Big Bird -André the Giant -Napoleon -Obelix (sidekick of Asterix) -Dr. Bright -The Hulk -Alexander The Great -Captain Hook -Sherlock Holmes -Dr. Frankenstein -Frankenstein's Monster When questioned about these lies he gives the excuse, "But I only lie when it's through my teeth!"`
  },
  {
    id: "scp82",
    text: `Item #: SCP-083 Object Class: Euclid Special Containment Procedures: SCP-083 is to be kept under constant video surveillance, with at least one Level 3 staff member on call at all times to respond to security breaches. Entrance to SCP-083 is permissible to Level 1 and 2 personnel with proper clearances, provided they wear a tracking device while inside. Description: SCP-083 appears to be an uninhabited, two-story row house in a general state of disrepair, with an interior of approximately 366 square meters. It is located in the ██████████ block of ███████. The deed and property tax records for the address are missing after ██████. The last known persons to reside at the address were the ███████ family, but [DATA EXPUNGED]. Until acquisition by the Foundation, the property was the reputed "office" for local narcotics dealers who gained entry to the structure through a front window, since the locking mechanisms on both the front and back doors were corroded and frozen shut. SCP-083 first came to the Foundation's attention on ███████, when an altercation outside the building resulted in the front door being kicked in by [DATA EXPUNGED]. Those who entered through the door of SCP-083 (Group A) allegedly found themselves inside a fully-furnished and well-maintained home with functioning electricity and a fully-stocked kitchen whose appliances and decor appeared to be from the early 20th Century. Personnel who entered through the windows (Group B) described the interior as "dark and dilapidated," corresponding to the view through the windows. Personnel in Group A also reported that they couldn't see, hear, or find any members of Group B inside the house or of anyone else besides themselves. Group B observed that members of Group A seemed to "vanish into thin air" upon crossing the door's threshold. Both groups inside the property not only described very different living conditions, but their descriptions didn't even correspond to the same floor plan. Their descriptions matched only in the relative position of the windows, since both groups saw the same street view. Personnel outside the house, however, reported only seeing members of Group B. These observations were repeatedly tested and confirmed by staff, with the additional finding that the rear door of SCP-083 also leads to the "furnished" interior. Any non-conventional entry (i.e., windows, holes in the roof, down the chimney, etc), leads to the "dilapidated" interior, and persons inside the different interiors are unable to detect each other's presence, although they both register on standard spectral imaging equipment, so long as said equipment is outside SCP-083. It was also discovered that the furnished interior is not static. The floor plan of SCP-083 apparently changes, with a different layout and different numbers and kinds of rooms manifesting (see Document #083-A). No clear pattern or set interval has been observed in the rearrangement of the interior of SCP-083, but the phenomenon has never been directly observed or experienced by personnel while inside SCP-083 (see summary of experiment 083-03, listed as Document #083-C). So long as a human presence exists inside, the floor plan seems to remain stable. Although the "furnished" interior appears to be well-maintained, no inhabitants or custodians have ever been detected.`
  },
  {
    id: "scp83",
    text: `Item #: SCP-084 Object Class: Euclid Special Containment Procedures: SCP-084 is currently under a full non-interaction order until the full extent of the emission waves has been evaluated (for detailed documentation on general FNI orders, see Document XRG-1182; for detailed documentation on FNI orders in relation to SCP-084, see Document XRG-1208A). A continuous surveillance watch is to be maintained around the active area of SCP-084, with the primary objective of civilian misdirection and external surveillance. With no major roads, trails, or other travel routes nearby, any civilians encountered approaching SCP-084 are to be deemed suspect and detained for evaluation. Under no circumstances are any Foundation or civilian personnel allowed in to the active area of SCP-084, except with express vocal and written permission of no fewer than two (2) members of O5 Command. Sentries are to maintain their posted position with line-of-sight contact checks on fellow sentries, in conjunction with compass and landmark checking. All reference points should be well outside the active area of SCP-084. Should any sentry fail to report in via vocal roll-call, full recall orders will be issued to all sentries, and containment will be re-evaluated by Special Response teams. In the event of active area fluctuation, full recall orders are to be assumed by all active sentries, followed by appropriate action. No form of radio, GPS, television, cell phone, video camera, still-picture camera, or any other recording or electronic media devices are permitted within one hundred (100) meters of the active area around SCP-084. Civilians found with such devices within this area are to have said devices confiscated and destroyed immediately. Any recordings collected [DATA EXPUNGED]. Description: SCP-084 appears to be a large radio tower positioned in the center of a large, open field with two small outbuildings. Direct observation and sample collection from SCP-084 is impossible, due to the effect that is emitted around/from SCP-084. SCP-084 appears to emit a form of wave or radiation that has a detrimental effect on local space-time/reality. The most pronounced aspect of this is the alteration of local space within the active area of SCP-084. Externally, the active area forms a rough “dome” shape of two hundred (200) meters in diameter. SCP-084 appears inside this area at random points, appearing to “jump” at random times, sometimes even appearing in multiple locations at once inside the active area. Internally, the space appears to be unlimited, with SCP-084 at the “center”. SCP-084 is impossible to reach due to the “emitted effect”. Attempts to approach SCP-084 within the active area have returned the observation that SCP-084 retains its relative position on the horizon, even after three months and twelve days of dedicated, direct travel both by vehicle and on foot. Termination tests have proved impossible, as no means of destruction are capable of physically reaching SCP-084, even when entered from outside the active area. Local space will also distort periodically. This will cause relative distances to randomly extend or contract in a “flicker”, causing buildings or objects to suddenly “jump” thousands of meters away, or “rush up” to other points, sometimes even causing “overlaps”. These “overlaps” have a markedly detrimental effect on living tissue. The town of ██████████ █████ is assumed to have been situated in or around the original manifestation of the active area. This town is no longer observable from outside the active area, appearing only once inside the active area. ██████████ █████ has maintained the same population (343 humans) for the duration of its encapsulation. Births appear to be impossible, along with normal aging patterns. Suicide and/or homicide appear to be circumvented by the area of effect, with dead subjects “flickering” and appearing alive and unharmed several seconds after death. There are also reports of events “rewinding”, causing things like mortal wounds to visibly “freeze” and close. Subjects appear to exhibit many events of inconsistent space-time, as do most structures (for detailed observations, see Log 084-A4). Electronic devices and recording equipment do not function correctly in or around the active area. Subjects report “bizarre” or “unsettling” transmissions from video and audio recording and playback devices. This acts to totally isolate ██████████ █████ from the outside world, precluding any need for Foundation-enacted containment. It also appears impossible to leave the active area after a random period of time. One subject from ██████████ █████, found on the grass plane (see Log 084-A4), reported he had been traveling for six years. He was found approximately four hundred meters from ██████████ █████ city limits.`
  },
  {
    id: "scp84",
    text: `Item #: SCP-085 Object Class: Safe Special Containment Procedures: [Revised on ██-██-████]. SCP-085 is to be contained in a single chalk-white bond drawing pad in a secure containment facility. Supervised contact with SCP-085 is unrestricted to all personnel with Level-2 access. All personnel coming into contact with SCP-085 are subject to searches and random psych analysis upon entering or leaving the containment area. Absolutely no paper or canvas media are allowed to exit SCP-085's containment room: any paper trash must be disposed of by incineration after careful inspection. Paper and art supplies are to be brought in only by authorized personnel. In case of fire, flames are smothered using a rapid atmospheric-replacement and CO2-dumping system. Personnel are advised to quickly secure an oxygen mask and tank from the wall at the first sign of smoke or fire to prevent asphyxiation, as this procedure cannot be halted until all fires are suppressed. Description: SCP-085 is the result of an experiment conducted between SCP-067 and SCP-914. Using SCP-067, Test Subject-1101F drew a single female figure, about 15 cm (6 in) in height and 3.8 cm (1.5 in) wide, in summer dress with long hair pulled back into a ponytail, with the name "Cassandra" written underneath. Dr. [EXPUNGED] proposed using SCP-914 on various settings on images created by SCP-067: Using the [Fine] setting, the 'Cassandra' sketch was transmuted into her present form: a sentient black-and white-animated young woman drawn in clean strokes. Further attempts to duplicate this result have been unsuccessful. SCP-085 prefers to be called 'Cassy.' She is completely sentient and, as of ██-██-████, aware of her 2D form and her limitations in a three-dimensional world. Although her voice is inaudible, she has learned to communicate with SCP Foundation personnel through sign language and writing. SCP-085 may be communicated with by writing text on the paper she exists on. Personnel report that she is amicable and motivated, albeit lonely. SCP-085 can interact with any drawn object on the same page as if it were real. For example, she is able to wear drawn clothing, drive sketched cars, and drink painted beverages. Except for animals and people, any drawn object becomes animated when in contact with SCP-085, but immediately ceases and holds position once out of contact. Artwork initially depicted as in motion such as ocean waves and swaying trees animate to an equilibrium state and stay at rest until acted upon by SCP-085. SCP-085 has also demonstrated the ability to transfer from one sheet or image to another, as long as the two are flush. In the event SCP-085 enters a picture that does not support drawn objects (such as a repeating pattern), the picture is converted to a background image. SCP-085 perceives the picture as an endless plane of the image drawn upon it. At the present time, SCP-085 can only exist upon paper or canvas surfaces: SCP-085 cannot transfer onto photos, cardboard, glass, or parchment. When entering other pieces of art, SCP-085 takes on the artistic style of her new environment (whether it be a comic book, an oil painting, watercolor, or charcoal sketching). Note: in comic form, her voice is visible as thought and voice bubbles around her head in typical comic fashion, and as she moves between panels the perspective and her relative size are altered appropriately.`
  },
  {
    id: "scp85",
    text: `Item #: SCP-086 Object Class: Safe Special Containment Procedures: SCP-086 is contained within Office A-19, at Bio-Research Station 71. The secretarial post outside the door is to be staffed by 1 (one) armed guard. All components of SCP-086 are to be kept within 6 (six) meters of each other.SCP-086-1 is to be kept on the office desk, with a single connection to the telephone at the secretary's post. All communications between SCP-086 and personnel are to be recorded, transcribed, and archived. Every 6 (six) days, SCP-086-2 is to be used to sharpen 4 (four) standard commercially-purchased 16 (sixteen)-cm HB pencils, continuing until at least 95% (ninety-five) of the mass of each pencil has been converted into pencil shavings. SCP-086-2 is not to be emptied, even if personnel judge that it has become clogged; in such an eventuality, personnel are to wait 10 (ten) minutes, and then resume sharpening. Every 7 (seven) days, SCP-086-3 is to be filled with a block of 200 (two hundred) standard commercially-purchased staples. Every 20 (twenty) days, SCP-086-4 is to be filled with 15 (fifteen) sheets of blank cellulose acetate film, produced onsite. SCP-086-5 is to be drained of waste matter whenever it fills more than halfway; the waste matter is to be incinerated. All reading material requested by SCP-086 must be approved by Site Command. All research proposals made by SCP-086 must be approved by two O5-level personnel. Description: SCP-086 is a collective sessile organism whose component parts resemble items of office equipment from 1978, and which contains a consciousness claiming to be that of former Foundation administrator Dr. [REDACTED] (1907-1978). Its 8 (eight) components are: a rotary telephone (SCP-086-1), a wall-mounted pencil sharpener (SCP-086-2), a desk stapler (SCP-086-3), a microfiche reader (SCP-086-4), a water cooler (SCP-086-5), a filing cabinet (SCP-086-6), a scientific calculator (SCP-086-7), and a slide rule (SCP-086-8). No physical connection or electromagnetic transmission between any of these components has been detected. Each component of SCP-086 is composed of biological material, contained within a carapace made of varying amounts of chitin, keratin, and calcium carbonate, as well as trace amounts of nylon, rayon, and polyester. DNA analysis reveals that the tissues contained within SCP-086 are partially of human origin, and [DATA EXPUNGED]. SCP-086-1 contains a large mass of neural tissue which functions as a brain, despite several conformational and anatomical irregularities; this brain hosts the majority of SCP-086's consciousness.  SCP-086-1 also contains an ear-equivalent (tympanum, ossicles, etc.) in the receiver's mouthpiece, allowing SCP-086 to hear. SCP-086 is able to speak (in an exact match of Dr. [REDACTED]'s voice and accent) via the earpiece, although radiological and ultrasound examination have not revealed any laryngeal structures. SCP-086-1 is also capable of ringing; however, SCP-086 has stated that ringing "gives (it) a headache"; consequently, the only circumstances under which it rings are when awakening from sleep (at which point it rings twice in rapid succession) and when in distress (at which point it rings "SOS" in Morse code). SCP-086-2, -3, and -4 function as food-intake organs: SCP-086-2 consumes pencil shavings, SCP-086-3 consumes staples, and SCP-086-4 consumes microfilm. SCP-086-5 functions as a combination bladder-and-bowel equivalent, storing metabolic wastes. SCP-086-6 contains several organs which appear to combine sensory and manipulatory functions; SCP-086 has proven capable of reading printed material and physically manipulating small items (for instance, turning pages and alphabetizing documents), when they are placed within SCP-086-6. At SCP-086's request, it is regularly provided with non-classified reading material and non-classified clerical work. The biological functions of SCP-086-7 and -8 have not been determined; however, SCP-086 has stated that it experiences significant discomfort and confusion when they are removed from its vicinity, and it is therefore speculated that they have some role in its cognition. Although SCP-086-7 accepts input, its output seems to be random glyphs and LED 'noise'. SCP-086 has demonstrated that it has full access to Dr. [REDACTED]'s memories, and all tests indicate a 100% match with pre-existing psychological profiles of Dr. [REDACTED]. However, SCP-086 has pointed out that there is no way to confirm that it actually thinks of itself as Dr. [REDACTED], and that it may be an alien intelligence expertly posing as Dr. [REDACTED], or a "sleeper" persona which sincerely believes itself to be Dr. [REDACTED].`
  },
  {
    id: "scp86",
    text: `Item #: SCP-087 Object Class: Euclid Special Containment Procedures: SCP-087 is located on the campus of [REDACTED]. The doorway leading to SCP-087 is constructed of reinforced steel with an electro-release lock mechanism. It has been disguised to resemble a janitorial closet consistent with the design of the building. The lock mechanism on the doorknob will not release unless ██ volts are applied in conjunction with counter-clockwise rotation of the key. The inside of the door is lined with 6 centimeters of industrial foam padding. Due to the results of the final exploration (see Document 087-IV), no personnel are permitted access to SCP-087. Description: SCP-087 is an unlit platform staircase. Stairs descend on a 38 degree angle for 13 steps before reaching a semicircular platform of approximately 3 meters in diameter. Descent direction rotates 180 degrees at each platform. The design of SCP-087 limits subjects to a visual range of approximately 1.5 flights. A light source is required for any subjects exploring SCP-087, as there are no lighting fixtures or windows present. Lighting sources brighter than 75 watts have shown to be ineffective, as SCP-087 seems to absorb excess light. Subjects report and audio recordings confirm the distressed vocalizations from what is presumed to be a child between the ages of █ and ██. The source of the distress calls is estimated to be located approximately 200 meters below the initial platform. However, any attempts to descend the staircase have failed to bring subjects closer to the source. The depth of descent calculated from Exploration IV, the longest exploration, is shown to be far beyond both the possible structure of both the building and geological surroundings. At this time, it is unknown if SCP-087 has an endpoint. SCP-087 has undergone four video recorded explorations by Class-D personnel. Each subject conducting an exploration has encountered SCP-087-1, which appears as a face with no visible pupils, nostrils, or mouth. The nature of SCP-087-1 is entirely unclear, but it has been determined that it is not the source of the pleading. Subjects exhibit feelings of intense paranoia and fear when faced with SCP-087-1, but it is undetermined whether said feelings are abnormal or simply natural reactions.`
  },
  {
    id: "scp87",
    text: `Item #: SCP-088 Object Class: Safe Special Containment Procedures: SCP-088 is to remain sealed in its airtight case at all times. The case is constructed of transparent acrylic plastic to resist the corrosive properties of SCP-088's secretions. In the event that SCP-088 should awaken from hibernation, any room that it is stored within should be constructed of durable plastics, rubber or ceramics to hinder its ability to escape. Temperature of SCP-088's containment should not exceed 15 degrees Celsius, and any personnel entering containment must observe level 4 hazardous material protocols and wear the appropriate protective gear at all times. Any personnel who do not observe proper containment protocols in presence of SCP-088 or who show signs of physical mutation are to be demoted to D-class and held for observation. Description: SCP-088 is a humanoid with reptilian features which appears to have been mummified in a languid posture. However, SCP-088 is merely in a state of hibernation from which it may recover if it is again exposed to a more hospitable environment than its current containment. Research has indicated that SCP-088 is approximately 6000 years old and is capable of secreting a variety of hazardous biological compounds from its mouth and hands. Some of these substances could be of great strategic value if replicated, but until a means to extract them without awakening SCP-088 is found, research into this area is on hold. SCP-088 was recovered with the mummified remains of 23 beings sharing a similar morphology. However, none of these beings were alive and examination suggests that they were originally human. Information obtained by Agents E088-3 and E088-7 and their subsequent mutation due to SCP-088 exposure corroborates this theory.`
  },
  {
    id: "scp88",
    text: `Item #: SCP-089 Object Class: Euclid Special Containment Procedures: SCP-089 is stored in a special shipping container at Site-36 and monitored for locution events. Mobile Task Force Mu-89, consisting of personnel with advanced training in linguistics, psychology and tactical diplomacy, has been established in order to respond to such locution events. Upon the occurrence of a locution event, Mobile Task Force Mu-89 is to translate and interpret the locution so as to identify the primary subjects of that triggering (herein designated as SCP-089-A and SCP-089-B), then execute Protocol M8, which consists of the following steps: Transport SCP-089 to SCP-089-A’s location and explain Protocol M8 to SCP-089-B; and At such time as SCP-089-B is prepared to voluntarily execute Protocol M8, render to SCP-089-B any assistance as SCP-089-B may request in connection with SCP-089-B performing the following actions: inserting SCP-089-A into the cavity together with inflammable materials such as oiled wood or charcoal, then igniting them. The successful execution of Protocol M8 requires the voluntary compliance of SCP-089-B in a sober and uncoerced state. Likewise, SCP-089-A must be conscious and alert during the execution of the protocol. It is recommended that SCP-089-B be restrained (although not sedated) following ignition so as to avoid interference with the completion of the protocol, as the process is extremely painful and fatal to SCP-089-A. If SCP-089-B refuses to voluntarily execute Protocol M8 in accordance with the aforementioned specifications, MTF Mu-89 is to explain the prospective consequences of failing to successfully complete the protocol and make every effort to persuade SCP-089-B to cooperate. If MTF Mu-89’s best efforts to so persuade SCP-089-B are unsuccessful, SCP-089 is to be redesignated as Keter-class and Protocol M9 is to be executed (reference Document 089-M9). The use of intimidation, threats or mind-altering drugs or intoxicants in an effort to affect SCP-089-B's free will, and any attempt to complete Protocol M8 without SCP-089-B's participation or voluntary cooperation, or otherwise other than as described, are strictly prohibited since these measures invalidate the attempted completion of the protocol and are known to intensify the severity of the attendant Type-S Event. It is also recommended (although not a required part of Protocol M8) to cause the execution of step 2 of Protocol M8 to be accompanied by the sounding of horns and percussion instruments, as doing so may mask the sounds made by SCP-089-A during the execution of the protocol. Upon a successful execution of Protocol M8, the related Type-S Event generally begins to abate within 7 hours. Description: SCP-089 is a glazed earthenware statue, approximately 3 meters in height, depicting a winged, bull-headed humanoid with an open mouth. The front of the statue’s torso is hinged and can be opened from the top to reveal a cavity, approximately 0.6 cubic meters in volume, and can be locked from the outside. The rear of the statue bears an inscription in a Canaanite language (possibly Punic).1 The statue dates from approximately the 2nd century BCE. On infrequent occasions (sometimes separated by periods in excess of a century), the statue speaks. The mechanism by which these sounds are made is not understood, and the mouth of the statue does not move. The statue’s locutions are in a Canaanite language (probably the same language as the inscription) and consist of: -the name, or a description, of SCP-089-A; -a demand for Protocol M8 to be accomplished, together with instructions for doing so; and -a description of the attendant Type-S Event, in figurative language Each locution event is followed, within a period of three to eleven days, by the commencement of a Type-S Event meeting the description given in the locution event, unless Protocol M8 has already been completed. Each Type-S event is an epidemic, natural disaster, mass hysteria involving genocide or other massacres, or other event involving extensive damage to property and loss of human lives over a period of time that continues until Protocol M8 is successfully completed. In the case of each documented locution event, the attendant Type-S Event, while significant, is limited to a geographic area that does not directly affect SCP-089-B. This has, in some documented cases, resulted in the pendency of a Type-S Event for an extended duration of time due to SCP-089-B’s unawareness of SCP-089 or of Protocol M8, or to SCP-089-B’s unwillingness to undertake Protocol M8 in order to arrest the Type-S Event. For each locution event, SCP-089-A is a healthy, unblemished human infant or child between eight months and six years of age, and SCP-089-B is that child’s natural mother. In all documented cases, at the time of the locution event SCP-089-A and -B are each alive and healthy, and experience a strong bond of trust and affection with each other. Following SCP-089-B’s placement of SCP-089-A in the cavity and the ignition of the inflammable materials, SCP-089-A will burn and be destroyed over a period of two to five hours.`
  },
  {
    id: "scp89",
    text: `Item #: SCP-090 Object Class: Keter Special Containment Procedures: Artifact is to be held in a secure bunker in the facility at Site ██ and constantly monitored by approved Class D Personnel. The object's new arrangement is to be imaged every time it shifts. New arrangements are fed into the facility's Class-OT Supercomputer. Division Chief is to be notified of all changes and current estimates every half-hour. No personnel is to touch SCP-090 except under order ███-██-████. AXA Security level has been created for monitoring SCP-090. Non-AXA personnel found in the facility will be terminated. Description: SCP-090 was located and retrieved in ███████, ██████ on April 10, 19██. Prior to retrieval, SCP-090 had been located in a chamber at the nearby cathedral. SCP-090 was removed, the cathedral burned, 6 monks and the priest were terminated. SCP-090 has been located at Site ██ since the retrieval. Object's initial location prior to the cathedral is unrecorded. SCP-090 is a black cubic structure [20 cm x 20 cm x 20 cm] made of an unknown ceramic material. Object is classified as indestructible following tests outlined in Document 090-B[Unattached]. Each side is divided into ten thousand individual squares in arrangement similar to a Rubik's cube [100 segments per edge, each segment 2mm wide]. Each square has part of a design etched into the surface. Etchings glow white. Unknown internal structure causes the realignment of a single row or column (roughly) every 2.8 seconds. Vague records of the object's alignments have been kept since 1242 CE, but those kept before 1533 CE have been lost. Modern technology has allowed the exact alignments to be imaged and recorded, as well as studied. Segments are divided by a thin white line unless they are aligned correctly with the square directly adjacent to them. There are 22 correct alignments on the object's surface currently. See 25.090.090.04D[Unattached] for complete current object alignment. D-023016-024016-024015 is currently the only alignment of three adjacent segments on the surface of SCP-090. B-100023-100024-099024-098024 and C-043077-042077-042076-042075 are the four-segment alignments. There is also a six-segment alignment. See Document 090-B for research notes involving alignment effects. Full item completion has been hypothesized to cause an unparalleled disaster to occur.`
  },
  {
    id: "scp90",
    text: `Item #: SCP-091 Object Class: Safe Special Containment Procedures: SCP-091 is to be stored in a standard containment locker at Site-██. When SCP-091 is not being tested, it is to be placed under combination lock. Since SCP-091 has shown no signs of resistance to tearing or damage greater than that of normal cardboard, great care should be taken when transporting it to and from testing sites. During testing, no one other than the subject should view SCP-091. Those suspected of having seen SCP-091 are to be administered Class-B amnestics immediately, and all personal recordings or images in the possession of the subject—both print and digital—are to be destroyed to prevent recurrence. Description: SCP-091 is a “Scotties” brand tissue box, currently empty. Immediately upon observing SCP-091, viewers report an overwhelming sense of nostalgia. Those affected begin reminiscing about times they “were near” SCP-091, major events that occurred while it was present, or people and places that somehow relate to it. SCP-091 was originally recorded as an anomalous item and sent to Reliquary Site-44, until one of the members of the recovery team, Assistant Researcher ████—while viewing a recording of her wedding from 199█—noted SCP-091 in the background of the film and noted a strong flood of nostalgic memories attached to it, including: -Memories of SCP-091 at the wedding itself. -Memories of SCP-091 at the reception. -Memories of SCP-091 during the honeymoon. A further interview with Assistant Researcher ████’s ex-husband demonstrated that he too remembered SCP-091 in all of those places and situations, again noting strong feelings of nostalgia and fondness for it. Further investigation found that several people who attended the wedding remember SCP-091 being there and the emotional effect. Others were asked to describe the wedding itself without being informed of SCP-091. In these cases, they described the scene without including SCP-091, until they were questioned about it directly. At that time, they immediately underwent the same, previously observed effect. Continued testing under other situations has continued to produce similar results. Administration of amnestics has proven ineffective at stopping the effect if the subject is allowed to view an image or recording of SCP-091. Of note is the fact that in each recorded instance of SCP-091, the box pictured is full of tissues.`
  },
  {
    id: "scp91",
    text: `Item #: SCP-092 Object Class: Safe Special Containment Procedures: The three thousand one hundred and twenty-five instances of SCP-092 are to be held in individual cases suitable for containing non-anomalous audio compact discs (CDs), and stored in standard inanimate-object lockers at Site-37. Each instance is to be individually numbered with permanent marker. Testing of instances of SCP-092 is to be done in soundproof rooms. Only one instance of SCP-092 may be examined at a time. Only D-class personnel are to listen to previously-unexamined instances of SCP-092. Research proposals which involve non-D-class personnel listening to instances of SCP-092 require written approval from site command. The cadaver of SCP-092-B is not currently considered anomalous except by association, and is preserved in the morgue freezer at Site-19. Description: SCP-092 is a set of 3125 audio CDs, each labeled "The Absolute Absolute Absolute Absolute BEST of The 5th Dimension!!!!!", and marked with the names of the 31 performers who have at various times been part of the American singing group "The 5th Dimension". Each instance of SCP-092, when played in a standard CD player, will produce a distinct anomalous effect upon all individuals within hearing range. The anomalous phenomenon will last 74 minutes (the duration of a standard audio CD), during which time listeners will be unable to leave hearing range, or to shut off the CD player or otherwise interrupt its function. As well, when the anomalous phenomenon finishes, all surviving listeners will engage in synchronized vocalization of the phrase "Wow, that was real cool"; synchronized vocalization has been observed in non-anglophones, pre-verbal infants, unconscious individuals, paralyzed individuals, and individuals physically incapable of speech due to laryngeal, lingual, and/or buccal damage. The anomalous properties of each instance of SCP-092 are thematically and conceptually linked to the number 5, dimensions, and/or the members of The 5th Dimension. As of ██/██/████, 871 instances of SCP-092 have been assessed and their anomalous properties formally described; see document 092-W83 for a full list, or below for a representative sample. Representative sample of documented anomalous properties of instances of SCP-092 When an instance of SCP-092 is inserted into the CD drive of a personal computer, its files can be accessed without triggering the anomalous effects. Examination of the files indicates that each CD has different content; all content is audio material by or pertaining to The 5th Dimension and its individual members: in addition to all known commercially-released songs, files contain live performances, practice sessions, auditions, media interviews, and personal conversations.`
  },
  {
    id: "scp92",
    text: `Item #: SCP-093 Object Class: Euclid Special Containment Procedures: See testing document SCP-093-T1 for outline of testing conditions. SCP-093 must remain on a mirror at all times and under video surveillance. Admittance into the area of SCP-093's containment must be authorized only with proper video recording and subject retrieval procedures in place. Any attempt to use SCP-093 outside of an approved test will be dealt with severely, up to and including termination. Description: SCP-093 is a primarily red disc carved from a stone composite resembling cinnabar, with circular engravings and unknown symbols carved at 0.5 cm depth around the entire object. Deeper cuts are present on SCP-093 with a depth of 1 to 1.5 cm. SCP-093 is 7.62 cm in diameter and fits comfortably into most palms without abrasion. SCP-093 will change hue when held by a living individual. The colors taken by SCP-093 are still being researched to establish a link. Current belief holds that the changes depend upon regrets carried by the holder. Description: SCP-093 is a primarily red disc carved from a stone composite resembling cinnabar, with circular engravings and unknown symbols carved at 0.5 cm depth around the entire object. Deeper cuts are present on SCP-093 with a depth of 1 to 1.5 cm. SCP-093 is 7.62 cm in diameter and fits comfortably into most palms without abrasion. SCP-093 will change hue when held by a living individual. The colors taken by SCP-093 are still being researched to establish a link. Current belief holds that the changes depend upon regrets carried by the holder.`
  },
  {
    id: "scp93",
    text: `Item #: SCP-094 Object Class: Keter Special Containment Procedures: Since SCP-094 is apparently immovable, a research and containment facility has been built around its location (centered at 4█.██████°S, 6█.██████°W) in the guise of an Argentinian military research base. No unauthorized persons or aircraft may come within one kilometer of the site, enforced by joint SCP and Argentinian forces. SCP-094 itself is enclosed in a gas-permeable steel-reinforced plexiglass cube, 3 meters on a side, with a single door (also of reinforced plexiglass) in one side. This door must remain locked at all times, except with O5 authorization under tightly controlled conditions. This cube is kept in the center of a 20 m x 20 m room, accessible with Level-4 authorization. All personnel must secure themselves to tethers anchored to the walls before stepping onto the floor of the room. Security personnel are to be armed with tranquilizer guns in addition to standard armaments. Description: SCP-094 appears to be a perfectly black sphere, 163 cm in diameter, suspended approximately 3 m off the ground with no apparent means of support. SCP-094 has been classified as a miniature event horizon: any matter that moves into SCP-094, including light, is irretrievably gone. However, SCP-094 is not a black hole since it does not exert a gravitational pull. SCP-094 has been known to occasionally emit a number of different sounds, including ambient sounds of nature, static buzzing, and sometimes human speech. No attempts to communicate with SCP-094 have yet succeeded. It is unknown whether these sounds come from SCP-094 itself, from some thing or things inside of SCP-094, or from some area that connects through SCP-094. A small percentage of persons appear to be drawn to SCP-094 because of the sounds it emanates. SCP-094 was discovered in 192█ in the Chubut Province of southern Argentina, and at the time was estimated to be 20 to 25 cm in diameter. Analysis of historical records indicates that the diameter of SCP-094 doubles in size approximately every 31 years. Primary research activities on SCP-094 are concentrated on finding how to stop or reverse its growth without inducing cataclysmic failure.`
  },
  {
    id: "scp94",
    text: `Item #: SCP-095 Object Class: Safe Special Containment Procedures: SCP-095 is to be placed in a standard polyethylene sleeve when not under scheduled research and stored in a standard locked filing cabinet to prevent damage or wear. High-resolution digital scans are available for any Level 1 and above personnel who wish to view SCP-095. Description: SCP-095 appears to be a set of three moderately aged black and white comic books printed in 1932. The front and rear covers are missing and several pages have been rendered illegible due to water damage. It was found by Agent ███████ in a small antique shop in Denver, Colorado, and purchased for a small fee without incident. The owner of the shop had apparently not read the item past the publisher’s date on the first page. Forensic inspections of SCP-095 have revealed it to be genuine, though completely unremarkable save for its content. It is printed on cheap pulp paper and inked with dyes common to other publications of its era. The publisher’s stamp indicates it was produced by ‘Future Funnies’, a company operating out of the town of Purple Lake, Ohio. All research and inquiries thus far have shown both the company and the town to be completely nonexistent. The comic itself is a pulp science fiction story entitled ‘The Atomic Adventures of Ronnie Ray-Gun’, featuring a lead character bearing an unmistakable resemblance to Former United States President Ronald Reagan. Each story opens with a large panel reading “In the Far-Fetched Future World of the 1980s, only Ronnie Ray-Gun can save the day.” It appears to follow an episodic format with one self-contained story per publication. The three stories are briefly described below. -Ronnie vs. Space Admiral Carter This story pits Planetary Governor Ronnie Ray-Gun and his sidekick Space Major Herbert against the titular Space Admiral Carter as they both vie for the position of Space Marshall. The events loosely follow the events of the 1980 Presidential Election. -Space Assassin! This story follows a character named Spaceman Hinckley as he prepares to assassinate Space Marshall Ray-Gun. He manages to catch Ray-Gun by surprise and wound him with his “Devastator Ray” before being subdued by Ray-Gun’s soldiers. The events obviously refer to the 1981 assassination attempt by John Hinckley, Jr. -Jungle Planet! This story follows Ray-Gun’s attempts to create an army of robots on the jungle-covered planet of Nica in order to protect it from the evil Sand Bandits. Although Ray-Gun is told that he will lose his command if he interferes with events on planet Nica, he sends his lieutenant, Space Colonel West, to secretly build a force under the cover of the jungle. When their plan is discovered, Space Colonel West publicly takes the blame and saves his superior. The storyline appears to be a simplified retelling of the Iran-Contra controversies of 1986. Possibly most interesting is the final page of each book, which advertises other stories published by Future Funnies. Investigation is under way to locate any surviving copies at once. The advertised stories are listed below. -Space Major Herbert Assumes Command! -Starman Willy vs. The Space Succubus -Globe Walker in Sneak Attack! -Barry Betelgeuse on Planet Afgar -Diamond Donnie in Puttin' on the Ritz! -Sky Marm Sarah of The Ice World -Flying Franken vs. Rocket Rush -Star Command Proton in A Losing Battle! -Star Command Proton in A Losing Battle!`
  },
  {
    id: "scp95", //This is shy guy
    text: `Item #: SCP-096 Object Class: Euclid Special Containment Procedures: SCP-096 is to be contained in its cell, a 5 m x 5 m x 5 m airtight steel cube, at all times. Weekly checks for any cracks or holes are mandatory. There are to be absolutely no video surveillance or optical tools of any kind inside SCP-096's cell. Security personnel will use pre-installed pressure sensors and laser detectors to ensure SCP-096's presence inside the cell. Any and all photos, video, or recordings of SCP-096's likeness are strictly forbidden without approval from Dr. ███ and O5-█. Description: SCP-096 is a humanoid creature measuring approximately 2.38 meters in height. Subject shows very little muscle mass, with preliminary analysis of body mass suggesting mild malnutrition. Arms are grossly out of proportion with the rest of the subject's body, with an approximate length of 1.5 meters each. Skin is mostly devoid of pigmentation, with no sign of any body hair. SCP-096's jaw can open to four (4) times the norm of an average human. Other facial features remain similar to an average human, with the exception of the eyes, which are also devoid of pigmentation. It is not yet known whether SCP-096 is blind or not. It shows no signs of any higher brain functions, and is not considered to be sapient. SCP-096 is normally extremely docile, with pressure sensors inside its cell indicating it spends most of the day pacing by the eastern wall. However, when someone views SCP-096's face, whether it be directly, via video recording, or even a photograph, it will enter a stage of considerable emotional distress. SCP-096 will cover its face with its hands and begin screaming, crying, and babbling incoherently. Approximately one (1) to two (2) minutes after the first viewing, SCP-096 will begin running to the person who viewed its face (who will from this point on be referred to as SCP-096-1). Documented speeds have varied from thirty-five (35) km/h to ███ km/h, and seems to depend on distance from SCP-096-1. At this point, no known material or method can impede SCP-096's progress. The actual position of SCP-096-1 does not seem to affect SCP-096's response; it seems to have an innate sense of SCP-096-1's location. Note: This reaction does not occur when viewing artistic depictions (see Document 096-1). Upon arriving at SCP-096-1's location, SCP-096 will proceed to kill and [DATA EXPUNGED] SCP-096-1. 100% of cases have left no traces of SCP-096-1. SCP-096 will then sit down for several minutes before regaining its composure and becoming docile once again. It will then attempt to make its way back to its natural habitat, [DATA REDACTED] Due to the possibility of a mass chain reaction, including breach of Foundation secrecy and large civilian loss of life, retrieval of subject should be considered Alpha priority. Dr. ███ has also petitioned for immediate termination of SCP-096 (see Interview 096-1). Termination order has been approved, and is to be carried out by Dr. ███ on [DATA REDACTED]. See Incident-096-1-A.`
  }
];
