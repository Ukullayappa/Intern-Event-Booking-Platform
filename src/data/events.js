
export const categories = [
  "All",
  "Concert",
  "Festival",
  "Workshop",
  "Seminar",
  "Comedy",
];

export const events = [
  {
    id: "e001",
    title: "Neon Nights Music Festival",
    category: "Festival",
    date: "2026-08-14",
    time: "6:00 PM",
    venue: "Riverside Amphitheatre",
    city: "Metro City",
    price: 65,
    capacity: 4000,
    ticketsLeft: 812,
    organizer: "Pulse Live Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "Three stages, twelve acts, and a closing headline set that runs past midnight. Neon Nights brings electronic, indie, and live-band acts together for one outdoor night.",
    schedule: [
      { time: "6:00 PM", item: "Gates open + local openers" },
      { time: "8:00 PM", item: "Main stage headliners" },
      { time: "11:30 PM", item: "Closing DJ set" },
    ],
  },
  {
    id: "e002",
    title: "Acoustic Sessions: Live in the Park",
    category: "Concert",
    date: "2026-07-22",
    time: "7:30 PM",
    venue: "Greenway Park Bandshell",
    city: "Metro City",
    price: 28,
    capacity: 800,
    ticketsLeft: 145,
    organizer: "Bandshell Collective",
    image:
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "An unplugged evening under string lights — three singer-songwriters, no amps beyond the essentials, bring a blanket and settle into the grass.",
    schedule: [
      { time: "7:30 PM", item: "Doors + seating" },
      { time: "8:00 PM", item: "Opening set" },
      { time: "9:15 PM", item: "Headline performance" },
    ],
  },
  {
    id: "e003",
    title: "UX Design Sprint Workshop",
    category: "Workshop",
    date: "2026-07-10",
    time: "10:00 AM",
    venue: "Innovation Hub, Hall B",
    city: "Metro City",
    price: 45,
    capacity: 60,
    ticketsLeft: 12,
    organizer: "DesignForward Academy",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "A hands-on, full-day design sprint: frame a problem, sketch solutions, build a paper prototype, and test it with real users by 4 PM.",
    schedule: [
      { time: "10:00 AM", item: "Problem framing" },
      { time: "12:30 PM", item: "Lunch + sketching" },
      { time: "2:00 PM", item: "Prototyping" },
      { time: "3:30 PM", item: "User testing" },
    ],
  },
  {
    id: "e004",
    title: "Future of Fintech Seminar",
    category: "Seminar",
    date: "2026-09-03",
    time: "9:00 AM",
    venue: "Grand Convention Center",
    city: "Capital City",
    price: 120,
    capacity: 500,
    ticketsLeft: 233,
    organizer: "Fintech Forward",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "Panels on embedded finance, digital currencies, and regulation with speakers from leading banks and fintech startups.",
    schedule: [
      { time: "9:00 AM", item: "Registration + coffee" },
      { time: "9:30 AM", item: "Keynote" },
      { time: "11:00 AM", item: "Panel discussions" },
      { time: "1:00 PM", item: "Networking lunch" },
    ],
  },
  {
    id: "e005",
    title: "Stand-Up Showcase Night",
    category: "Comedy",
    date: "2026-07-18",
    time: "8:00 PM",
    venue: "The Laugh Cellar",
    city: "Metro City",
    price: 22,
    capacity: 200,
    ticketsLeft: 0,
    organizer: "Cellar Comedy Co.",
    image:
      "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "Five comedians, one mic, zero filters. A rotating lineup of local and touring stand-up acts in an intimate underground room.",
    schedule: [
      { time: "8:00 PM", item: "Doors + host opening" },
      { time: "8:20 PM", item: "Opening acts" },
      { time: "9:15 PM", item: "Headliner set" },
    ],
  },
  {
    id: "e006",
    title: "Harvest Food & Craft Festival",
    category: "Festival",
    date: "2026-10-05",
    time: "11:00 AM",
    venue: "Old Town Square",
    city: "Metro City",
    price: 0,
    capacity: 6000,
    ticketsLeft: 5210,
    organizer: "Old Town Merchants Guild",
    image:
      "https://images.unsplash.com/photo-1474513312726-8d86a8bcbaec?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1604200657090-ae45994b2451?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "Free entry, all day. Local vendors, live cooking demos, and craft stalls fill the square for the season's biggest street festival.",
    schedule: [
      { time: "11:00 AM", item: "Stalls open" },
      { time: "1:00 PM", item: "Cooking demo" },
      { time: "4:00 PM", item: "Live folk band" },
    ],
  },
  {
    id: "e007",
    title: "Jazz & Wine Evening",
    category: "Concert",
    date: "2026-08-02",
    time: "7:00 PM",
    venue: "The Velvet Room",
    city: "Capital City",
    price: 55,
    capacity: 150,
    ticketsLeft: 38,
    organizer: "Velvet Room Presents",
    image:
      "https://images.unsplash.com/photo-1541804627596-3b5b9ef58c93?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1541804627596-3b5b9ef58c93?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "A five-piece jazz quartet, a curated wine flight, and low lighting — an evening built for slow conversation between sets.",
    schedule: [
      { time: "7:00 PM", item: "Doors + wine pour" },
      { time: "7:45 PM", item: "First set" },
      { time: "9:00 PM", item: "Second set" },
    ],
  },
  {
    id: "e008",
    title: "Startup Pitch Night",
    category: "Seminar",
    date: "2026-07-29",
    time: "6:30 PM",
    venue: "Founders Co-working Space",
    city: "Metro City",
    price: 15,
    capacity: 120,
    ticketsLeft: 54,
    organizer: "Metro Startup Network",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&h=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&h=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&h=800&q=80",
    ],
    description:
      "Eight early-stage founders pitch to a panel of local investors, followed by open networking and light refreshments.",
    schedule: [
      { time: "6:30 PM", item: "Registration" },
      { time: "7:00 PM", item: "Pitches begin" },
      { time: "8:30 PM", item: "Networking" },
    ],
  },
];