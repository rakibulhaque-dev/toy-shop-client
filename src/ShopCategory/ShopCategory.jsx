import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToy from '../ShopSection/SingleToy';

const ShopCategory = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='container p-8 mx-auto mt-5 mb-5 border rounded-md shadow-lg'>
            <Tabs>
                <TabList>
                    <Tab><span className='font-bold text-secondary'>Action</span></Tab>
                    <Tab><span className='font-bold text-secondary'>Romance</span></Tab>
                    <Tab><span className='font-bold text-secondary'>Ultra</span></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid-cols-3 gap-4 md:grid'>
                        {
                            toys.slice(0, 3).map(toy => <SingleToy
                                key={toy._id}
                                singleToy={toy}
                            ></SingleToy>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid-cols-3 gap-4 md:grid'>
                        {
                            toys.slice(4, 7).map(toy => <SingleToy
                                key={toy._id}
                                singleToy={toy}
                            ></SingleToy>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid-cols-3 gap-4 md:grid'>
                        {
                            toys.slice(8, 11).map(toy => <SingleToy
                                key={toy._id}
                                singleToy={toy}
                            ></SingleToy>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;