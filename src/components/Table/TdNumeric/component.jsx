import './style.scss';

const TdNumeric = ({ children }) => {
  return (
    <td>
      <div className="td_numeric fs16">
        {'₹' + Number(children).toLocaleString('en-IN')}
      </div>
    </td>
  );
};

export default TdNumeric;