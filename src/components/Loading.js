import React from 'react';

// loading gif
import loading from "../gif/loading.gif"

// Styles
import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={loading} alt="loading" />
            <div>Loading ...</div>
        </div>
    );
};

export default Loading;