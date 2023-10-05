import "./AboutUs.css"
const AboutUs = () => {
    return (
    <>
    <header>
            <div class="container">
            <h1>About Our Real Estate Team</h1>
            <p>Your Trusted Partner in Finding Your Dream Home</p>
        </div>
    </header>
    <section class="team-section">
        <div class="container">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <img src="agent1.jpg" alt="Agent 1" />
                <h3>John Doe</h3>
                <p>Real Estate Agent</p>
                <p>With over 10 years of experience, John is dedicated to helping you find the perfect property.</p>
            </div>
            <div class="team-member">
                <img src="agent2.jpg" alt="Agent 2" />
                <h3>Jane Smith</h3>
                <p>Property Consultant</p>
                <p>Jane specializes in luxury homes and can guide you through the buying process with ease.</p>
            </div>
        </div>
    </section>

    <section class="values-section">
        <div class="container">
            <h2>Our Values</h2>
            <ul>
                <li>Honesty</li>
                <li>Integrity</li>
                <li>Client-Centric Approach</li>
                <li>Transparency</li>
            </ul>
        </div>
    </section>
    </>
    );
}

export default AboutUs;
