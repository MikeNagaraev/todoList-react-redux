import React from 'react';
import './css/footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="copyright">Copyright© 2017 «EPAM», All rights are reserved</p>
                <div className="footer-socials">
                    <a href="#">
                        Facebook
                    </a>
                    <a href="#">
                        Vkontakte
                    </a>
                </div>
                <div className="footer-contact">
                    <p className="designed">Mikhail Nagaraev</p>
                    <p>
                        <a href="#" className="email">clowfinger13@gmail.com</a>
                    </p>
                </div>
            </div>
        )
    }
}
