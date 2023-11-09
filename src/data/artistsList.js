const artistsList = [
  {
    title: "Paul Cezanne",
    id: 40482,
  },
  {
    title: "Eva Hesse",
    id: 34922,
  },
  {
    title: "Fontainebleau School",
    id: 41802,
  },
  {
    title: "Gunther Gerzso",
    id: 34634,
  },
  {
    title: "John Falter",
    id: 8092,
  },
  {
    title: "Ancestral Pueblo (Anasazi)",
    id: 30184,
  },
  {
    title: "Hohokam",
    id: 42818,
  },
  {
    title: "Iwan Baan",
    id: 38361,
  },
  {
    title: "Moshekwa Langa",
    id: 95295,
  },
  {
    title: "Richard Estes",
    id: 42049,
  },
  {
    title: "Alberto Giacometti",
    id: 34643,
  },
  {
    title: "Sir John Lavery",
    id: 35418,
  },
  {
    title: "André Derain",
    id: 34241,
  },
  {
    title: "Nupe",
    id: 30218,
  },
  {
    title: "Will Barnet",
    id: 1621,
  },
  {
    title: "Hopi",
    id: 30207,
  },
  {
    title: "Mimbres",
    id: 38603,
  },
  {
    title: "Casas Grandes",
    id: 30190,
  },
  {
    title: "Jean Henri Riesener",
    id: 21808,
  },
  {
    title: "Valentini Workshop",
    id: 118272,
  },
  {
    title: "Cibola",
    id: 105364,
  },
  {
    title: "Nampeyo",
    id: 63072,
  },
  {
    title: "Navajo (Diné)",
    id: 33295,
  },
  {
    title: "Paracas",
    id: 20363,
  },
  {
    title: "Kuba",
    id: 30142,
  },
  {
    title: "Hosteen Klah",
    id: 99073,
  },
  {
    title: "Yokuts",
    id: 44925,
  },
  {
    title: "Acoma",
    id: 29960,
  },
  {
    title: "Mississippian",
    id: 76281,
  },
  {
    title: "Isabel Medina Toribio (Aitiye')",
    id: 112622,
  },
  {
    title: "Tonita Martinez Roybal",
    id: 53404,
  },
  {
    title: "Archaic",
    id: 112075,
  },
  {
    title: "Inca",
    id: 29851,
  },
  {
    title: "Mario J. Korbel",
    id: 35324,
  },
  {
    title: "Frederic Remington",
    id: 21570,
  },
  {
    title: "Arthur Ou",
    id: 116708,
  },
  {
    title: "John Singer Sargent",
    id: 36540,
  },
  {
    title: "George Hitchcock",
    id: 34953,
  },
  {
    title: "Childe Hassam",
    id: 34864,
  },
  {
    title: "Hermann Dudley Murphy",
    id: 18851,
  },
  {
    title: "Winslow Homer",
    id: 34988,
  },
  {
    title: "Walter Elmer Schofield",
    id: 23260,
  },
  {
    title: "James McNeill Whistler",
    id: 37279,
  },
  {
    title: "Guy Carleton Wiggins",
    id: 28543,
  },
  {
    title: "Gifford Beal",
    id: 33558,
  },
  {
    title: "Henry Ward Ranger",
    id: 36319,
  },
  {
    title: "John Henry Twachtman",
    id: 37048,
  },
  {
    title: "Mary Cassatt",
    id: 33890,
  },
  {
    title: "William Merritt Chase",
    id: 41673,
  },
  {
    title: "Elizabeth Sparhawk-Jones",
    id: 24597,
  },
  {
    title: "Theodore Robinson",
    id: 22018,
  },
  {
    title: "Edward Willis Redfield",
    id: 21470,
  },
  {
    title: "Frederick William MacMonnies",
    id: 35552,
  },
  {
    title: "Daniel Garber",
    id: 34601,
  },
  {
    title: "George Gardner Symons",
    id: 36857,
  },
  {
    title: "George Inness",
    id: 35061,
  },
  {
    title: "Frank Weston Benson",
    id: 33601,
  },
  {
    title: "Walter Gay",
    id: 9387,
  },
  {
    title: "Richard E. Miller",
    id: 17374,
  },
  {
    title: "Jonas Lie",
    id: 35482,
  },
  {
    title: "Wilson Henry Irvine",
    id: 12477,
  },
  {
    title: "Edward Henry Potthast",
    id: 36254,
  },
  {
    title: "Cecilia Beaux",
    id: 33567,
  },
  {
    title: "Willard LeRoy Metcalf",
    id: 35752,
  },
  {
    title: "Charles Courtney Curran",
    id: 5703,
  },
  {
    title: "Thomas Wilmer Dewing",
    id: 34249,
  },
  {
    title: "George Wesley Bellows",
    id: 33591,
  },
  {
    title: "Everett Shinn",
    id: 36651,
  },
  {
    title: "Alson Skinner Clark",
    id: 42876,
  },
  {
    title: "Ashiyuki",
    id: 1161,
  },
  {
    title: "Maurice Utrillo",
    id: 37076,
  },
  {
    title: "Ferdinand Hodler",
    id: 34961,
  },
  {
    title: "Georges Emile Capon",
    id: 40470,
  },
  {
    title: "Max Ernst",
    id: 34418,
  },
  {
    title: "Arthur Ambrose McEvoy",
    id: 16918,
  },
  {
    title: "André Dunoyer de Segonzac",
    id: 41785,
  },
  {
    title: "Jean Metzinger",
    id: 35755,
  },
  {
    title: "Georges Rouault",
    id: 36472,
  },
  {
    title: "Charles Camoin",
    id: 3936,
  },
  {
    title: "Peer Smed",
    id: 36712,
  },
  {
    title: "Margret Craver",
    id: 30815,
  },
  {
    title: "Kurt Seligmann",
    id: 40809,
  },
  {
    title: "Tsugouharu Foujita",
    id: 40582,
  },
  {
    title: "Albert Bloch",
    id: 2663,
  },
  {
    title: "Miyoko Ito",
    id: 35077,
  },
  {
    title: "Kalo Shop (Firm)",
    id: 35185,
  },
  {
    title: "Moche",
    id: 30183,
  },
  {
    title: "Pablo Picasso",
    id: 36198,
  },
  {
    title: "David Goldblatt",
    id: 107761,
  },
  {
    title: "American China Manufactory",
    id: 118109,
  },
  {
    title: "Artist unknown",
    id: 114854,
  },
  {
    title: "Bill Brandt",
    id: 33736,
  },
  {
    title: "Nan Goldin",
    id: 43762,
  },
  {
    title: "Maya",
    id: 44741,
  },
  {
    title: "Jasper Johns",
    id: 35139,
  },
  {
    title: "Elizabeth Catlett",
    id: 42649,
  },
  {
    title: "Evelyn Statsinger",
    id: 36779,
  },
  {
    title: "William Holman Hunt",
    id: 40975,
  },
  {
    title: "Pedro Pruna",
    id: 21143,
  },
  {
    title: "Dan Flavin",
    id: 34492,
  },
  {
    title: "Gorham Manufacturing Company",
    id: 31914,
  },
  {
    title: "Mount Washington Glass Works",
    id: 32075,
  },
  {
    title: "Philip Guston",
    id: 34772,
  },
  {
    title: "Gedi Sibony",
    id: 115167,
  },
  {
    title: "Kenneth Noland",
    id: 36037,
  },
  {
    title: "Christina Quarles",
    id: 116559,
  },
  {
    title: "Ralph Arnold",
    id: 111635,
  },
  {
    title: "Roger Brown",
    id: 33774,
  },
  {
    title: "Roman Opalka",
    id: 36089,
  },
  {
    title: "Sue Williams",
    id: 60412,
  },
  {
    title: "Arakawa Shūsaku",
    id: 975,
  },
  {
    title: "Max Beckmann",
    id: 33571,
  },
  {
    title: "Mark Rothko",
    id: 36467,
  },
  {
    title: "Jacob de Gheyn, II",
    id: 40598,
  },
  {
    title: "Berthe Morisot",
    id: 35834,
  },
  {
    title: "Hilaire Germain Edgar Degas",
    id: 40543,
  },
  {
    title: "Rembrandt van Rijn",
    id: 40769,
  },
  {
    title: "Marc Chagall",
    id: 33909,
  },
  {
    title: "Andy Warhol",
    id: 37219,
  },
  {
    title: "Édouard Manet",
    id: 35577,
  },
  {
    title: "Amedeo Modigliani",
    id: 35801,
  },
  {
    title: "Ed Ruscha",
    id: 40791,
  },
  {
    title: "Lyonel Feininger",
    id: 34470,
  },
  {
    title: "Jean Baptiste André Gautier d'Agoty",
    id: 55053,
  },
  {
    title: "Pierre-Auguste Renoir",
    id: 36351,
  },
  {
    title: "Louise Moillon",
    id: 17526,
  },
  {
    title: "Vincent van Gogh",
    id: 40610,
  },
  {
    title: "Qiu Ying",
    id: 33901,
  },
  {
    title: "Chen Yanqing",
    id: 85115,
  },
  {
    title: "Mughal",
    id: 104691,
  },
  {
    title: "Henri Matisse",
    id: 35670,
  },
  {
    title: "Alice Sheene",
    id: 23719,
  },
  {
    title: "Jean-François Rafaëlli",
    id: 40762,
  },
  {
    title: "Louise Nevelson",
    id: 35996,
  },
  {
    title: "Suzanne Duchamp",
    id: 40559,
  },
  {
    title: "Ancient Egyptian",
    id: 37541,
  },
  {
    title: "Pierre Bonnard",
    id: 33692,
  },
  {
    title: "Keith Haring",
    id: 65199,
  },
  {
    title: "Mike Kelley",
    id: 65899,
  },
  {
    title: "Robert Motherwell",
    id: 35851,
  },
  {
    title: "Victor Grippo",
    id: 55932,
  },
  {
    title: "Nicole Eisenman",
    id: 52252,
  },
  {
    title: "Martin Wong",
    id: 60556,
  },
  {
    title: "Ancient Roman",
    id: 51349,
  },
  {
    title: "Pierre Soulages",
    id: 24546,
  },
  {
    title: "Dorothea Lange",
    id: 42935,
  },
  {
    title: "Marisol",
    id: 31944,
  },
  {
    title: "Frederick Weston",
    id: 117480,
  },
  {
    title: "Faith Ringgold",
    id: 56742,
  },
  {
    title: "Magdalena Abakanowicz",
    id: 106,
  },
  {
    title: "Bonaventure M. Lebert",
    id: 55808,
  },
  {
    title: "Marcel Duchamp",
    id: 34316,
  },
  {
    title: "Thomas Rowlandson",
    id: 36480,
  },
  {
    title: "Michel Wolgemut",
    id: 28949,
  },
  {
    title: "Harry Callahan",
    id: 33841,
  },
  {
    title: "Charles Sheeler",
    id: 36631,
  },
  {
    title: "R. Gray",
    id: 107228,
  },
  {
    title: "David Hockney",
    id: 34956,
  },
  {
    title: "Georges Seurat",
    id: 40810,
  },
  {
    title: "Jan van Huysum",
    id: 40636,
  },
  {
    title: "Janet Stayton",
    id: 58473,
  },
  {
    title: "Pierre-Jacques Volaire",
    id: 27571,
  },
  {
    title: "Giovanni Maria Benzoni",
    id: 33603,
  },
  {
    title: "Rudolf von Alt",
    id: 37179,
  },
  {
    title: "Jitish Kallat",
    id: 108171,
  },
  {
    title: "Georgia O'Keeffe",
    id: 36062,
  },
  {
    title: "Ivan Albright",
    id: 33376,
  },
  {
    title: "Claes Oldenburg",
    id: 36082,
  },
  {
    title: "Salvador Dalí",
    id: 34123,
  },
  {
    title: "Luis Medina",
    id: 35721,
  },
  {
    title: "José Lopez",
    id: 15574,
  },
  {
    title: "Charles White",
    id: 42434,
  },
  {
    title: "Otis Kaye",
    id: 114379,
  },
  {
    title: "William A. Mitchell",
    id: 114478,
  },
  {
    title: "William Michael Harnett",
    id: 10930,
  },
  {
    title: "Du Paquier Porcelain Manufactory",
    id: 36482,
  },
  {
    title: "Sylvia Plimack Mangold",
    id: 61535,
  },
  {
    title: "Gertrude Abercrombie",
    id: 135,
  },
  {
    title: "Kalabari",
    id: 103646,
  },
  {
    title: "Charles-Antoine Coypel",
    id: 34060,
  },
  {
    title: "Elihu Vedder",
    id: 37133,
  },
  {
    title: "Kitagawa Utamaro",
    id: 37074,
  },
  {
    title: "Joan Miró",
    id: 32048,
  },
  {
    title: "William Bonnell",
    id: 2870,
  },
  {
    title: "Narcissa Niblack Thorne",
    id: 26086,
  },
  {
    title: "Edward Kemeys",
    id: 35237,
  },
  {
    title: "Elizaveta Nikitina",
    id: 113616,
  },
  {
    title: "Beauford Delaney",
    id: 37456,
  },
  {
    title: "Chimú",
    id: 29992,
  },
  {
    title: "Makonde",
    id: 30150,
  },
  {
    title: "William France",
    id: 112405,
  },
  {
    title: "Paul Gauguin",
    id: 34611,
  },
  {
    title: "Islamic",
    id: 29882,
  },
  {
    title: "Tlingit",
    id: 30020,
  },
  {
    title: "Marion Perkins",
    id: 20320,
  },
  {
    title: "Frank L. Koralewsky",
    id: 14279,
  },
  {
    title: "Bernat Martorell",
    id: 16414,
  },
  {
    title: "Benedetto Buglioni",
    id: 33799,
  },
  {
    title: "John Constable",
    id: 34023,
  },
  {
    title: "Ragnar Kjartansson",
    id: 114275,
  },
  {
    title: "Gordon Parks",
    id: 20027,
  },
  {
    title: "Daniel Chester French",
    id: 33951,
  },
  {
    title: "William Rush",
    id: 32671,
  },
  {
    title: "Cy Twombly",
    id: 37052,
  },
  {
    title: "Roy Lichtenstein",
    id: 35480,
  },
  {
    title: "Shaker",
    id: 36621,
  },
  {
    title: "Francis Picabia",
    id: 36197,
  },
  {
    title: "Margaret Bourke-White",
    id: 3027,
  },
  {
    title: "Edward Hopper",
    id: 34996,
  },
  {
    title: "Jean Auguste Dominique Ingres",
    id: 35059,
  },
  {
    title: "Gustave Caillebotte",
    id: 3829,
  },
  {
    title: "Philips Galle",
    id: 53548,
  },
  {
    title: "Master of the Liechtenstein Adoration",
    id: 86811,
  },
  {
    title: "Vladimir I. Ladiagin",
    id: 105923,
  },
  {
    title: "Adam Eck",
    id: 52030,
  },
  {
    title: "Bertrand Goldberg",
    id: 31299,
  },
  {
    title: "James VanDerZee",
    id: 47950,
  },
  {
    title: "Domenico Theotokópoulos, called El Greco",
    id: 42134,
  },
  {
    title: "Jan Steen",
    id: 36780,
  },
  {
    title: "Gerard ter Borch",
    id: 25652,
  },
  {
    title: "Felipe Jesus Consalvos",
    id: 111851,
  },
  {
    title: "Unknown Maker",
    id: 117550,
  },
  {
    title: "Isamu Noguchi",
    id: 36035,
  },
  {
    title: "Meissen Porcelain Manufactory",
    id: 35729,
  },
  {
    title: "Man Ray (Emmanuel Radnitzky)",
    id: 36331,
  },
  {
    title: "Doris Lee",
    id: 15033,
  },
  {
    title: "Robert Rauschenberg",
    id: 36326,
  },
  {
    title: "Samuel Gragg",
    id: 10141,
  },
  {
    title: "Workshop of Paolo Veronese",
    id: 46359,
  },
  {
    title: "Henri de Toulouse-Lautrec",
    id: 40869,
  },
  {
    title: "Nicolas Poussin",
    id: 36259,
  },
  {
    title: "Kasimir Malevich",
    id: 61495,
  },
  {
    title: "John Marin",
    id: 35606,
  },
  {
    title: "Kukryniksy",
    id: 71413,
  },
  {
    title: "Vija Celmins",
    id: 30710,
  },
  {
    title: "Chaim Soutine",
    id: 36754,
  },
  {
    title: "Amadeo de Souza Cardoso",
    id: 43557,
  },
  {
    title: "Takamura Kо̄un",
    id: 58815,
  },
  {
    title: "Esther Howland",
    id: 12104,
  },
  {
    title: "Peter Blume",
    id: 33672,
  },
  {
    title: "Willem de Kooning",
    id: 33229,
  },
  {
    title: "Katsushika Hokusai",
    id: 31492,
  },
  {
    title: "Diego Rivera",
    id: 36397,
  },
  {
    title: "Bisa Butler",
    id: 116361,
  },
  {
    title: "Marquis Filippo Petrone",
    id: 115820,
  },
  {
    title: "Wei Zhang",
    id: 114412,
  },
  {
    title: "Grant Wood",
    id: 37343,
  },
  {
    title: "María Josefa Sánchez",
    id: 115812,
  },
  {
    title: "Felix Gonzalez-Torres",
    id: 55343,
  },
  {
    title: "Gerrit van Honthorst",
    id: 26935,
  },
  {
    title: "Archibald John Motley Jr.",
    id: 42445,
  },
  {
    title: "Joan Mitchell",
    id: 17463,
  },
  {
    title: "Claude Monet",
    id: 35809,
  },
  {
    title: "Eldzier Cortor",
    id: 42645,
  },
  {
    title: "Stuart Davis",
    id: 34155,
  },
  {
    title: "Frank Lloyd Wright",
    id: 37362,
  },
  {
    title: "Joshua Johnson",
    id: 77459,
  },
  {
    title: "John Quincy Adams Ward",
    id: 37214,
  },
  {
    title: "Chinese export porcelain",
    id: 107170,
  },
  {
    title: "Thomas Cole",
    id: 34007,
  },
  {
    title: "De Scott Evans",
    id: 52802,
  },
  {
    title: "George Jakob Hunzinger",
    id: 61663,
  },
  {
    title: "Harriet Hosmer",
    id: 44267,
  },
  {
    title: "Gabriele Münter",
    id: 44013,
  },
  {
    title: "Piet Mondrian",
    id: 17549,
  },
  {
    title: "František Kupka",
    id: 35358,
  },
  {
    title: "Constantin Brancusi",
    id: 33735,
  },
  {
    title: "Giorgio de Chirico",
    id: 40490,
  },
  {
    title: "Vasily Kandinsky",
    id: 35188,
  },
  {
    title: "Follower of Rembrandt van Rijn",
    id: 46418,
  },
  {
    title: "Dawit L. Petros",
    id: 117113,
  },
  {
    title: "Byzantine",
    id: 37902,
  },
  {
    title: "Ancient Greek",
    id: 2601,
  },
  {
    title: "Ancient Levantine",
    id: 74893,
  },
  {
    title: "Ancient Eastern Mediterranean",
    id: 38860,
  },
  {
    title: "Ancient Mediterranean",
    id: 29953,
  },
  {
    title: "Aubrey Vincent Beardsley",
    id: 40429,
  },
  {
    title: "Edward Weston",
    id: 37275,
  },
  {
    title: "Sigmar Polke",
    id: 36226,
  },
  {
    title: "Timothy Cole",
    id: 34008,
  },
  {
    title: "Lobi",
    id: 30172,
  },
  {
    title: "Ben Patterson",
    id: 63997,
  },
  {
    title: "Aaron Koblin",
    id: 111934,
  },
  {
    title: "John Beasley Greene",
    id: 31335,
  },
  {
    title: "Stefan Sagmeister",
    id: 108845,
  },
  {
    title: "Anne Allen",
    id: 105893,
  },
  {
    title: "Tiffany Studios (Firm)",
    id: 15615,
  },
  {
    title: "Painter of Tarquinia RC 3984",
    id: 74273,
  },
  {
    title: "José Clemente Orozco",
    id: 36095,
  },
  {
    title: "Ixion Painter",
    id: 115219,
  },
  {
    title: "Perugia Painter",
    id: 115215,
  },
  {
    title: "Laton Alton Huffman",
    id: 35014,
  },
  {
    title: "René Magritte",
    id: 15965,
  },
  {
    title: "Baga",
    id: 30350,
  },
  {
    title: "Chicago Painter",
    id: 44842,
  },
  {
    title: "Claude Cahun",
    id: 97927,
  },
  {
    title: "Jean (Hans) Arp",
    id: 40418,
  },
  {
    title: "Yves Tanguy",
    id: 36881,
  },
  {
    title: "Matta",
    id: 40694,
  },
  {
    title: "Isaia da Pisa",
    id: 64404,
  },
  {
    title: "Ana De Orbegoso",
    id: 116714,
  },
  {
    title: "Noda Tetsuya",
    id: 32349,
  },
  {
    title: "Joseph Cornell",
    id: 34033,
  },
  {
    title: "Albert Bierstadt",
    id: 33637,
  },
  {
    title: "Hale Woodruff",
    id: 44021,
  },
  {
    title: "Joseph Mallord William Turner",
    id: 37043,
  },
  {
    title: "Camille Pissarro",
    id: 36211,
  },
  {
    title: "Bamileke",
    id: 44901,
  },
  {
    title: "Samuel Kirk & Son (Baltimore, Md.)",
    id: 43678,
  },
  {
    title: "Tiffany and Company",
    id: 36977,
  },
  {
    title: "Andrew Ellicot Warner Jr.",
    id: 27987,
  },
  {
    title: "George Paulding Farnham",
    id: 104738,
  },
  {
    title: "Jessie M. Preston",
    id: 64640,
  },
  {
    title: "Mildred Watkins",
    id: 28042,
  },
  {
    title: "Ed Wiener",
    id: 33106,
  },
  {
    title: "Charters, Cann & Dunn",
    id: 111045,
  },
  {
    title: "Obadiah Rich",
    id: 21709,
  },
  {
    title: "George W. Shiebler",
    id: 112033,
  },
  {
    title: "Harvey Lewis",
    id: 15247,
  },
  {
    title: "William Frederick",
    id: 43383,
  },
  {
    title: "Erik Magnussen",
    id: 15960,
  },
  {
    title: "Arthur Jon Pulos",
    id: 32523,
  },
  {
    title: "John Prip",
    id: 36282,
  },
  {
    title: "Peter Müller-Munk",
    id: 102742,
  },
  {
    title: "Renard Koehnemann",
    id: 92545,
  },
  {
    title: "Gene Theobald",
    id: 87541,
  },
  {
    title: "Oscar Riedener",
    id: 86403,
  },
  {
    title: "Joseph Richardson Jr.",
    id: 43691,
  },
  {
    title: "John Hull",
    id: 43672,
  },
  {
    title: "Edward Winslow",
    id: 37323,
  },
  {
    title: "Cornelius Kierstede",
    id: 31712,
  },
  {
    title: "Moody Russell",
    id: 36497,
  },
  {
    title: "John Dixwell",
    id: 6753,
  },
  {
    title: "Cornelius Vanderburgh",
    id: 43706,
  },
  {
    title: "Jeremiah Dummer",
    id: 30985,
  },
  {
    title: "Charles Le Roux",
    id: 31816,
  },
  {
    title: "Jacob Marius Groen",
    id: 10332,
  },
  {
    title: "William Cowell",
    id: 43343,
  },
  {
    title: "Jacob Boelen, I",
    id: 43534,
  },
  {
    title: "Jacob Hurd",
    id: 35033,
  },
  {
    title: "Myer Myers",
    id: 35943,
  },
  {
    title: "John Burt",
    id: 3715,
  },
  {
    title: "Benjamin Burt",
    id: 3713,
  },
  {
    title: "Samuel Edwards",
    id: 43654,
  },
  {
    title: "Bancroft Woodcock",
    id: 37349,
  },
  {
    title: "Thomas Edwards",
    id: 43655,
  },
  {
    title: "Ephraim Brasher",
    id: 33740,
  },
  {
    title: "William Grigg",
    id: 10310,
  },
  {
    title: "Thomas Shields",
    id: 36639,
  },
  {
    title: "Andrew Tyler",
    id: 26760,
  },
  {
    title: "John Bayly",
    id: 30539,
  },
  {
    title: "Joseph Richardson, Sr.",
    id: 43690,
  },
  {
    title: "William Simpkins",
    id: 36701,
  },
  {
    title: "William Cowell Jr.",
    id: 5456,
  },
  {
    title: "Daniel Van Voorhis",
    id: 27231,
  },
  {
    title: "Jean-Simon Chaudron",
    id: 4581,
  },
  {
    title: "Ward, Bartholomew & Trott",
    id: 115203,
  },
  {
    title: "Thomas Fletcher",
    id: 8441,
  },
  {
    title: "William Gale, & Son",
    id: 43658,
  },
  {
    title: "Cann & Dunn",
    id: 77199,
  },
  {
    title: "Dominick and Haff",
    id: 43653,
  },
  {
    title: "Elizabeth E. Copeland",
    id: 30800,
  },
  {
    title: "Shreve, Crump & Low Department Store, Arts and Crafts Shop",
    id: 30490,
  },
  {
    title: "Mary Catherine Knight",
    id: 31732,
  },
  {
    title: "Arthur J. Stone",
    id: 115213,
  },
  {
    title: "Shreve & Co.",
    id: 77235,
  },
  {
    title: "Robert Riddle Jarvie",
    id: 35112,
  },
  {
    title: "Lebolt and Company",
    id: 35434,
  },
  {
    title: "Albert Feinauer",
    id: 113610,
  },
  {
    title: "Donald Colflesh",
    id: 110903,
  },
  {
    title: "Whiting Manufacturing Company",
    id: 37286,
  },
  {
    title: "Charles Osborne",
    id: 113748,
  },
  {
    title: "Gorham and Thurber",
    id: 10040,
  },
  {
    title: "Herter Brothers",
    id: 34919,
  },
  {
    title: "A. & H. Lejambre",
    id: 115810,
  },
  {
    title: "Arthur Wesley Dow",
    id: 43629,
  },
  {
    title: "Thackara, Buck & Co.",
    id: 115589,
  },
  {
    title: "Fernand Lungren",
    id: 15733,
  },
  {
    title: "Robert Henri",
    id: 34901,
  },
  {
    title: "Walter Ufer",
    id: 26805,
  },
  {
    title: "Malvina Hoffman",
    id: 34964,
  },
  {
    title: "William James Glackens",
    id: 40608,
  },
  {
    title: "W. Victor Higgins",
    id: 11526,
  },
  {
    title: "Reuben Haley",
    id: 88297,
  },
  {
    title: "Max Kuehne",
    id: 114480,
  },
  {
    title: "Charles Prendergast",
    id: 64631,
  },
  {
    title: "Martha Ryther Kantor",
    id: 22650,
  },
  {
    title: "Paul Manship",
    id: 35583,
  },
  {
    title: "Rockwell Kent",
    id: 35240,
  },
  {
    title: "Steuben Division, Corning Glass Works",
    id: 36799,
  },
  {
    title: "Paul Theodore Frankl",
    id: 81689,
  },
  {
    title: "Marguerite Zorach",
    id: 61151,
  },
  {
    title: "Ilonka Karasz",
    id: 31677,
  },
  {
    title: "Cauleen Smith",
    id: 115027,
  },
  {
    title: "Kerry James Marshall",
    id: 47905,
  },
  {
    title: "William Zorach",
    id: 37421,
  },
  {
    title: "Joseph Stella",
    id: 36791,
  },
  {
    title: "Marsden Hartley",
    id: 34853,
  },
  {
    title: "John Bradley Storrs",
    id: 40857,
  },
  {
    title: "Senufo",
    id: 30074,
  },
  {
    title: "Vili",
    id: 50920,
  },
  {
    title: "Northern Nguni",
    id: 30176,
  },
  {
    title: "Wifredo Lam",
    id: 14663,
  },
  {
    title: "Wolfgang Paalen",
    id: 42737,
  },
  {
    title: "Theresa F. Bernstein",
    id: 2272,
  },
  {
    title: "Albert Schindler",
    id: 102578,
  },
  {
    title: "Totonac",
    id: 29952,
  },
  {
    title: "Tosa Mitsuoki",
    id: 26388,
  },
  {
    title: "Kwang-cho Yoon",
    id: 115992,
  },
  {
    title: "Seo-Bo Park",
    id: 114646,
  },
  {
    title: "Kim Eung-won",
    id: 103544,
  },
  {
    title: "Concha Jerez",
    id: 116611,
  },
  {
    title: "Bruce Thorn",
    id: 59034,
  },
  {
    title: "Jenny Holzer",
    id: 67527,
  },
  {
    title: "Ed Clark",
    id: 52490,
  },
  {
    title: "Gladys Nilsson",
    id: 36022,
  },
  {
    title: "Bronislaw M. Bak",
    id: 33511,
  },
  {
    title: "Annie Ensminger Kready",
    id: 117359,
  },
  {
    title: "Leafless Group",
    id: 115216,
  },
  {
    title: "Caylus Painter",
    id: 115218,
  },
  {
    title: "Michigan Painter",
    id: 115221,
  },
  {
    title: "Gauri Gill",
    id: 116076,
  },
  {
    title: "George Grosz",
    id: 34753,
  },
  {
    title: "Christien Meindertsma",
    id: 111101,
  },
  {
    title: "Mary Georgiana Caroline, Lady Filmer",
    id: 106913,
  },
  {
    title: "Marcia Lausen",
    id: 108769,
  },
  {
    title: "Terry Evans",
    id: 56492,
  },
  {
    title: "Norman Parish",
    id: 115752,
  },
  {
    title: "Wanda Pimentel",
    id: 114672,
  },
  {
    title: "Fujiko Shiraga",
    id: 62087,
  },
  {
    title: "Benny Andrews",
    id: 48591,
  },
  {
    title: "Daniel Buren",
    id: 3649,
  },
  {
    title: "Honoré-Victorin Daumier",
    id: 40517,
  },
  {
    title: "Ellsworth Kelly",
    id: 35235,
  },
  {
    title: "Olowe of Ise",
    id: 44236,
  },
  {
    title: "Ah Maxam",
    id: 105658,
  },
  {
    title: "John Spilman",
    id: 109936,
  },
  {
    title: "Jacques Callot",
    id: 33844,
  },
  {
    title: "Workshop of Rembrandt van Rijn",
    id: 81339,
  },
  {
    title: "Aztec (Mexica)",
    id: 29878,
  },
  {
    title: "Montgomery Simons",
    id: 117298,
  },
  {
    title: "Joseph Yoakum",
    id: 40896,
  },
  {
    title: "Longyu, Empress Dowager of China",
    id: 37032,
  },
  {
    title: "Kôetsu",
    id: 70975,
  },
  {
    title: "Ibe Kyoko",
    id: 114254,
  },
  {
    title: "Pola Gauguin",
    id: 50727,
  },
  {
    title: "Suzuki Harunobu",
    id: 36845,
  },
  {
    title: "Armand Séguin",
    id: 23447,
  },
  {
    title: "Ito Shinsui",
    id: 36653,
  },
  {
    title: "Imitator of Pierre-Auguste Renoir",
    id: 47166,
  },
  {
    title: "Ancient Mesopotamian",
    id: 30258,
  },
  {
    title: "Chen Jiayan",
    id: 4309,
  },
  {
    title: "Artist Unknown",
    id: 109629,
  },
  {
    title: "Theodore Roussel",
    id: 57047,
  },
  {
    title: "John Grazier",
    id: 42771,
  },
  {
    title: "James Ensor",
    id: 40566,
  },
  {
    title: "Francisco José de Goya y Lucientes",
    id: 40615,
  },
  {
    title: "Martin Schongauer",
    id: 23279,
  },
  {
    title: "Johann Theodor de Bry",
    id: 39533,
  },
  {
    title: "Odilon Redon",
    id: 36336,
  },
  {
    title: "Adriaen van Ostade",
    id: 41137,
  },
  {
    title: "Dogon",
    id: 38734,
  },
  {
    title: "Edgar Heap of Birds",
    id: 65364,
  },
  {
    title: "Manchu",
    id: 87635,
  },
  {
    title: "Käthe Kollwitz",
    id: 40649,
  },
  {
    title: "Horace Pippin",
    id: 37451,
  },
  {
    title: "Ronnie Landfield",
    id: 14702,
  },
  {
    title: "Nasca",
    id: 29844,
  },
  {
    title: "Alice Rahon",
    id: 55561,
  },
  {
    title: "Dawoud Bey",
    id: 86099,
  },
  {
    title: "Jean-Baptiste Oudry",
    id: 36100,
  },
  {
    title: "Richard Hunt",
    id: 35028,
  },
  {
    title: "Daniel Müller",
    id: 114257,
  },
  {
    title: "Roger Shimomura",
    id: 57876,
  },
  {
    title: "Alma Thomas",
    id: 44708,
  },
  {
    title: "Todros Geller",
    id: 34621,
  },
  {
    title: "Amanda Williams",
    id: 38121,
  },
  {
    title: "Daniel Hudson Burnham",
    id: 50668,
  },
  {
    title: "Coclé",
    id: 30773,
  },
  {
    title: "Walter T. Bailey",
    id: 103316,
  },
  {
    title: "Allie Pettway",
    id: 100025,
  },
  {
    title: "Leonard Wells Volk",
    id: 27573,
  },
  {
    title: "Jordan Casteel",
    id: 117434,
  },
  {
    title: "Shipibo",
    id: 30128,
  },
  {
    title: "André Kertész",
    id: 31706,
  },
  {
    title: "Augustus Saint-Gaudens",
    id: 36518,
  },
  {
    title: "Adriaen van der Spelt",
    id: 24621,
  },
  {
    title: "Kukuli Velarde",
    id: 117544,
  },
  {
    title: "Hughie Lee-Smith",
    id: 55889,
  },
  {
    title: "Jacob Lawrence",
    id: 14911,
  },
  {
    title: "Onchi Kōshirō",
    id: 36085,
  },
  {
    title: "Erasmus de Pannemaker, I",
    id: 109189,
  },
  {
    title: "Karel van Mander, II",
    id: 47416,
  },
  {
    title: "Jacques Geubels, I",
    id: 109187,
  },
  {
    title: "Antoine Caron",
    id: 42484,
  },
  {
    title: "Jan van Leefdael",
    id: 47415,
  },
  {
    title: "Sir Edward Burne-Jones",
    id: 40460,
  },
  {
    title: "Circle of Andrea Mantegna",
    id: 46935,
  },
  {
    title: "Michiel Coxcie, I",
    id: 40507,
  },
  {
    title: "Bernard van Orley",
    id: 19723,
  },
  {
    title: "Geraert Peemans",
    id: 20234,
  },
  {
    title: "Manufacture Royale d’Aubusson",
    id: 108789,
  },
  {
    title: "Manufacture Royale de Beauvais",
    id: 108781,
  },
  {
    title: "Manufacture de Aubusson",
    id: 48859,
  },
  {
    title: "François Boucher",
    id: 40453,
  },
  {
    title: "Jan Leyniers",
    id: 15269,
  },
  {
    title: "Antonio Tempesta",
    id: 36901,
  },
  {
    title: "Guilliam van Leefdael",
    id: 70859,
  },
  {
    title: "Workshop of Gerard Peemans",
    id: 108772,
  },
  {
    title: "Lorenzo Lippi",
    id: 43944,
  },
  {
    title: "John Vanderbank",
    id: 49095,
  },
  {
    title: "Claude III Audran",
    id: 48865,
  },
  {
    title: "Evrard Leyniers",
    id: 98277,
  },
  {
    title: "Workshop of Daniel IV Leyniers",
    id: 106623,
  },
  {
    title: "Willem de Pannemaker",
    id: 32412,
  },
  {
    title: "Etienne Jeaurat",
    id: 42404,
  },
  {
    title: "Jan van Tiegen",
    id: 59058,
  },
  {
    title: "Daniel Janssens",
    id: 78907,
  },
  {
    title: "David Teniers",
    id: 35471,
  },
  {
    title: "Wauters Workshop",
    id: 109220,
  },
  {
    title: "Jean Baptiste Monnoyer",
    id: 35811,
  },
  {
    title: "Hans Bol",
    id: 30509,
  },
  {
    title: "Follower of Bernard van Orley",
    id: 46333,
  },
  {
    title: "Workshop of Léonard Roby",
    id: 108794,
  },
  {
    title: "Nicolaas van Orley",
    id: 109191,
  },
  {
    title: "Lodewijk van Schoor",
    id: 108777,
  },
  {
    title: "Tai Xiangzhou",
    id: 114512,
  },
  {
    title: "Guy-Louis Vernansal",
    id: 108780,
  },
  {
    title: "Edvard Munch",
    id: 44014,
  },
  {
    title: "William Hallett",
    id: 114065,
  },
  {
    title: "Raffaello Botticini",
    id: 42705,
  },
  {
    title: "Nathaniel Mary Quinn",
    id: 114627,
  },
  {
    title: "May Morris",
    id: 65385,
  },
  {
    title: "William Morris",
    id: 35845,
  },
  {
    title: "Scipione Del Campo",
    id: 50814,
  },
  {
    title: "Delores Juanico",
    id: 116823,
  },
  {
    title: "Tibeto-Chinese",
    id: 113171,
  },
  {
    title: "Ni Zan",
    id: 61317,
  },
  {
    title: "Sekino Jun’ichirō",
    id: 35168,
  },
  {
    title: "Basawan",
    id: 100581,
  },
  {
    title: "Hubert Robert",
    id: 36407,
  },
  {
    title: "Asante",
    id: 29867,
  },
  {
    title: "Albrecht Dürer",
    id: 40561,
  },
  {
    title: "Emma Amos",
    id: 48524,
  },
  {
    title: "Amos Doolittle",
    id: 6846,
  },
  {
    title: "John Henry Dearle",
    id: 60143,
  },
];
export default artistsList;
