import React from 'react';
import { Link } from 'react-router';

export default ({widgets, deleteWidget}) => {
  return (
    <div className="data-list">

      {widgets.map(widget => {

        return (
          <div key={widget.id} className="data-list-item">
            <div className="details">{widget.name}</div>
            <div className="controls">
            {/* note onClick's function. Cannot use "deleteWidget(widget.id)" directly.
            instead, use "()=>deleteWidget(widget.id)" o the following: */}
              <button onClick={deleteWidget.bind(null, widget.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
