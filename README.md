docker-compose up --build

--- In 2 terminal ---
docker exec -it websample sh
# exit
docker-compose down

--- Tests ---
docker exec -it 82b1cd3faffd yarn test
or in docer-compose own service tests: ...

