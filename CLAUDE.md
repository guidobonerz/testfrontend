## Techstack
- angular 21
- primeng 21
- fontawesome icons

## Data Model Specs
See `techspecs/data-model-spec.md` for all models, fields, datatypes, mandatory flags and references (optional).

## Workspace Rules
- IMPORTANT: Only read and modify files under `frontend/` — never touch files outside this directory
- Provide RestApi conform backend calls. use this pattern : /{version}/api/{resource}/{resource-id}/{sub-resource}
- Document each rest api call for a data-model in a file `docs/app-spec-generated.md` including access method : GET,PUT,DELETE,POST

## Rules (obligation)
- IMPORTANT: After ANY change to a model (add/remove/rename field, change type, change
  mandatory flag), you MUST update `docs/app-spec-generated.md` before finishing the task.

## Folderstructure Blueprint (obligation)
```
frontend
/public/
  assets/i18n/{en,de,...}.json     -- Translation files (ngx-translate)
/src/
  app/
    app.config.ts              -- Providers: router, HTTP, animations, i18n, PrimeNG
    app.routes.ts              -- Route definitions
    components/                -- Page and layout components (standalone, signal-based)
    services/                  -- ThemeService (light/dark), LanguageService (en/de)
  environments/                -- API base URL per environment (default: http://localhost:8080/api)
  styles.scss  
```

## Workflow

### Form Model Documentation (obligation)
Whenever you create or modify a model or interface, update the central
documentation file `docs/app-spec-generated.md` based on the guiding spec `techspecs/data-model-spec.md`.

Every attribute or model has to be translated in english if not already provided in english. 

- ADD a new section for each new model
- UPDATE the existing section if a model changes
- REMOVES in the documentation of `docs/app-spec-generated.md` must not happen but documented with a remove hint, because of an sideeffect to a database table or object
- If attributes will be added, it has to be documented with a hint
- If attributes will be renamed, it has to be documented with a hint
- If a datatype of an attribute will be changed, it has to be documented with a hint

create a list in the description column of the generated model specs with timestamp of the change

Each section must document: model name, field name, datatype, mandatory flag and references(optional).
For each model implement a frontend service layer with rest api calls
