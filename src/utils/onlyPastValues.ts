interface EditProjectProps {
  title?: string;
  type?: string;
  slug?: string;
  description?: string;
  link_website?: string;
  link_github?: string;
}

export const getOnlyPastValues = (data: EditProjectProps) => {
  for (const value in data) {
    !data[value] && delete data[value]
  }

  return data
}
