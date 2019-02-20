var app, app2, app3;

require([
  // ArcGIS
  "esri/Map",
  "esri/Basemap",
  "esri/WebMap",
  "esri/layers/VectorTileLayer",
  "esri/layers/FeatureLayer",
  "esri/geometry/Point",
  "esri/geometry/SpatialReference",
  "esri/geometry/coordinateFormatter",
  "esri/views/MapView",
  "esri/views/SceneView",
  "esri/Graphic",
  "esri/widgets/Search",
  "esri/widgets/ScaleBar",
  "esri/widgets/Popup",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "esri/widgets/ColorPicker",
  "esri/widgets/Expand",
  "esri/widgets/FeatureForm",
  "esri/widgets/FeatureTemplates",
  "esri/core/watchUtils",
  "esri/symbols/PictureMarkerSymbol",
  "dojo/query",
  "dojo/dom-class",
  "dojo/dom",
  "dojo/on",

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.10",
  "calcite-maps/calcitemaps-arcgis-support-v0.10",
  //"calcite-maps/calcitemaps",
  "calcite-settings/panelsettings",

  // Boostrap
  "bootstrap/Collapse",
  "bootstrap/Dropdown",
  "bootstrap/Tab",
  "bootstrap/Carousel",
  "bootstrap/Tooltip",
  "bootstrap/Modal",

  // Dojo
  "dojo/domReady!"
], function (Map, Basemap, Webmap, VectorTileLayer, FeatureLayer, Point, SpatialReference, coordinateFormatter,MapView, SceneView, Graphic, Search, ScaleBar, Popup, Home, Legend, ColorPicker, Expand,
        FeatureForm, FeatureTemplates, watchUtils, PictureMarkerSymbol, query, domClass, dom, on, CalciteMapsSettings, CalciteMapsArcGISSupport, PanelSettings
        ) {

    let editFeature, highlight;

    app = {
        zoom: 2,
        lonlat: [1.393, 46.525],
        mapView: null,
        mapDiv: "mapViewDiv",
        mapFL: null,
        vectorLayer: null,
        sceneView: null,
        sceneDiv: "sceneViewDiv",
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "hybrid",
        basemapSelectedAlt: "hybrid",
        webmap: null,
        webmapId: "3615ad3ea7a04278ad1b4ac3eef50f8f",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["attribution"],
            padding: {
                top: 15,
                right: 15,
                bottom: 30,
                left: 15
            }
        },
        popupOptions: {
            autoPanEnabled: true,
            messageEnabled: false,
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        scaleBar: null,
        panelSettings: null,
        pointSymbol: null,
        featureform: null
    }
    app2 = {
        zoom: 2,
        lonlat: [1.393, 46.525],
        mapView: null,
        mapDiv: "mapViewDiv2",
        mapFL: null,
        vectorLayer: null,
        sceneView: null,
        sceneDiv: "sceneViewDiv2",
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "gray",
        basemapSelectedAlt: "gray",
        webmap: null,
        webmapId: "3615ad3ea7a04278ad1b4ac3eef50f8f",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["attribution"],
            padding: {
                top: 15,
                right: 15,
                bottom: 30,
                left: 15
            }
        },
        popupOptions: {
            autoPanEnabled: true,
            messageEnabled: false,
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        scaleBar: null,
        panelSettings: null,
        pointSymbol: null,
        featureform: null
    }

    app3 = {
        zoom: 12,
        lonlat: [1.393, 46.525],
        mapView: null,
        mapDiv: "mapViewDiv3",
        mapFL: null,
        vectorLayer: null,
        sceneView: null,
        sceneDiv: "sceneViewDiv3",
        sceneFL: null,
        activeView: null,
        searchWidgetNav: null,
        searchWidgetPanel: null,
        searchWidgetSettings: null,
        basemapSelected: "gray",
        basemapSelectedAlt: "gray",
        webmap: null,
        webmapId: "3615ad3ea7a04278ad1b4ac3eef50f8f",
        padding: {
            top: 50,
            right: 0,
            bottom: 0,
            left: 0
        },
        uiPadding: {
            components: ["attribution"],
            padding: {
                top: 15,
                right: 15,
                bottom: 30,
                left: 15
            }
        },
        popupOptions: {
            autoPanEnabled: true,
            messageEnabled: false,
            spinnerEnabled: false,
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: true,
                //breakpoint: 544 // default
            }
        },
        colorPickerWidget: null,
        scaleBar: null,
        panelSettings: null,
        pointSymbol: null,
        featureform: null
    }


    //----------------------------------
    // App
    //----------------------------------

    initializeMapViews(app);
    initializeAppUI(app);
    initializeAppSettings(app);
    initializeWidgets(app);

    //----------------------------------
    // App2
    //----------------------------------

    initializeMapViews2(app2);
    initializeAppUI2(app2);
    initializeAppSettings(app2);
    initializeWidgets(app2);

    //----------------------------------
    // App3
    //----------------------------------

    initializeMapViews3(app3);
    initializeAppUI3(app3);
    initializeAppSettings(app3);
    initializeWidgets(app3);

    //add search point
    addPoint(app3);

    //synchronizeMaps
    synchronizeMap(app, app2);
    synchronizeMap(app2, app3);

    //----------------------------------
    // Map View
    //----------------------------------

    function initializeMapViews(app) {
        // Webmap
        app.webmap = new Map({
            basemap: 'hybrid',
            portalItem: {
                id: app.webmapId
            }
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: true
        });


        // Set active view
        app.activeView = app.mapView;

        // 3D - SceneView
        app.sceneView = new SceneView({
            container: app.sceneDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: false
        });

        // Listen for view breakpoint changes and update control location
        app.mapView.watch("widthBreakpoint", function (newVal, oldVal) {
            function setPadding(newVal, oldVal) {
                if (!app.panelSettings) {
                    return;
                }
                if (newVal === "small" && oldVal === "medium") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPaddingSmallScreen, app.panelSettings.activeLayout.uiPadding);
                } else if (newVal === "medium" && oldVal === "small") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPadding, app.panelSettings.activeLayout.uiPadding);
                }
            }
            // Set padding for navs that change height
            if (app.panelSettings.activeLayout.viewPaddingSmallScreen) {
                setPadding(newVal, oldVal);
            }
        });
    }

    function initializeMapViews2(app) {
        // Webmap
        app.webmap = new Map({
            basemap: 'national-geographic',
            portalItem: {
                id: app.webmapId
            }
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: true
        });


        // Set active view
        app.activeView = app.mapView;

        // 3D - SceneView
        app.sceneView = new SceneView({
            container: app.sceneDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: false
        });

        // Listen for view breakpoint changes and update control location
        app.mapView.watch("widthBreakpoint", function (newVal, oldVal) {
            function setPadding(newVal, oldVal) {
                if (!app.panelSettings) {
                    return;
                }
                if (newVal === "small" && oldVal === "medium") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPaddingSmallScreen, app.panelSettings.activeLayout.uiPadding);
                } else if (newVal === "medium" && oldVal === "small") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPadding, app.panelSettings.activeLayout.uiPadding);
                }
            }
            // Set padding for navs that change height
            if (app.panelSettings.activeLayout.viewPaddingSmallScreen) {
                setPadding(newVal, oldVal);
            }
        });
    }

    function initializeMapViews3(app) {
        // Webmap
        app.webmap = new Map({
            basemap: 'satellite',
            portalItem: {
                id: app.webmapId
            }
        });
        // 2D - MapView
        app.mapView = new MapView({
            container: app.mapDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: true
        });


        // Set active view
        app.activeView = app.mapView;

        // 3D - SceneView
        app.sceneView = new SceneView({
            container: app.sceneDiv,
            map: app.webmap,
            zoom: app.zoom,
            center: app.lonlat,
            padding: app.padding,
            ui: app.uiPadding,
            popup: new Popup(app.popupOptions),
            visible: false
        });

        // Listen for view breakpoint changes and update control location
        app.mapView.watch("widthBreakpoint", function (newVal, oldVal) {
            function setPadding(newVal, oldVal) {
                if (!app.panelSettings) {
                    return;
                }
                if (newVal === "small" && oldVal === "medium") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPaddingSmallScreen, app.panelSettings.activeLayout.uiPadding);
                } else if (newVal === "medium" && oldVal === "small") {
                    app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPadding, app.panelSettings.activeLayout.uiPadding);
                }
            }
            // Set padding for navs that change height
            if (app.panelSettings.activeLayout.viewPaddingSmallScreen) {
                setPadding(newVal, oldVal);
            }
        });
    }

    //----------------------------------
    // View widgets
    //----------------------------------

    function initializeWidgets(app) {

        app.mapView.when(function () {
            app.panelSettings.setWidgetPosition(app.mapView, "zoom", "none", 1);
        });

        // Panel widgets
        app.panelSettings.setWidgetPosition(app.mapView, "legend", "top-left", 0, "legendDiv");
        app.panelSettings.setWidgetPosition(app.mapView, "layerlist", "top-left", 0, "layerlistDiv");
        app.panelSettings.setWidgetPosition(app.mapView, "print", "top-left", 0, "printDiv");

    }
    //----------------------------------
    // App panel settings
    //----------------------------------

    function initializeAppSettings(app) {
        // Panel settings
        app.panelSettings = new PanelSettings({ app: app });
        app.panelSettings.activeLayout = app.panelSettings.APP_LAYOUTS.TOP;
        app.panelSettings.setLayout(app.panelSettings.activeLayout, false);

        // Set padding for navs that change height
        if (window.innerWidth < app.activeView.breakpoints.small && app.panelSettings.activeLayout.viewPaddingSmallScreen) {
            app.panelSettings.setPadding(app.panelSettings.activeLayout.viewPaddingSmallScreen, app.panelSettings.activeLayout.uiPadding);
        }
    }

    //----------------------------------
    // App UI Handlers
    //----------------------------------
    function initializeAppUI(app) {
        // App UI
        setBasemapEvents(app);
        //setSearchWidgets(app);
        setColorPicker(app);
        setScaleBar(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    function initializeAppUI2(app) {
        // App UI
        setBasemapEvents2(app);
        //setSearchWidgets(app);
        setColorPicker2(app);
        setScaleBar(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    function initializeAppUI3(app) {
        // App UI
        setBasemapEvents3(app);
        setSearchWidgets(app);
        setColorPicker3(app);
        setScaleBar(app);
        CalciteMapsArcGISSupport.setPopupPanelSync(app.mapView);
        CalciteMapsArcGISSupport.setSearchExpandEvents(app.searchWidgetNav);

    }

    //----------------------------------
    // Basemaps
    //----------------------------------

    function setBasemapEvents(app) {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel").on("change", function (e) {
            app.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app.mapView.map.basemap = app.basemapSelected;
            app.sceneView.map.basemap = app.basemapSelectedAlt;
        }

    }

    function setBasemapEvents2(app) {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel2").on("change", function (e) {
            app.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app.mapView.map.basemap = app.basemapSelected;
            app.sceneView.map.basemap = app.basemapSelectedAlt;
        }

    }

    function setBasemapEvents3(app) {

        // Sync basemaps for map and scene
        query("#selectBasemapPanel3").on("change", function (e) {
            app.basemapSelected = e.target.options[e.target.selectedIndex].dataset.vector;
            app.basemapSelectedAlt = e.target.value;
            setBasemaps();
        });

        function setBasemaps() {
            app.mapView.map.basemap = app.basemapSelected;
            app.sceneView.map.basemap = app.basemapSelectedAlt;
        }

    }

    //----------------------------------
    // Search Widgets
    //----------------------------------

    function setSearchWidgets(app) {

        

        //TODO - Search Nav + Panel (detach/attach)
        app.searchWidgetSettings = createSearchWidget("settingsSearchDiv", false);

        // Create widget
        function createSearchWidget(parentId, showPopup) {
            var search = new Search({
                viewModel: {
                    view: app.activeView,
                    popupEnabled: showPopup,
                    highlightEnabled: false,
                    maxSuggestions: 20
                },
            }, parentId);
            
            
            return search;
            
        }
        
    }

    //----------------------------------
    // Colorpicker Widget
    //----------------------------------

    function setColorPicker(app) {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv");
    }

    function setColorPicker2(app) {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv2");
    }

    function setColorPicker3(app) {
        app.colorPickerWidget = new ColorPicker({
            required: false,
            showRecentColors: false,
            showTransparencySlider: false
        }, "colorPickerDiv3");
    }

    //----------------------------------
    // Scale Bar Widget
    //----------------------------------
    function setScaleBar(app) {
        app.scaleBar = new ScaleBar({
            view: app.mapView,
            unit: "metric",
            style: 'ruler'
        });

        app.mapView.ui.add(app.scaleBar, {
            position: "bottom-right"
        });
    }




    //----------------------------------
    // Synchronize maps
    //----------------------------------

    
    function synchronizeMap(app, app2) {

       app.mapView.when(function () {
            // Update the overview extent whenever the MapView or SceneView extent changes
            app2.mapView.watch("extent", updateOverviewExtent);
            app.mapView.watch("extent", updateOverviewExtent);

            // Update the minimap overview when the main view becomes stationary
            watchUtils.when(app2.mapView, "stationary", updateOverview);

            function updateOverview() {
                // Animate the MapView to a zoomed-out scale so we get a nice overview.
                // We use the "progress" callback of the goTo promise to update
                // the overview extent while animating
                app.mapView.goTo({
                    center: app2.mapView.center,
                    scale: app2.mapView.scale * 4 * Math.max(app2.mapView.width /
                      app.mapView.width,
                      app2.mapView.height / app.mapView.height)
                });
            }

            function updateOverviewExtent() {
                // Update the overview extent by converting the SceneView extent to the
                // MapView screen coordinates and updating the extentDiv position.
                var extent = app2.mapView.extent;

                var bottomLeft = app.mapView.toScreen(extent.xmin, extent.ymin);
                var topRight = app.mapView.toScreen(extent.xmax, extent.ymax);

                addPolygonExtent(extent);
            }
        });

       function addPolygonExtent(extent) {

           app.mapView.graphics.removeAll();


           // Create a polygon geometry
           var polygon = {
               type: "polygon", // autocasts as new Polygon()
               rings: [
                 [extent.xmin, extent.ymin],
                 [extent.xmin, extent.ymax],
                 [extent.xmax, extent.ymax],
                 [extent.xmax, extent.ymin]
               ],
               spatialReference: { wkid: 102100 }
           };

           // Create a symbol for rendering the graphic
           var fillSymbol = {
               type: "simple-fill", // autocasts as new SimpleFillSymbol()
               color: [227, 139, 79, 0.0],
               outline: { // autocasts as new SimpleLineSymbol()
                   color: [255, 0, 0],
                   width: 1
               }
           };

           // Add the geometry and symbol to a new graphic
           var polygonGraphic = new Graphic({
               geometry: polygon,
               symbol: fillSymbol
           });

           // Add the graphics to the view's graphics layer
           app.mapView.graphics.add(polygonGraphic);
       }
    }


    //----------------------------------
    // add Point 
    //----------------------------------
    function addPoint(app) {
        
        var pointGeom = new Point({
            x: 1.393,
            y: 46.525
        });
            var features = [
         {
             geometry: pointGeom,
             attributes: {
                 ObjectID: 1,
                 toponyme: "Sample",
                 date: Date.now(),
                 client: "UAL1"
             }
         }
            ];

            var fields = [
                {
                    name: "ObjectID",
                    alias: "ObjectID",
                    type: "oid"
                },
                {
                    name: "toponyme",
                    alias: "toponyme",
                    type: "string"
                }, {
                    name: "date",
                    alias: "date",
                    type: "date"
                }, {
                    name: "client",
                    alias: "client",
                    type: "string"
                }, {
                    name: "rapport",
                    alias: "rapport",
                    type: "string"
                }, {
                    name: "titre",
                    alias: "titre",
                    type: "string"
                }, {
                    name: "n_affaire",
                    alias: "n_affaire",
                    type: "string"
                }, {
                    name: "theme",
                    alias: "theme",
                    type: "string"
                }, {
                    name: "prestation",
                    alias: "prestation",
                    type: "string"
                }, {
                    name: "type_clien",
                    alias: "type_clien",
                    type: "string"
                }, {
                    name: "filiere",
                    alias: "filiere",
                    type: "string"
                }, {
                    name: "id_aff",
                    alias: "id_aff",
                    type: "string"
                }, {
                    name: "titre_aff",
                    alias: "titre_aff",
                    type: "string"
                }];

            var renderer = {
                type: "simple", 
                symbol: {
                    type: "picture-marker",
                    url: "img/pointIcon.png",
                    width: "15px",
                    height: "15px"
                }
            };

            var layer = new FeatureLayer({
                source: features,
                fields: fields,
                objectIdField: "ObjectID",
                renderer: renderer,
                id: "localisation"
            });


                app.webmap.add(layer);

                setFeatureForm(app, layer);

    }


    //----------------------------------
    // FeatureForm Widget
    //----------------------------------
    function setFeatureForm(app, layer) {
 
        app.featureform = new FeatureForm({
            container: "formDiv",
            layer: layer,
            fieldConfig: [
                  {
                      name: "toponyme",
                      label: "Toponyme"
                  },
                  {
                      name: "client",
                      label: "Client"
                  }, {
                      name: "date",
                      label: "Date"
                  }, {
                      name: "rapport",
                      label: "Rapport"
                  }, {
                      name: "titre",
                      label: "Titre"
                  }, {
                      name: "n_affaire",
                      label: "Nombre Affaire"
                  }, {
                      name: "theme",
                      label: "Theme"
                  }, {
                      name: "prestation",
                      label: "Prestation"
                  }, {
                      name: "type_clien",
                      label: "Type Client"
                  }, {
                      name: "filiere",
                      label: "Filiere"
                  }, {
                      name: "id_aff",
                      label: "Id Affaire"
                  }, {
                      name: "titre_aff",
                      label: "Titre Affaire"
                  }
                ]
        });


        // Listen to the feature form's submit event.
        // Update feature attributes shown in the form.
        app.featureform.on("submit", function () {
            if (editFeature) {
                // Grab updated attributes from the form.
                const updated = app.featureform.getValues();

                // Loop through updated attributes and assign
                // the updated values to feature attributes.
                Object.keys(updated).forEach(function (name) {
                    editFeature.attributes[name] = updated[name];
                });

                // Setup the applyEdits parameter with updates.
                const edits = {
                    updateFeatures: [editFeature]
                };
                applyEditsToIncidents(edits);
            }
        });

        // Check if the user clicked on the existing feature
        selectExistingFeature();

        // Listen for when a result is selected
        app.searchWidgetSettings.on("select-result", function (event) {
            

            // Access the template item's attributes from the event's
            // template prototype.
            attributes = {
                ObjectID: 1,
                toponyme: event.result.name,
                date: Date.now()
            };

            unselectFeature();

            // With the selected template item, listen for the view's click event and create feature
            $('#addPointButton').click(function () {

                app.featureform.feature = null;

                if (event.result.feature.geometry !== null) {
                    var pointGeom = event.result.feature.geometry;


                    // Create a new feature 
                    editFeature = new Graphic({
                        geometry: pointGeom,
                        attributes: attributes
                    });

                    // Setup the applyEdits parameter with adds.
                    const edits = {
                        addFeatures: [editFeature]
                    };
                    applyEditsToIncidents(edits);


                } else {
                    console.error("event.mapPoint is not defined");
                }
            });
        });

        // With the lat long data click event and create feature
        $("#geoform").submit(function (event) {

            event.preventDefault();
            app.featureform.feature = null;
            var latlon = $('#lat').val() + " " + $('#long').val();
            var sr = new SpatialReference($('#epsg').val());

            coordinateFormatter.load().then(function () {
                var point = coordinateFormatter.fromLatitudeLongitude(latlon, sr);

                console.log(latlon, point);

                if (point !== null) {
                    //add attributes by default
                    attributes = {
                        ObjectID: 1,
                        toponyme: "result1",
                        date: Date.now()
                    };
                    // Create a new feature 
                    editFeature = new Graphic({
                        geometry: point,
                        attributes: attributes
                    });

                    // Setup the applyEdits parameter with adds.
                    const edits = {
                        addFeatures: [editFeature]
                    };

                    applyEditsToIncidents(edits);
                }

            });
        });
        // With the XY data click event and create feature
        $("#xyform").submit(function (event) {

            event.preventDefault();
            app.featureform.feature = null;

            var x = $('#coordx').val();
            var y = $('#coordy').val();
            var sr = new SpatialReference($('#epsg2').val());

            //create point from xy data
            var pointXY = new Point({
                x: x,
                y: y,
                spatialReference: sr
            });
            //add attributes by default
            attributes = {
                ObjectID: 1,
                toponyme: "result1",
                date: Date.now()
            };
            // Create a new feature 
            editFeature = new Graphic({
                geometry: pointXY,
                attributes: attributes
            });

            // Setup the applyEdits parameter with adds.
            const edits = {
                addFeatures: [editFeature]
            };

            applyEditsToIncidents(edits);


        });

        function applyEditsToIncidents(params) {
            // unselectFeature();
            layer.applyEdits(params).then(function (editsResult) {
                // Get the objectId of the newly added feature.
                // Call selectFeature function to highlight the new feature.
                if (editsResult.addFeatureResults.length > 0 || editsResult.updateFeatureResults.length > 0) {
                    unselectFeature();
                    let objectId;
                    if (editsResult.addFeatureResults.length > 0) {
                        objectId = editsResult.addFeatureResults[0].objectId;
                    }
                    else {
                        app.featureform.feature = null;
                        objectId = editsResult.updateFeatureResults[0].objectId;
                    }
                    selectFeature(objectId);
                    if (addFeatureDiv.style.display === "block") {
                        toggleEditingDivs("none", "block");
                    }
                }
                    // show off if user deleted a feature
                else if (editsResult.deleteFeatureResults.length > 0) {
                    toggleEditingDivs("block", "none");
                }
            })
            .catch(function (error) {
                console.log("===============================================");
                console.error("[ applyEdits ] FAILURE: ", error.code, error.name,
                  error.message);
                console.log("error = ", error);
            });

        }
        // Check if a user clicked on an incident feature.
        function selectExistingFeature() {
            app.mapView.on("click", function (event) {
                // clear previous feature selection
                unselectFeature();
                             
                app.mapView.hitTest(event).then(function (response) {
                    // If a user clicks on an incident feature, select the feature.
                   
                    if (response.results.length === 0) {
                        toggleEditingDivs("block", "none");
                    }
                    else if (response.results[0].graphic && response.results[0].graphic.layer.id == "localisation") {

                        if (addFeatureDiv.style.display === "block") {
                            toggleEditingDivs("none", "block");
                        }
                        selectFeature(response.results[0].graphic.attributes[layer.objectIdField]);
                       
                    }
                });
                
            });
        }
        // Highlights the clicked feature and display
        // the feature form with the incident's attributes.
        function selectFeature(objectId) {

            // query feature from the server
            layer.queryFeatures({
                objectIds: [objectId],
                outFields: ["*"],
                returnGeometry: true
            }).then(function (results) {
                
                if (results.features.length > 0) {
                    editFeature = results.features[0];

                    // display the attributes of selected feature in the form
                    app.featureform.feature = editFeature;
                    // highlight the feature on the view
                    app.mapView.whenLayerView(editFeature.layer).then(function (layerView) {
                        
                        highlight = layerView.highlight(editFeature);
                        //zoomto point selected
                        app.mapView.goTo(editFeature.geometry);
                    });
                }
            });
        }
        // input boxes for the attribute editing
        const addFeatureDiv = document.getElementById("addFeatureDiv");
        const attributeEditing = document.getElementById("featureUpdateDiv");

        // Controls visibility of addFeature or attributeEditing divs
        function toggleEditingDivs(addDiv, attributesDiv) {
            addFeatureDiv.style.display = addDiv;
            attributeEditing.style.display = attributesDiv;

            document.getElementById("updateInstructionDiv").style.display = addDiv;
        }
        // Remove the feature highlight and remove attributes
        // from the feature form.
        function unselectFeature() {
            if (highlight) {
                highlight.remove();
            }
        }
        // Update attributes of the selected feature.
        $("#btnUpdate").click(function () {
            // Fires feature form's submit event.
            app.featureform.submit();
        });
        // Delete the selected feature. ApplyEdits is called
        // with the selected feature to be deleted.
        $("#btnDelete").click(function () {
            // setup the applyEdits parameter with deletes.
            const edits = {
                deleteFeatures: [editFeature]
            };

            applyEditsToIncidents(edits);
        });

        $("#btnAddBD").click(function () {
            // add point to database
            
            
            var objForm = app.featureform.getValues();
            var latForm = app.featureform.feature.geometry.latitude;
            var longForm = app.featureform.feature.geometry.longitude;
            
            //fields
            var keys = Object.keys(objForm);
            var fields = "";
            for (var i = 1; i < keys.length; i++) {
                fields=fields+keys[i]+",";
            }
            fields = fields+"lat,long";

            //values
            var valObj = Object.values(objForm);
            var values = "";
            for (var i = 1; i < valObj.length; i++) {
                if (i !== 2) {
                    values = values + "'" + valObj[i] + "'" + ",";
                } else {
                    values = values + "to_timestamp(" + valObj[i] / 1000 + ")" + ",";
                }
            }
            values = values +latForm + ", " + longForm;

            var resultData = $.ajax({
                url: 'php/postData.php',
                data: 'fields=' + fields + '&values=' + values,
                success: function (result) {
                    alert(result)
                },
                error: function (xhr) {
                    alert(xhr.statusText)
                }

            });

        });
    }



});