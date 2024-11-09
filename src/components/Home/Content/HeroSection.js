import React from 'react'
import background from '../../../assets/homepage_d.jpg'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <img src={background} className="hero-image img-fluid" alt="Hero" />
            <div className="hero-content">
                <h1 className="display-5 fw-bold">Carental - Cùng Bạn Đến Mọi Hành Trình</h1>
                <p className="lead">Trải nghiệm sự khác biệt từ hơn <strong>10.000</strong> xe gia đình đời mới khắp Việt Nam</p>
            </div>
        </section>
    )
}

export default HeroSection