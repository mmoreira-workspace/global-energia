import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) => (
    S.list()
        .title('Global Energia')
        .items([
            S.listItem().title('Home').child(S.document().schemaType('homePage').documentId('homePage')),
            S.documentTypeListItem('projectPage')
        ])
)