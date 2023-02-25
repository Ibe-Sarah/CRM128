import React from "react";

function ListComponent({ projects }) {
  return (
    <div>
      <h2>List View</h2>
      <table>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Project Lead</th>
            <th>Start Date</th>
            <th>Due Date</th>
            <th>States</th>
            <th>% Completion</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.lead}</td>
              <td>{project.startDate}</td>
              <td>{project.dueDate}</td>
              <td>{project.state}</td>
              <td>{project.completion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListComponent;
