import Generate from "../assets/Magic.svg"
import Folders from "../assets/Folder_duotone_fill.svg"
import Moon from "../assets/Time_atack_duotone.svg"
import Apps from "../assets/apps.svg"

import Google from "../assets/google-color.svg"
import Facebook from "../assets/facebook-round-color-icon.svg"

const colors = ["#DD524C", "#4E80EE", "green", "#E87B35", "#7C71FF", "#E4E4E7"]

const navItems = [

    { id: 1, image: Generate, to:"/create", text: "Generate Image" },
    { id: 2, image: Apps, to: "/feed", text: "Feed" },
    { id: 3, image: Moon, to: "/history", text: "Generation History" },
    { id: 4, image: Folders, to: "/collections", text: "My Collections" },
  
  ];

  const signInButtons = [
    {id: 0, image: Google, url: "https://server.ai-image-project.com/auth/google/callback", alt: "Google", text: "Sign In with Google"},
    {id: 1, image: Facebook, url: "https://server.ai-image-project.com/auth/facebook/callback", alt: "Facebook", text: "Sign In with Facebook"},
  ]

  const resolutions = ["1024x1024", "1792x1024", "1024x1792"]

  const quality = ["vivid", "natural"]

  const randomPrompts = [
    "robotic eye, macro photography",
    "bug, micro 1mm photograph",
    "20mm macro of a ginger bread man. Crumbs in the table. Split-lighting",
    "cute rabbit night light",
    "biobotics moth",
    "NeonFiber grizzley bear in the woods, low angle",
    "pixel art, icon, the hulk, front facing, full body",
    "Majestic movie like results",
    "Fiery Dragon with smoke, night time, blue orange split-lighting, 3d, digital art, cinemax, 8k, hbomax, blurred background, extreme detail, uhd, high resolution",
    "Fiery Dragon with smoke, night time, blue orange split-lighting, 3d, digital art, blurred background, extreme detail, uhd, high res, 8k",
    "simple minimalistic origami art of a bulldog with a plain background",
    "robot closeup, line dot art, black background",
    "A marble Greek statue of an overweight cat in the Olymp, studio light",
    "A shiny golden statue of a pirate skull in an abyss setting, studio light, photo realistic, detailed textures, Sigma 85 mm f/1.4. High Definition, Bokeh",
    "rabbit made out of one dollar bill, money, banknotes art, shutterstock, creative commons attribution, conceptual art, stock photo",
    "banksy like black paint art against a torn down brownish wall showing a sentinel robot being touching the tip of the finger of a human being, creative commons attribution, conceptual art, stock photo",
    "rabbit land apotheosis",
    "adorable lama eating cake, in style of pixar, highly detailed, photorealistic, cinematic",
    "Specimen inside a glass jar with a rusty lid, green bioluminescence, inner glow, no reflection, blurred lab background, 3D, digital art",
    "a mushroom, anthotype print",
    "a funny creature made of gel and white cream like fluids carrying a big question mark, in style of pixar, highly detailed, photorealistic, cinematic",
    "Spaceship interior with astronaut, night time, blue orange split-lighting, 3d, digital art, cally3d",
    "massive rabbit cut out of rock, plant overgrowth all over it and coming out of the bowl, warm colors in style of pixar, highly detailed, photorealistic, cinematic",
    "A wide shot of a very fancy dressed pigeon standing still with plenty of jewelery, long exposure, dust particles, strips of semi-gloss fabric waving in the air, highly detailed, photorealistic, cinematic",
    "Cute cartoon owl with big glasses making a thankful gesture by putting her wings together over her breast, smiling, pixar style, close-up, highly detailed, bokeh",
    "Silhouette of a cute obese rabbit, backlit by colourful neon, neon lighting in the background",
    "oil tank platform in the middle of the ocean, cinematic, neon vibes, storm clouds, water splashing against the camera",
    "diorama of a robot crawling through a vast ocean through the high waves, pulling a little boat by a cord line behind it, realistic",
    "diorama, tilt-shift, monster cows downhill",
    "diorama of the a-team driving with their black van through explosions and mayhem, low angle, realistic, Bokeh",
    "an extreme minimalistic shot of a rabbit, black and white, slow shutter, calming and introspective aeasthetic, pastroal scenes, serene, atmosphere and moody landscape",
    "A man staring at the ocean. Minimalist art. Sketch in charcoal",
    "a creature that looks like a mashup of a giant Tyrannosaurus Rex and an ugly Turkey, tiny front limbs, big dinosaur jaw and head, standing in a forrest clearing, photo realistic, bokeh",
    "a photo of a blue fur monster with sunglasses and big grin with computers in the background of an orange room",
    "A cute elephant that features a skin covered with multi colored square patterns. Pixar style, highly detailed, emerging from the depth of the jungle, high movement",
    "close-up of a cute baby pirate doll with bells and whistles, rough sea high tides, high movement, Pixar style, water splashes",
    "a pixar style rat with a ventriloquist",
    "wide-shot of a cute cartoon rat with two eye patches and hooks instead of front legs as pirate on a Spanish Galleon, rough sea high tides, high movement, Pixar style, water splashes, split lighting",
    "clean page from a coloring book for children, with cat eating an ice cream, black and white, high quality, high resolution, clear image, white background, ad ink outlines",
    "cute eyes, fluffy, curly, cuddly, vibrant colors, baby pixar dragon, rainbow",
    "a fluffy rolling field with fluffy cotton candy trees, cotton candy clouds, and colorful fluffy dragons playing in the field",
    "retropulp pinup showing a teddy bear, in the style of posters",
    "retropulp picture showing a glorious planet in the vast cosmos, in the style of posters",
    "A cat driving a bicycle, an illustration by Michael Sowa, but as photography",
    "A portrait of a dog in a library, Sigma 85 mm f/1.4.",
    "bowl of fruit, geometric art, bright and vibrant",
    "The jellyfish is the centerpiece of the image, with its long, flowing tentacles extending outward. The body of the jellyfish is semi-transparent and has a soft, pulsating glow, with different shades of blue and purple. The tentacles are also glowing, but with a fainter, more delicate light. The background is dark and featureless, adding to the ethereal, otherworldly feel of the jellyfish. Overall, the image evokes a sense of wonder and tranquility. Realistic.",
    "A plastic cup with liquid being captured in the moment of being overturned by wind on sidewalk of a big city, Sigma 24 mm f/8, 1/1000 sec shutter",
    "Interior of a bright apartment with bookshelves, paintings and windows overlooking the megapolis, Nikon D810 | ISO 64 | focal length 20 mm (Voigtländer 20 mm f3.5) | aperture f/9 | exposure time 1/40 Sec (DRI)",
    "Subterranean Marvel Bottle: Picture a mesmerizing underground world within a bottle. Luminous crystal formations, subterranean lakes, and minuscule creatures are illuminated by a soft, ethereal light, casting enchanting reflections and shadows inside the bottle. Nikon D810 | ISO 64 | focal length 20 mm (Voigtländer 20 mm f3.5) | aperture f/9 | exposure time 1/40 Sec (DRI)",
    "Close-Up of a tattoo with focus on that tattoo, on a hairy leg in white socks and dirty sneakers. The tattoo shows a tribal tattoo art of a cute cat. Sigma 85 mm f/1.4. High Definition, Bokeh.",
    "colorful, tiny, crocheted cute alpaca",
    "wide view of a horse sticking its neck out of a Mustang cabrio, high velocity. Sigma 85 mm f/1.4. High Definition, Bokeh.",
    "wide shot of a bonsai tree growing out of a rabbit in a dirty restroom with no flower pots, spot lighting, Sigma 85 mm f/1.4. High Definition, Bokeh.",
    "A photo realistic picture of a t-shirt on a table from slightly above, featuring the picture of a comic cat on the shirt, Sigma 24 mm f/8, 1/1000 sec shutter",
    "cinematic shot of a teddy bear fighter from east side London, is a jacked plush toy, with a red ribbon, The background is a children play room, and the lighting accentuates their powerful physique. Their stance is powerful and focused, showcasing their combat prowess. ultra wide angle",
    "close-up of a zombie bird starring right into the camera, Sigma 24 mm f/8, 1/1000 sec shutter, bokeh",
    "An action shot of an easter bunny juggling with easter eggs and riding a unicycle, colorful child comic book style",
    "brown haired 30 year old woman with glasses dancing to techno, she is obviously drunk and screaming out of joy, warm colors, highly detailed, photorealistic, cinematic, backlit by colourful neon, neon lighting in the background",
    "A dirty stain covered soup bowl filled with a slimy mold soup covered with a substance that resembles molten cheese on a scratched and dirty table, perspective from above, Nikon D810 | ISO 64 | focal length 20 mm (Voigtländer 20 mm f3.5) | aperture f/9 | exposure time 1/40 Sec (DRI)",
    "a haunted house in the middle of nowhere, the landscape is covered with strange zeros and one numbers going from top to bottom, Sigma 24 mm f/8, 1/1000 sec shutter",
    "a train emitting coal steam while plowing its way into a snowy landscape, the landscape looks like the strange numbers and letters from The Matrix, Sigma 24 mm f/8, 1/1000 sec shutter",
    "Polyethylen Bull, sprinkled with holes and scratches in the surface all around and deep scratches that look like inflicted by lions, in a dark dirty alley, orange and green split light",
    "an elephant climbing a tree, impressionism",
    "Create an image of a golden crown set against a dark background, with the light catching the intricate details of the crown and casting a subtle glow around it",
    "Two turtles racing each other in the moment of being overturned by wind crawling along the sandy shores of of a sunny beach, Sigma 24 mm f/8, 1/1000 sec shutter",
    "fungus cordyceps growing out of a rotten teddy bear, close-up, Sigma 24 mm f/8, 1/1000 sec shutter",
    "a mixture of Frankenstein and Clippy the Microsoft Word Assistant waking up on a bed and connected with wires to a mysterious machinery with plenty of electric sparks, water colors high res",
    "childish, poorly drawn colorful chalk drawing on ruled paper showing candy monsters surrounding a traveler with a backpack, cute and disturbing at the same time",
    "toilet bowl in the middle of an open office room, Ukiyo-e",
    "A funny shot of an easter bunny juggling with easter eggs and riding a unicycle, colorful child comic book style",
    "'A sea otter with a pearl earring' by Johannes Vermeer",
    "An expressive oil painting with bright psychedelic spotty colors of a pirate ship, depicted as an explosion of a nebula",
    "a psychedelic color explosion with bright clouds and stains, digital art",
    "crying bear with tie and briefcase, by Johannes Vermeer",
    "An action shot of an easter bunny juggling with easter eggs and riding a unicycle, Sigma 85 mm",
    "crying bears with ties pushing a horse cart with square wheels, by Johannes Vermeer",
]

export { colors, navItems, resolutions, quality, randomPrompts, signInButtons };