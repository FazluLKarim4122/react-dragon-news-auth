
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div >
            <div className='p-4'>
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-wide">
                    <FaGoogle />  Login with Google
                </button>
                <button className="btn btn-wide">
                    <FaGithub /> Login with GitHub
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl">Find Us On</h2>
                <a className="border rounded-t-lg flex items-center" href="">
                    <FaFacebook ></FaFacebook> Facebook
                </a>
                <a className="border rounded-t-lg flex items-center" href="">
                    <FaTwitter></FaTwitter> Twitters
                </a>
                <a className="border rounded-t-lg flex items-center" href="">
                    <FaInstagram></FaInstagram> Instagram
                </a>
               {/* Q Zone */}

               <div className='p-4'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            </div>
        </div>
    );
};

export default RightSideNav;