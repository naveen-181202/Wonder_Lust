const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning views of the ocean and the sound of waves.",
        image: {
            filename:"listingImage",
            url:"https://media.istockphoto.com/id/1982482150/photo/closeup-of-a-beautiful-water-liliy-plant-underwater-in-a-pond-on-a-rainy-summer-day-nature.jpg?s=2048x2048&w=is&k=20&c=OSd0PheGW3HKbmxc1eYC0-PepmEVUuVFxXHTei_O4mo=",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern City Apartment",
        description: "Stylish apartment in the heart of downtown. Perfect for business travelers or city explorers.",
        image:{
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/2164278684/photo/monarch-butterfly-sucking-nectar-on-flower.jpg?s=612x612&w=is&k=20&c=owUdF2AHkbKZO76pGnlUaZEeyaFF6zLdi6hJ6Yzr214=",
        },
        price: 950,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Rustic Mountain Cabin",
        description: "Get away from it all in this peaceful mountain cabin. Ideal for hikers and nature lovers.",
        image: {
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/2164278684/photo/monarch-butterfly-sucking-nectar-on-flower.jpg?s=612x612&w=is&k=20&c=owUdF2AHkbKZO76pGnlUaZEeyaFF6zLdi6hJ6Yzr214=",
        },
        price: 800,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Luxurious Paris Flat",
        description: "Experience the romance of Paris from this luxurious flat near the Eiffel Tower.",
        image:{
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/1982482150/photo/closeup-of-a-beautiful-water-liliy-plant-underwater-in-a-pond-on-a-rainy-summer-day-nature.jpg?s=2048x2048&w=is&k=20&c=OSd0PheGW3HKbmxc1eYC0-PepmEVUuVFxXHTei_O4mo=",
        },
        price: 2000,
        location: "Paris",
        country: "France",
    },
    {
        title: "Traditional Japanese Ryokan",
        description: "Stay in a traditional Japanese inn with tatami mats and hot springs in Kyoto.",
        image: {
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/2164278684/photo/monarch-butterfly-sucking-nectar-on-flower.jpg?s=612x612&w=is&k=20&c=owUdF2AHkbKZO76pGnlUaZEeyaFF6zLdi6hJ6Yzr214=",
        },
        price: 1100,
        location: "Kyoto",
        country: "Japan",
    },
    {
        title: "Santorini Cliffside Villa",
        description: "Marvel at breathtaking sunsets from this cliffside villa overlooking the Aegean Sea.",
        image:{
            filename: "listingImage",
             url:"https://media.istockphoto.com/id/1982482150/photo/closeup-of-a-beautiful-water-liliy-plant-underwater-in-a-pond-on-a-rainy-summer-day-nature.jpg?s=2048x2048&w=is&k=20&c=OSd0PheGW3HKbmxc1eYC0-PepmEVUuVFxXHTei_O4mo=",
        },
        price: 1800,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Safari Lodge in Kenya",
        description: "Adventure awaits in this eco-friendly lodge surrounded by wildlife in the Masai Mara.",
        image:{
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/2158022704/photo/vacation-in-paradise.jpg?s=612x612&w=is&k=20&c=SyeusdDOfjOSg0TTTOXun2-VPY_TquYDdA4DzZIXQxY=",
        },
        price: 1700,
        location: "Masai Mara",
        country: "Kenya",
    },
    {
        title: "Chic Barcelona Loft",
        description: "Enjoy modern living in this artsy loft close to Gaudi’s famous landmarks.",
        image:{
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/2164278684/photo/monarch-butterfly-sucking-nectar-on-flower.jpg?s=612x612&w=is&k=20&c=owUdF2AHkbKZO76pGnlUaZEeyaFF6zLdi6hJ6Yzr214=",
        },
        price: 1200,
        location: "Barcelona",
        country: "Spain",
    },
    {
        title: "Icelandic Glass Cabin",
        description: "Watch the northern lights from your bed in this secluded glass cabin in Iceland.",
        image:{
            filename: "listingImage",
            url:"https://media.istockphoto.com/id/2174429319/photo/colorful-sunset-in-a-tropical-beach-with-palm-tree.jpg?s=612x612&w=is&k=20&c=ZmqQuDxHxQQPVFg0qZwIGdN0Ok6puTJkgTTMs-2ODNo=",
        },
        price: 1600,
        location: "Reykjavik",
        country: "Iceland",
    },
    {
        title: "Desert Dome in Dubai",
        description: "A futuristic dome stay in the Dubai desert with luxury amenities and starry skies.",
        image: {
            filename: "listingImage",
            url:"https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/21138/SM1104677.jpg?date=Mon%20Jun%2016%202025%2018:27:04%20GMT+0530%20(India%20Standard%20Time)",
        },
        price: 1900,
        location: "Dubai",
        country: "United Arab Emirates",
    }
];

module.exports={data:sampleListings};