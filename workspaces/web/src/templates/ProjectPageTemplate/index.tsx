import React from "react";
import { graphql, PageProps } from "gatsby";
import "./projects.scss";
import { ProjectPageQuery } from "../ProjectPageTemplate/query";

export const query = graphql`
  query {
    allSanityProjectPage(sort: { date: DESC }) {
      nodes {
        title
        slug {
          current
        }
        description
        location
        category
        mainImage {
          asset {
            url
          }
        }
      }
    }
  }
`;


interface Project {
  title: string;
  slug: {
    current: string;
  };
  description: string;
  location?: string;
  category?: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
}

interface ProjectsPageProps {
  allSanityProjectPage: {
    nodes: Project[];
  };
}

export default function ProjectsPage({ data }: PageProps<ProjectsPageProps>) {
  const projects = data.allSanityProjectPage.nodes;

  return (
    <main className="container project-page">
      <h1 className="text simple-h1">Projetos Realizados</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.mainImage?.asset.url}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="text simple-h2">{project.title}</h2>
              <p className="text simple-paragraph">{project.description}</p>
              {project.location && (
                <p className="text location"><strong>Local:</strong> {project.location}</p>
              )}
              {project.category && (
                <p className="text category"><strong>Categoria:</strong> {project.category}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
