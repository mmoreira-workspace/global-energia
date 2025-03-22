import { defineType } from "sanity";

export default defineType({
    name: 'projectPage',
    title: 'Project Page',
    type: 'document',
    fields: [
        {
            name: 'homeTitle',
            title: 'Title',
            type: 'string',
        }
    ]
})