import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg"
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-700 bg-opacity-50">
                <div>
                    <div><img src={featureImg} alt="" /></div>
                </div>
                <div className="md:ml-10">   
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p className="pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos distinctio sed, suscipit maxime facere, omnis saepe ducimus consequuntur reiciendis nihil obcaecati quidem optio veniam repellat! Veniam quasi repellendus id!</p>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
