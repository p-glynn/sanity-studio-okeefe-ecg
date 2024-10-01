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
            S.listItem()
                .title('Angiograms')
                .child(
                    S.documentList()
                        .apiVersion('2024-06-01')
                        .title('Angiograms')
                        .schemaType('angiogram')
                        .filter('_type == "angiogram"')
                ),
            S.listItem()
                .title('Echos')
                .child(
                    S.documentList()
                        .apiVersion('2024-06-01')
                        .title('Echos')
                        .schemaType('echo')
                        .filter('_type == "echo"')
                ),
            S.listItem()
                .title('QBank')
                .child(
                    S.documentList()
                        .apiVersion('2024-06-01')
                        .title('QBank')
                        .schemaType('qbank')
                        .filter('_type == "qbank"')
                ),
        ]);
