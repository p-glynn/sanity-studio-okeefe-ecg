import type {StructureResolver} from 'sanity/structure';

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Questions')
        .items([
            S.listItem()
                .title('ECGs')
                .child(
                    S.documentList().apiVersion('2024-06-01').title('ECGs').schemaType('ecg').filter('_type == "ecg"')
                ),
        ]);
