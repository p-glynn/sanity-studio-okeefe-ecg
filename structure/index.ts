import type {StructureResolver} from 'sanity/structure';

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Questions')
        .items([
            S.listItem().title('ECGs').child(S.documentTypeList('ecg').apiVersion('2024-10-01').title('ECGs')),
            S.listItem()
                .title('Angiograms')
                .child(S.documentTypeList('angiogram').apiVersion('2024-10-01').title('Angiograms')),
            S.listItem().title('Echos').child(S.documentTypeList('echo').apiVersion('2024-10-01').title('Echos')),
            S.listItem().title('QBank').child(S.documentTypeList('qbank').apiVersion('2024-10-01').title('QBank')),
        ]);
