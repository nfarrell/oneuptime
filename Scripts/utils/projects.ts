import ProjectType from '../types/project';

class Project {
    static getProjects(): Array<ProjectType> {
        return [
            {
                name: 'licensing',
                path: 'licensing',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'dashboard',
                path: 'dashboard',
                isReact: true,
                isApiServer: false,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'AdminDashboard',
                path: 'AdminDashboard',
                isReact: true,
                isApiServer: false,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'accounts',
                path: 'accounts',
                isReact: true,
                isApiServer: false,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'StatusPage',
                path: 'StatusPage',
                isReact: true,
                isApiServer: false,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'HttpTestServer',
                path: 'HttpTestServer',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'ApiDocs',
                path: 'ApiDocs',
                isReact: false,
                isApiServer: false,
                isTypeScript: true,
                isDependency: false,
            },
            {
                name: 'backend',
                path: 'backend',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'ApplicationScanner',
                path: 'aplication-scanner',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'common',
                path: 'common',
                isReact: false,
                isApiServer: true,
                isTypeScript: true,
                isDependency: true,
            },
            {
                name: 'CommonUI',
                path: 'CommonUI',
                isReact: true,
                isApiServer: false,
                isTypeScript: true,
                isDependency: true,
            },
            {
                name: 'CommonServer',
                path: 'CommonServer',
                isReact: false,
                isApiServer: true,
                isTypeScript: true,
                isDependency: true,
            },
            {
                name: 'data-ingestor',
                path: 'data-ingestor',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'HelmChart',
                path: 'HelmChart',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'home',
                path: 'home',
                isReact: false,
                isApiServer: true,
                isTypeScript: true,
                isDependency: false,
            },
            {
                name: 'InitScript',
                path: 'InitScript',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },

            {
                name: 'JavaScriptSDK',
                path: 'JavaScriptSDK',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'licesning',
                path: 'licesning',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'LighthouseRunner',
                path: 'LighthouseRunner',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'oneuptime-acme-http-01',
                path: 'oneuptime-acme-http-01',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'oneuptime-gl-manager',
                path: 'oneuptime-gl-manager',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'oneuptime-le-store',
                path: 'oneuptime-le-store',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'probe',
                path: 'probe',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'ProbeAPI',
                path: 'ProbeAPI',
                isReact: false,
                isApiServer: true,
                isTypeScript: true,
                isDependency: false,
            },
            {
                name: 'ScriptRunner',
                path: 'ScriptRunner',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'realtime',
                path: 'realtime',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
            {
                name: 'zapier',
                path: 'zapier',
                isReact: false,
                isApiServer: true,
                isTypeScript: false,
                isDependency: false,
            },
        ];
    }
}

export default Project;