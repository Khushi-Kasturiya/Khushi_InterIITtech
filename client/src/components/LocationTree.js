import React, { useEffect, useState, useCallback } from 'react';
import { fetchLocations, fetchItemsByGodown } from '../services/api';
import './LocationTree.css';

const ItemsList = ({ items, onSelectItem, onSelectItemID }) => (
    <ul className="items-list">
        {items.map(item => (
            <li key={item._id} className="item">
                <div className="item-details">
                    {/* <img src={item.image_url} alt={item.name} className="item-image" onClick={() => onSelectItem(item._id)} /> */}
                    <div>
                        <u><strong onClick={() => {onSelectItem(items); onSelectItemID(item._id)}}>{item.name}</strong><br /></u>
                    </div>
                </div>
            </li>
        ))}
    </ul>
);

const TreeNode = ({ node, onToggleNode, onViewItems, expandedNodes, items, onSelectItem, onSelectItemID }) => (
    <>
        <div className="node-header">
            <span onClick={() => onToggleNode(node._id)} className="node-name">
                {node.name}
            </span>
            <button onClick={() => onViewItems(node._id)} className="view-button">
                View Items
            </button>
        </div>
        {expandedNodes[node._id] && (
            <LocationBranch 
                parentId={node._id} 
                onToggleNode={onToggleNode} 
                onViewItems={onViewItems} 
                expandedNodes={expandedNodes} 
                items={items} 
                onSelectItem={onSelectItem}
                onSelectItemID={onSelectItemID}
            />
        )}
        {items[node._id] && <ItemsList items={items[node._id]} onSelectItem={onSelectItem} onSelectItemID={onSelectItemID} />}
    </>
);

const LocationBranch = ({ parentId, onToggleNode, onViewItems, expandedNodes, items, onSelectItem, onSelectItemID }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchAndSetLocations = async () => {
            const data = await fetchLocations();
            setLocations(data.filter(location => location.parent_godown === parentId));
        };
        
        fetchAndSetLocations();
    }, [parentId]);

    return (
        <ul className="tree-branch">
            {locations.map(child => (
                <li key={child._id} className="tree-node">
                    <TreeNode 
                        node={child} 
                        onToggleNode={onToggleNode} 
                        onViewItems={onViewItems} 
                        expandedNodes={expandedNodes} 
                        items={items} 
                        onSelectItem={onSelectItem} 
                        onSelectItemID={onSelectItemID}
                    />
                </li>
            ))}
        </ul>
    );
};

const LocationTree = ({ onSelectItem, onSelectItemID }) => {
    const [rootLocations, setRootLocations] = useState([]);
    const [expandedNodes, setExpandedNodes] = useState({});
    const [items, setItems] = useState({});

    useEffect(() => {
        const getRootLocations = async () => {
            const data = await fetchLocations();
            setRootLocations(data.filter(loc => loc.parent_godown === null));
        };

        getRootLocations();
    }, []);

    const toggleNode = useCallback((id) => {
        setExpandedNodes(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    }, []);

    const handleViewItems = useCallback(async (godownId) => {
        if (!items[godownId]) {
            const itemsData = await fetchItemsByGodown(godownId);
            setItems(prevState => ({
                ...prevState,
                [godownId]: itemsData,
            }));
        }
    }, [items]);

    return (
        <div className="location-tree">
            <h3>Locations</h3>
            {rootLocations.map(rootLocation => (
                <ul key={rootLocation._id}>
                    <TreeNode 
                        node={rootLocation} 
                        onToggleNode={toggleNode} 
                        onViewItems={handleViewItems} 
                        expandedNodes={expandedNodes} 
                        items={items} 
                        onSelectItem={onSelectItem}
                        onSelectItemID={onSelectItemID}
                    />
                </ul>
            ))}
        </div>
    );
};

export default LocationTree;
