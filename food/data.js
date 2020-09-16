const data =[
    {
        id: 1,
        name: 'ไก่ไม่ยอมนอน - ซอยรามบุตรี',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A2%E0%B8%AD%E0%B8%A1%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B8%8B%E0%B8%AD%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%9A%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%B5-delivery/3-CZLDNAATVA2UNJ',
        type: 'Coupon, Partner, Rice Bowls'
    },
    {
        id: 2,
        name: 'อ้อย ข้าวคลุกกะปิ - อรุณ​อัม​รินทร์',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%A2-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B0%E0%B8%9B%E0%B8%B4-%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E2%80%8B%E0%B8%AD%E0%B8%B1%E0%B8%A1%E2%80%8B%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-delivery/3-CZKTN2TYCTCEFA',
        type: 'Partner, Cooked to Order'
    },
    {
        id: 3,
        name: 'ก๋วยเตี๋ยวคั่วไก่ (เจ๊เค็ง เจ๊งิ้ม) - สวนมะลิ วรจักร',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%81%E0%B9%88-%E0%B9%80%E0%B8%88%E0%B9%8A%E0%B9%80%E0%B8%84%E0%B9%87%E0%B8%87-%E0%B9%80%E0%B8%88%E0%B9%8A%E0%B8%87%E0%B8%B4%E0%B9%89%E0%B8%A1-%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%A1%E0%B8%B0%E0%B8%A5%E0%B8%B4-%E0%B8%A7%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3-delivery/THGFIST00000025',
        type: 'Partner, Street Food, Noodles'
    },
    {
        id: 4,
        name: 'ข้าวหมูแดง วังบูรพา - พีรพงษ์',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%81%E0%B8%94%E0%B8%87-%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%9E%E0%B8%B2-%E0%B8%9E%E0%B8%B5%E0%B8%A3%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C-delivery/3-CZBGE2W1CEM2UE',
        type: 'Coupon, Partner, Rice Bowls'
    },
    {
        id: 5,
        name: 'ข้าวมันไก่เเม้นศรี - วัดสระเกศ',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%80%E0%B9%80%E0%B8%A1%E0%B9%89%E0%B8%99%E0%B8%A8%E0%B8%A3%E0%B8%B5-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A8-delivery/3-CYLKBFUDRN3GJ2',
        type: 'Coupon, Partner, Hainanese Chicken Rice'
    },
    {
        id: 6,
        name: 'เม้งราชาข้าวผัด - วิสุทธิกษัตริย์',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B9%80%E0%B8%A1%E0%B9%89%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%94-%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%A9%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B9%8C-delivery/3-CZDEVUL2RPCBFA',
        type: 'Coupon, Partner, Cooked to Order'
    },
    {
        id: 7,
        name: 'นายอ้วนเย็นตาโฟเสาชิงช้า - ถนนตะนาว',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B9%89%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B9%82%E0%B8%9F%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%87%E0%B8%8A%E0%B9%89%E0%B8%B2-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%95%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7-delivery/THGFIST0000022y',
        type: 'Coupon, Partner, Noodles'
    },
    {
        id: 8,
        name: 'ถิงถิง บิงซูน้ำขิง - ยศเส',
        imageURL: 'https://food.grab.com/th/en/restaurant/%E0%B8%96%E0%B8%B4%E0%B8%87%E0%B8%96%E0%B8%B4%E0%B8%87-%E0%B8%9A%E0%B8%B4%E0%B8%87%E0%B8%8B%E0%B8%B9%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%82%E0%B8%B4%E0%B8%87-%E0%B8%A2%E0%B8%A8%E0%B9%80%E0%B8%AA-delivery/3-CY2BALJXE22ENJ',
        type: 'Partner, Shaved Ice'
    },
    {
        id: 9,
        name: 'Kamu Tea (คามุ ที) - วังหลัง',
        imageURL: 'https://food.grab.com/th/en/restaurant/kamu-tea-%E0%B8%84%E0%B8%B2%E0%B8%A1%E0%B8%B8-%E0%B8%97%E0%B8%B5-%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-delivery/3-CZC1VN5CBEXGAT',
        type: 'Partner, Bubble Tea'
    },
];

module.exports = data;