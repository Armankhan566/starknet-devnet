"""
Contains general_config generation functionalities.
"""
from starkware.starknet.definitions import constants
from starkware.starknet.definitions.general_config import (
    DEFAULT_GAS_PRICE,
    DEFAULT_MAX_STEPS,
    DEFAULT_SEQUENCER_ADDRESS,
    DEFAULT_VALIDATE_MAX_STEPS,
    StarknetChainId,
    build_general_config,
)

from .fee_token import FeeToken


def build_devnet_general_config(chain_id: StarknetChainId):
    """General config build with chain id argument."""
    return build_general_config(
        {
            "cairo_resource_fee_weights": {
                "n_steps": constants.N_STEPS_FEE_WEIGHT,
            },
            "compiled_class_hash_commitment_tree_height": constants.COMPILED_CLASS_HASH_COMMITMENT_TREE_HEIGHT,
            "contract_storage_commitment_tree_height": constants.CONTRACT_STATES_COMMITMENT_TREE_HEIGHT,
            "enforce_l1_handler_fee": True,
            "event_commitment_tree_height": constants.EVENT_COMMITMENT_TREE_HEIGHT,
            "global_state_commitment_tree_height": constants.CONTRACT_ADDRESS_BITS,
            "invoke_tx_max_n_steps": DEFAULT_MAX_STEPS,
            "min_gas_price": DEFAULT_GAS_PRICE,
            "constant_gas_price": True,
            "sequencer_address": hex(DEFAULT_SEQUENCER_ADDRESS),
            "starknet_os_config": {
                "chain_id": chain_id.value,
                "fee_token_address": hex(FeeToken.ADDRESS),
            },
            "tx_commitment_tree_height": constants.TRANSACTION_COMMITMENT_TREE_HEIGHT,
            "validate_max_n_steps": DEFAULT_VALIDATE_MAX_STEPS,
        }
    )


DEFAULT_GENERAL_CONFIG = build_devnet_general_config(StarknetChainId.TESTNET)
