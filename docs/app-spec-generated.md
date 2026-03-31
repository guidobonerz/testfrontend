# Application Specification — Fleet Management

## Models

### Vehicle

> **Hint (new model):** Adding this model will create a corresponding database table or object.

| Field         | Datatype | Mandatory | Description                                              |
|---------------|----------|-----------|----------------------------------------------------------|
| id            | number   | yes       | Primary key                                              |
| name          | string   | yes       | Vehicle display name                                     |
| color         | string   | no        | Vehicle color                                            |
| brand_id      | number   | yes       | Vehicle brand ID / manufacturer reference. Changes: <ul><li>2026-03-31: Datatype changed from `string` to `number` — side effect on database table or object.</li><li>2026-03-31: Renamed from `brand` to `brand_id` — side effect on database table or object.</li></ul> |
| fuel_type     | string   | yes       | Fuel type (gasoline, diesel, electric, hybrid, lpg)      |
| type          | string   | yes       | Vehicle type (car, truck, motorcycle, van, bus)          |
| license_plate | string   | yes       | License plate number                                     |
| pool          | boolean  | no        | Pool vehicle flag. Changes: <ul><li>2026-03-31: New attribute added — side effect on database table or object.</li></ul> |
| ~~model~~     | string   | yes       | Vehicle model name. Changes: <ul><li>2026-03-31: Attribute removed from frontend model — side effect on database table or object.</li></ul> |
| created_at    | date     | yes       | Creation timestamp                                       |
| created_by    | string   | yes       | User ID of creator                                       |
| changed_at    | date     | yes       | Last modification timestamp                              |
| changed_by    | string   | yes       | User ID of last modifier                                 |
| deleted       | boolean  | yes       | Soft-delete flag                                         |
| phantom       | boolean  | yes       | Phantom record flag                                      |
| visible       | boolean  | yes       | Visibility flag                                          |
| active        | boolean  | yes       | Active flag                                              |

### Driver

> **Hint (new model):** Adding this model will create a corresponding database table or object.

| Field          | Datatype | Mandatory | Description                                  | Reference  |
|----------------|----------|-----------|----------------------------------------------|------------|
| id             | number   | yes       | Primary key                                  |            |
| first_name     | string   | yes       | Driver first name                            |            |
| last_name      | string   | yes       | Driver last name                             |            |
| email          | string   | yes       | Driver email address                         |            |
| phone          | string   | no        | Driver phone number                          |            |
| license_number | string   | yes       | Driving license number                       |            |
| vehicle_ids    | number[] | no        | Assigned vehicle IDs (many-to-many)          | Vehicle.id |
| created_at     | date     | yes       | Creation timestamp                           |            |
| created_by     | string   | yes       | User ID of creator                           |            |
| changed_at     | date     | yes       | Last modification timestamp                  |            |
| changed_by     | string   | yes       | User ID of last modifier                     |            |
| deleted        | boolean  | yes       | Soft-delete flag                             |            |
| phantom        | boolean  | yes       | Phantom record flag                          |            |
| visible        | boolean  | yes       | Visibility flag                              |            |
| active         | boolean  | yes       | Active flag                                  |            |

### Relationship: Driver — Vehicle

A driver can be assigned **multiple vehicles** (1:N relationship via `vehicle_ids`).
The sub-resource API allows managing this relationship independently.

---

## REST API Specification

### Vehicle API

Base URL: `/v1/api/vehicles`

| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| GET    | `/v1/api/vehicles`      | List all vehicles          |
| GET    | `/v1/api/vehicles/{id}` | Get vehicle by ID          |
| POST   | `/v1/api/vehicles`      | Create a new vehicle       |
| PUT    | `/v1/api/vehicles/{id}` | Update an existing vehicle |
| DELETE | `/v1/api/vehicles/{id}` | Delete a vehicle           |

### Driver API

Base URL: `/v1/api/drivers`

| Method | Endpoint                                     | Description                      |
|--------|----------------------------------------------|----------------------------------|
| GET    | `/v1/api/drivers`                            | List all drivers                 |
| GET    | `/v1/api/drivers/{id}`                       | Get driver by ID                 |
| POST   | `/v1/api/drivers`                            | Create a new driver              |
| PUT    | `/v1/api/drivers/{id}`                       | Update an existing driver        |
| DELETE | `/v1/api/drivers/{id}`                       | Delete a driver                  |
| GET    | `/v1/api/drivers/{id}/vehicles`              | List vehicles assigned to driver |
| POST   | `/v1/api/drivers/{id}/vehicles`              | Assign a vehicle to driver       |
| DELETE | `/v1/api/drivers/{id}/vehicles/{vehicleId}`  | Remove vehicle from driver       |
