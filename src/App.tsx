import { useState } from "react";

import widgets from "./mock-data/widgets";
import people from "./mock-data/people";

import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";

import IProperty from "./interfaces/ISorters";
import IWidget from "./interfaces/IWidget";
import IPerson from "./interfaces/IPerson";
import IFilter from "./interfaces/IFilter";

import Sorters from "./components/Sorters";
import Widget from ".//components/Widget";
import Person from "./components/Person";
import SearchInput from "./components/SearchInput";
import genericFilter from "./utils/genericFilter";
import Filters from "./components/Filters";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [widgetProperty, setWidgetProperty] = useState<IProperty<IWidget>>({
    property: "title",
    isDescending: true,
  });
  const [peopleProperty, setPeopleProperty] = useState<IProperty<IPerson>>({
    property: "firstName",
    isDescending: true,
  });
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<IFilter<IWidget>>
  >([]);
  const [peopleFilterProperties, setPeopleFilterProperties] = useState<
    Array<IFilter<IPerson>>
  >([]);

  console.log(peopleFilterProperties);
  return (
    <div className="p-5">
      <h1 className="h1 mt-5 text-center">Advanced Typescript with Generics</h1>
      <SearchInput setSearchQuery={setQuery} />

      <h2 className="h2 mt-5">Widgets:</h2>

      <Sorters
        object={widgets[0]}
        setProperty={(propertyType) => setWidgetProperty(propertyType)}
      />

      <Filters
        object={widgets[0]}
        properties={widgetFilterProperties}
        onChangeFilter={(property) => {
          const propertyMatch = widgetFilterProperties.some(
            (widgetFilterProperty) =>
              widgetFilterProperty.property === property.property
          );

          const fullMatch = widgetFilterProperties.some(
            (widgetFilterProperty) =>
              widgetFilterProperty.property === property.property &&
              widgetFilterProperty.isTruthySelected ===
                property.isTruthySelected
          );

          if (fullMatch) {
            setWidgetFilterProperties([
              ...widgetFilterProperties.filter(
                (widgetFilterProperty) =>
                  widgetFilterProperty.property !== property.property
              ),
            ]);
          } else if (propertyMatch) {
            setWidgetFilterProperties([
              ...widgetFilterProperties.filter(
                (widgetFilterProperty) =>
                  widgetFilterProperty.property !== property.property
              ),
              property,
            ]);
          } else {
            setWidgetFilterProperties([...widgetFilterProperties, property]);
          }
        }}
      />

      {widgets
        .filter((widget) =>
          genericSearch(widget, ["title", "description"], query)
        )
        .filter((widget) => genericFilter(widget, widgetFilterProperties))
        .sort((a, b) => genericSort(a, b, widgetProperty))
        .map((widget) => (
          <Widget {...widget} />
        ))}

      <h2 className="h2 mt-5">People:</h2>

      <Sorters
        object={people[0]}
        setProperty={(propertyType) => setPeopleProperty(propertyType)}
      />

      <Filters
        object={people[0]}
        properties={peopleFilterProperties}
        onChangeFilter={(property) =>
          peopleFilterProperties.includes(property)
            ? setPeopleFilterProperties(
                peopleFilterProperties.filter(
                  (peopleFilterProperty) => peopleFilterProperty !== property
                )
              )
            : setPeopleFilterProperties([...peopleFilterProperties, property])
        }
      />

      {people
        .filter((person) =>
          genericSearch(person, ["firstName", "lastName", "eyeColor"], query)
        )
        .filter((widget) => genericFilter(widget, peopleFilterProperties))
        .sort((a, b) => genericSort(a, b, peopleProperty))
        .map((person) => {
          return <Person {...person} />;
        })}
    </div>
  );
};

export default App;
