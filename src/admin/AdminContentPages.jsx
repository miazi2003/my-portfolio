import React from "react";
import ContentManager from "./ContentManager";
import {
  blogFields,
  educationFields,
  experienceFields,
  projectFields,
  skillFields,
  settingsFields,
} from "./adminFields";

export const SkillsAdmin = () => (
  <ContentManager title="Skills" endpoint="skills" fields={skillFields} enableReorder />
);

export const EducationAdmin = () => (
  <ContentManager title="Education" endpoint="education" fields={educationFields} />
);

export const ExperienceAdmin = () => (
  <ContentManager title="Experience" endpoint="experience" fields={experienceFields} />
);

export const ProjectsAdmin = () => (
  <ContentManager title="Projects" endpoint="projects" fields={projectFields} />
);

export const BlogsAdmin = () => (
  <ContentManager title="Blogs" endpoint="blogs" fields={blogFields} />
);

export const SettingsAdmin = () => (
  <ContentManager title="Settings" endpoint="settings" fields={settingsFields} />
);
