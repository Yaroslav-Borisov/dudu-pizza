const mockCards = [
	{
		'id': '6',
		'title': 'Додо Микс',
		'desc': 'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/4c7d597ec2074b1589e795d95db75f57_584x584.jpeg',
		'price': 519,
		'category': [
			'hit'
		]
	},
	{
		'id': '0',
		'title': 'Мясной Микс',
		'desc': 'Пастрами из индейки, острая чоризо, пикантная пепперони, бекон, моцарелла, томатный соус',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/9853cd63a136490f9bb353d2e0eae59c_292x292.jpeg',
		'price': 469,
		'category': [
			'new',
			'hot'
		]
	},
	{
		'id': '1',
		'title': 'Индейка с овощами гриль',
		'desc': 'Пастрами из индейки, овощи-гриль, кубики брынзы, моцарелла, томатный соус',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/976f35411e314f6b9cfdaf8461fa08da_292x292.jpeg',
		'price': 469,
		'category': [
			'new'
		]
	},
	{
		'id': '5',
		'title': 'Карбонара',
		'desc': 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/7a8164f7c43646e19c20001eaec9b031_292x292.jpeg',
		'price': 469,
		'category': [
			'hit'
		]
	},
	{
		'id': '8',
		'title': 'Четыре сыра 🌱',
		'desc': 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/1e3e653d3e9b4b77ae0bdacf8827f6f6_292x292.jpeg',
		'price': 469,
		'category': [
			'vegan'
		]
	},
	{
		'id': '11',
		'title': 'Песто',
		'desc': 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/103d94956de3424586764b1adeca5e68_584x584.jpeg',
		'price': 469,
		'category': [
			'hit'
		]
	},
	{
		'id': '2',
		'title': 'Белая пепперони',
		'desc': 'Пикантная пепперони, соус альфредо, моцарелла',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/02270e55a3204ccaaf26d75f0c817d28_292x292.jpeg',
		'price': 419,
		'category': []
	},
	{
		'id': '9',
		'title': 'Четыре сезона',
		'desc': 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_584x584.jpeg',
		'price': 419,
		'category': []
	},
	{
		'id': '10',
		'title': 'Пепперони',
		'desc': 'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/bf3377af7cfe4962915668d14bb8d0f4_584x584.jpeg',
		'price': 419,
		'category': []
	},
	{
		'id': '13',
		'title': 'Домашняя',
		'desc': 'Пикантная пепперони, ветчина, маринованные огурчики, томаты, моцарелла, томатный соус',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/b473722281944c78ae1d6532576f92fa_584x584.jpeg',
		'price': 419,
		'category': []
	},
	{
		'id': '14',
		'title': 'Аррива!',
		'desc': 'Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/8b6c71a280df4de59e24263df59c4cfa_584x584.jpeg',
		'price': 419,
		'category': [
			'hit',
			'hot'
		]
	},
	{
		'id': '3',
		'title': 'Ветчина и сыр',
		'desc': 'Ветчина, моцарелла, соус альфредо',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg',
		'price': 309,
		'category': []
	},
	{
		'id': '4',
		'title': 'Сырная 🌱👶',
		'desc': 'Моцарелла, сыры чеддер и пармезан, соус альфредо',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/10abc7eb6428475c9263709a1266558c_584x584.jpeg',
		'price': 289,
		'category': [
			'vegan'
		]
	},
	{
		'id': '7',
		'title': 'Пепперони фреш',
		'desc': 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_584x584.jpeg',
		'price': 289,
		'category': []
	},
	{
		'id': '12',
		'title': 'Чоризо фреш',
		'desc': 'Томатный соус, моцарелла, острая чоризо, сладкий перец',
		'imageUrl': 'https://dodopizza-a.akamaihd.net/static/Img/Products/f440c85c436a4284afad6ecfc43c1fab_584x584.jpeg',
		'price': 289,
		'category': [
			'hot'
		]
	}
];

export default mockCards;
