import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResources } from '../../store/actions/resourceActions';

const ResourceLibrary = () => {
    const dispatch = useDispatch();
    const resources = useSelector(state => state.resources.resources);

    useEffect(() => {
        dispatch(fetchResources());
    }, [dispatch]);

    return (
        <div>
            <h1>Resource Library</h1>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>
                        <h2>{resource.title}</h2>
                        <p>{resource.description}</p>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            View Resource
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceLibrary;