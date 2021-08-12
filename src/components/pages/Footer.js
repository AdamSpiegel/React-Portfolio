import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer id="ContactInfo">

                <div id="Phone">
                    <b><u>Contact Information</u></b>
                    <p><b>Adam Spiegel</b></p>
                    <p>Phone - (860) 212-7893</p>
                </div>

                <div class="FooterLinks">
                    <div id="Email">
                        <i class="far fa-envelope fa-3x"></i>
                        <p><a href="mailto:AdamSpiegel23@gmail.com">Email</a></p>
                    </div>

                    <div id="Github">
                        <i class="fab fa-github fa-3x"></i>
                        <p><a href="https://github.com/AdamSpiegel" target="_blank">Github</a></p>
                    </div>

                    <div id="Linkedin">
                        <i class="fab fa-linkedin fa-3x"></i>
                        <p><a href="https://www.linkedin.com/in/adam-spiegel-3086687" target="_blank">Linkedin</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}