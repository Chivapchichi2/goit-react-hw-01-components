import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './Stat-list';
import styles from './Statistics.module.css';

const Statistics = ({title, stats }) => (
  <section className={styles.Statistics}>
    {title && (<h2 className={styles.title}>{title}</h2>)}
      <StatsList stats={stats} />
    </section>
  );

Statistics.defaultProps = {
  title:'',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    })
  ).isRequired,
  title: PropTypes.string
}

export default Statistics;