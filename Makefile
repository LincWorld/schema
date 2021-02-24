.DELETE_ON_ERROR:

BUILD_DIR := ./build
SRC_DIR := ./src
STATIC_DIR := ./static
SCHEMA_DIR := $(SRC_DIR)

export PATH := .:./node_modules/.bin/:$(PATH)

SRC_SCHEMA := $(shell ls $(SCHEMA_DIR)/**/*.js)
BUILD_SCHEMA := $(patsubst $(SCHEMA_DIR)/%.js,$(BUILD_DIR)/%.json,$(SRC_SCHEMA))
ALL_JS := $(shell find $(SRC_DIR) -type f -name '*.js') $(shell ls ./*)

.PHONY: all
all: clean setup $(BUILD_SCHEMA)

setup:
	@pip install json-schema-for-humans


# Build all schema
$(BUILD_SCHEMA): $(SRC_SCHEMA)
	@mkdir -p $(dir $@)
	@BASE_URL=https://schema.linc.world/ index.js $(patsubst $(BUILD_DIR)/%.json,$(SCHEMA_DIR)/%.js,./$@) > $@
	@cp $(STATIC_DIR)/* $(BUILD_DIR)
	@generate-schema-doc ./$@ $(patsubst $(BUILD_DIR)/%.json,$(BUILD_DIR)/%.html,./$@)


# .PHONY: test
# test: $(BUILD_SCHEMA) lint
# 	@node test/test.js

# .PHONY: lint
# lint: $(ALL_JS) node_modules/.install
# 	@eslint $(ALL_JS);

.PHONY: clean
clean:
	@rm -rf $(BUILD_DIR)
