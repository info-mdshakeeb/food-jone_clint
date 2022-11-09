import React from 'react';

const Myrewiew = ({ myrewiew }) => {
    const { name, text } = myrewiew
    return (
        <div>
            <div className="w-full mx-auto">
                <table className="table table-zebra ">
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td className=' w-48'>{text}</td>
                            <button className=' btn btn-outline'>delete</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myrewiew;