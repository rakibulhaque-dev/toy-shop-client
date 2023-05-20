import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToys = () => {
    const data = useLoaderData()
    console.log(data)
    const { user } = useContext(AuthContext);

    const handleToyAdd = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const sellerName = form.sellerName.value;
        const subCategory = form.subCategory.value;
        const quantity = form.quantity.value;
        const sellerEmail = user?.email;
        const newToy = {
            photo,
            rating,
            toyName,
            sellerName,
            price,
            description,
            sellerEmail,
            quantity,
            subCategory
        }

        console.log(newToy);

        fetch('https://eleven-toy-server.vercel.app/createToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('Added Successfully')
                    form.reset()
                }
            })
            
        }
        
        return (
            <div className='container mx-auto'>
            <ToastContainer></ToastContainer>
            <h2 className='text-3xl font-bold text-center text-secondary mb-7'> Add a Toy </h2>
            <form onSubmit={handleToyAdd}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder='Toy Name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder='Seller Name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder='Toy Photo URL' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder='Quantity' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder='Price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder='Rating here...' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name="subCategory" placeholder='Sub Category' className="input input-bordered" />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Seller email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder='Describe about toy' className="w-full input input-bordered" />
                    </div>
                </div>
                <div className="mt-6 form-control">
                    <input className="btn btn-secondary btn-block" type="submit" value="Post" />
                </div>
            </form>
            <div className="card-body">

            </div>

        </div>
    );
};

export default AddToys;