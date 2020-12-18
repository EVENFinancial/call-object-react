import React from 'react';
import './StartButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function StartButton(props) {
  return (
    <button
      className="inline-flex items-center mx-auto my-8 px-6 py-3 border border-transparent disabled:opacity-50 text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 disabled:bg-grey hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Join the Even Library
    </button>
  );
}
