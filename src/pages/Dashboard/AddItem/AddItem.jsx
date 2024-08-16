import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token=import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    
    const onSubmit = data => { 
        // console.log("data: ", data);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log("img response: ", imgResponse);
        })
    };

    console.log(errors);
    console.log("img host: ", img_hosting_token);

    return (
        <div className="w-full px-14 my-10">
            <SectionTitle subHeading="What's New" heading="Add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </div>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </label>

                <div className="flex my-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue="Pick One" {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </label>

                    <label className="form-control w-full ml-4">
                        <div className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </div>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                </div>

                <label className="form-control my-4">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24"
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"></textarea>
                </label>

                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text">Item Image*</span>
                    </div>
                    <input type="file" {...register("image", { required: true })}
                        className="file-input file-input-bordered file-input-warning w-full" />
                </label>
                <input type="submit" className="btn btn-sm btn-warning mt-4" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;
