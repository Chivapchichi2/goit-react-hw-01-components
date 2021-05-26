import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './Stat-list';

const Statistics = ({title, stats }) => (
    <section className="statistics">
      {title && (<h2 className="title">{title}</h2>)}
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