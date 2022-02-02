import React from 'react'
import Footer from '../Homepg/Footer'
import Icon from '../Homepg/Icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Modules</Footer.Link>
                    <Footer.Link href="#">Work</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Gaming</Footer.Link>
                    <Footer.Link href="#">Content</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#" ><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}