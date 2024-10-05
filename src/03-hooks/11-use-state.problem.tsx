import { useState } from 'react';

export const Tags = () => {
  type Tag = {
    id: number;
    value: string;
  };

  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: 'New',
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
