import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./GuestHomePage.scss";

const GuestHomePage = () => {
  return (
    <Container fluid className="guest-homepage">
      <HeaderSection />

      <WhyUsSection />
      <TestimonialsSection />
      <LocationSection />
    </Container>
  );
};

// Header Section Component
const HeaderSection = () => (
  <Row className="header-section">
    <Col md={6} className="left-section">
      <h2>Looking for a vehicle? You're at the right place.</h2>
      <p>Choose between 100% of private cars for rent at really low prices!</p>
      <Button variant="light">Find a Rental Car Near You</Button>
    </Col>
    <Col md={6} className="right-section">
      <h2>Are you a car owner?</h2>
      <p>List your car and make money from your asset today!</p>
      <Button variant="dark">List Your Car Today</Button>
    </Col>
  </Row>
);

// Why Us Section Component
const WhyUsSection = () => {
  const whyUsDetails = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/5818/5818559.png",
      title: "Save money",
      text: "We have no setup or registration fees. You are only charged when you rent a car. So get started for FREE!",
    },
    {
      image: "https://www.freeiconspng.com/uploads/tool-icon-20.png",
      title: "Convenient",
      text: "We have a large selection of privately owned cars to suit your needs throughout the country.",
    },
    {
      image:
        "https://icons.veryicon.com/png/o/miscellaneous/fulu-butler-icon-library/to-grant-authorization-2.png",
      title: "Legal and insurance",
      text: "We fully cover all rentals and even provide roadside assistance. Our system checks provide safety.",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/009/898/154/non_2x/24-hours-7-days-black-icon-isolated-on-white-background-free-vector.jpg",
      title: "24/7 support",
      text: "Our team is ready to support you all along the way with our 24/7 hotline and services.",
    },
  ];

  const renderWhyUsCards = () =>
    whyUsDetails.map((detail, index) => (
      <Col md={3} key={index}>
        <Card className="p-3">
          <img
            class="card-img-top"
            src={detail.image}
            alt="Card image cap"
          ></img>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.text}</Card.Text>
        </Card>
      </Col>
    ));

  return (
    <Row className="why-us-section text-center p-4">
      <h3 style={{ fontSize: "bold" }}>Why us?</h3>
      {renderWhyUsCards()}
    </Row>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  // Dữ liệu testimonials
  const testimonials = [
    {
      avatar:
        "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/240468522_828469948032611_8410269615795091902_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=94e2a3&_nc_eui2=AeEpHrBiGnh2Z22GjSzC3Czlg8z6mVUW_taDzPqZVRb-1leEYEXhcAmRCBUXwU5R0dnAuKW4lRQy9epTnaRkOVP3&_nc_ohc=4oYG2gXZKYoQ7kNvgEgZdKi&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=Amx3YFfOX6kY4TgAB569LaK&oh=00_AYAJhYr2_CMW-qrxDfRCyPShDybDf8KzMAmJufTUDZRTHg&oe=673E2E1C",
      name: "Giang Hoang TwoBars",
      topic: "Amazing service and super convenient!",
      text: "I was amazed by how easy it was to rent a car. The process was straightforward, and the car quality exceeded my expectations. Highly recommend this service to anyone looking for convenience and reliability.",
      time: new Date().toDateString(),
    },
    {
      avatar:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/462553322_1074683467495738_3448202683790813251_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEhfMWDhugIL06UFPnacPznYAq1bWzYp_5gCrVtbNin_mdZYaTBaHaBtnwipkICKFkBO9BT-ALoRpo9ThZ3Ns-z&_nc_ohc=rYG6AmGJFisQ7kNvgEM5-Xu&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QE-Ytdbaqd7HiDdAN0c4BMophqNRtnP8taNSYQG7UVcCA&oe=675FC780",
      name: "Antoni Duc Nhat",
      topic: "Excellent support team!",
      text: "The 24/7 support team was a lifesaver during my trip. They were friendly, professional, and solved my issue within minutes. It's great to know someone always has your back!",
      time: new Date().toDateString(),
    },
    {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg",
      name: "Cat",
      topic: "Mew mew mew mew mew mew mew mew mew",
      text: "Mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mewm ew mew mew mew mew mew mew mew mew mew mew mew mew mew mew mew",
      time: new Date().toDateString(),
    },
    {
      avatar:
        "https://scontent.fhan19-1.fna.fbcdn.net/v/t1.15752-9/462642894_1566487597337530_5515626527356497209_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGHYpZ25_7Bjdw5RB7cEMiAUDqqGUls0hdQOqoZSWzSF56cEShy8yX1QpID1K5SoWyGw2sBntoJocbN8Q8nfbns&_nc_ohc=9YnskT8TecEQ7kNvgHiBVR9&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&oh=03_Q7cD1QEXa_MfGEWZkKo3RN0JbzqymUCenCAsJGT3gvu2jkPopA&oe=675FB255",
      name: "Louis Dang",
      topic: "Great value for the price!",
      text: "I saved so much money compared to other services. No hidden fees, and I only paid for what I used. Plus, the insurance coverage gave me peace of mind throughout the rental.",
      time: new Date().toDateString(),
    },
    {
      avatar:
        "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/453484089_1385140456222650_1793083831237077224_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGbq6WczbFE3u3hY9ug8B3ey5Xgb6f3yZvLleBvp_fJm_eA1MjVYMtrTAoM5ym7HYE2qCj_HWC1WjdxtYj72ib6&_nc_ohc=mTHe0aqxPsQQ7kNvgFZOftt&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=Az5ObYsn3nSJs77f0kF3Ej8&oh=00_AYA7LEjeu_hc6IGauWiLUvVGBlh4dsOI77rtB4DrM_OOnQ&oe=673E1830",
      name: "Do Tien Thuat",
      topic: "A wide range of cars to choose from!",
      text: "I found the perfect car for my needs, and the selection was amazing. Whether you need a compact car for city driving or an SUV for a road trip, they have it all!",
      time: new Date().toDateString(),
    },
    {
      avatar:
        "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/428674824_1125339381996685_6243269251680985142_n.jpg?stp=c0.29.1152.1152a_dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeEsqhEBLT4oeWAkds8P70jUNJTfmWL8c-Q0lN-ZYvxz5No5ICVSxMDu_FPwcbhbs3iniCfmu7-NlLhcF_Fd8yO3&_nc_ohc=rV43Ebc8ZccQ7kNvgEjNare&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=An_Qq6ZCJG6h3Z9660BXUO5&oh=00_AYCaD6ELsedm3DQjAcZ5zlZTTpjOItUj3uiHGkeZXD2uDA&oe=673E3A43",
      name: "Mr Bốp",
      topic: "Super smooth experience!",
      text: "Everything from booking to returning the car was effortless. The platform is user-friendly, and I had no trouble finding what I was looking for. Will definitely recommend to my friends!",
      time: new Date().toDateString(),
    },
  ];

  // Hàm hiển thị các testimonial cards
  const renderTestimonials = () =>
    testimonials.map((testimonial, index) => (
      <Col md={6} key={index} className="p-3">
        <Card className="p-3">
          <Card.Body>
            <Card.Img
              variant="top"
              src={testimonial.avatar}
              alt="avatar"
              className="rounded-circle mb-3"
            />
            <Card.Title>{testimonial.name}</Card.Title>
            <Card.Text>{testimonial.text}</Card.Text>
            <Card.Subtitle>Time: {testimonial.time}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Row className="testimonials-section text-center p-4 bg-light">
      <h3>What people say?</h3>
      {renderTestimonials()}
    </Row>
  );
};

// Location Section Component
const LocationSection = () => {
  // Dữ liệu về địa điểm
  const locations = [
    {
      name: "Hanoi",
      cars: "30+ cars",
      image:
        "https://cdn.vietnam.vn/wp-content/uploads/2024/09/Xe-buyt-Ha-Noi-su-dung-toi-47-ve-thang.jpg", // Chèn ảnh phù hợp
    },
    {
      name: "Ho Chi Minh city",
      cars: "50+ cars",
      image:
        "https://cdn.tgdd.vn/Files/2022/02/15/1415624/ban-do-va-lo-trinh-chi-tiet-cac-tuyen-xe-buyt-tp-ho-chi-minh-2022-202202150743420266.jpg",
    },
    {
      name: "Da Nang - Hoi An",
      cars: "40+ cars",
      image:
        "https://filesdata.cadn.com.vn//filedatacadn/media/800/2023/6/15/5486.jpg",
    },
    {
      name: "Nha Trang",
      cars: "20+ cars",
      image:
        "https://filesdata.cadn.com.vn//filedatacadn/media/800/2023/6/15/5486.jpg",
    },
    {
      name: "Hai Phong",
      cars: "25+ cars",
      image:
        "https://mia.vn/media/uploads/blog-du-lich/di-chuyen-bang-xe-bus-o-hai-phong-vua-an-toan-va-tiet-kiem-1647105096.jpg",
    },
    {
      name: "Quang Ninh",
      cars: "35+ cars",
      image:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/A%20BAT/Nam%202023/T3/T1/2062266_megabus_busquang_ninh_09191009.jpg",
    },
  ];

  // Hàm hiển thị danh sách địa điểm
  const renderLocations = () =>
    locations.map((location, index) => (
      <Col md={4} key={index} className="p-3">
        <Card className="p-3">
          <Card.Img variant="top" src={location.image} alt={location.name} />
          <Card.Body>
            <Card.Title>{location.name}</Card.Title>
            <Card.Text>{location.cars}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <Row className="location-section text-center p-4">
      <h3>Where to find us?</h3>
      {renderLocations()}
    </Row>
  );
};

export default GuestHomePage;
