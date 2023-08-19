import "./style.css";

const Footer = () => {
    return (
        <div className="footer-bar-wrapper">
            <div className="footer-bar">
                <img className="footer-logo" src="icons\svg-footer\svg" alt="logo"/>
                <div className={"footer-links"}>
                    <span className={"footer-links-header"}>ԱՐՏԱԴՐԱՆՔ</span>
                    <ul>
                        <li className={"footer-bar-link"}>ՀԵՂՈՒԿՆԵՐ</li>
                        <li className={"footer-bar-link"}>ՔՍՈՒՔՆԵՐ</li>
                        <li className={"footer-bar-link"}>ՅՈՒՂԵՐ</li>
                        <li className={"footer-bar-link"}>ՈԳԵԹՈՒՐՄԵՐ</li>
                        <li className={"footer-bar-link"}>ՓՈՇԻՆԵՐ</li>
                        <li className={"footer-bar-link"}>ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>
                    </ul>
                </div>
                <div className={"footer-links"}>
                    <span className={"footer-links-header"}>ԿԱՊ ՄԵԶ ՀԵՏ</span>
                    <div className={"footer-bar-contacts"}>
                        <div className={"footer-bar-contact"}>
                            <img src="icons/iconsLoc/phone/svg" alt="icon-phone"/>
                            <span>Զանգահարեք: +374 90 000 000</span>
                        </div>
                        <div className={"footer-bar-contact"}>
                            <img src="icons/iconsLoc/email/svg" alt="icon-email"/>
                            <span>Էլ հասցե:@mail.ru</span>
                        </div>
                        <div className={"footer-bar-contact"}>
                            <img src="icons/iconsLoc/loc/svg" alt="icon-loc"/>
                            <span>Երևան</span>
                        </div>
                    </div>
                </div>
                <div className={"footer-links"}>
                    <span className={"footer-links-header"}>ՓՆՏՐԵՔ ՄԵԶ:</span>
                    <div className={"footer-bar-social"}>
                        <img src="icons/iconsSC/instagram/svg" alt="icon-instagram"/>
                        <img src="icons/iconsSC/twitter/svg" alt="icon-twitter"/>
                        <img src="icons/iconsSC/facebook/svg" alt="icon-facebook"/>
                    </div>
                </div>
            </div>
            <span className={"footer-bar-text"}>By ArmCoding 2022 Բոլորի իրավունքները պաշտպանված են </span>
        </div>
    );
};

export default Footer;
