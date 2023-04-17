export default {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of skill",
            type: "string"
        }, 
        {
            name: "progress",
            title: "Progress",
            type: "number",
            description: "Progress of a skill from 1 to 100",
            validation: (Rule) => Rule.min(0).max(100),
        },
        {
            name: "image",
            title: "Title",
            type: "image",
            options: {
                hotspot: true
            },
        },
    ],
};