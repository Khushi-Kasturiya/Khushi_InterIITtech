import React, { useEffect, useState } from 'react';
import LocationTree from '../components/LocationTree';
import ItemDetails from '../components/ItemDetails';
import './Dashboard.css';

const Dashboard = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setSelectedItemId(selectedItemId);
        setSelectedItem(selectedItem);  
    }, [selectedItemId]);

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <LocationTree onSelectItemID={setSelectedItemId} onSelectItem = {setSelectedItem} />
            </aside>
            <main className="content">
                <ItemDetails selectedItemId={selectedItemId} selectedItem={selectedItem} />
            </main>
        </div>
    );
};

export default Dashboard;
