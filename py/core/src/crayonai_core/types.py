from abc import ABC, abstractmethod
from typing import Literal

from crayonai_core.utils import escape_string
from pydantic import BaseModel


class GenUIDelta(BaseModel, ABC):
    @abstractmethod
    def toString(self) -> str:
        pass


class GenUIResponseErrorDelta(GenUIDelta):
    error: str

    def toString(self) -> str:
        return f'3:"{escape_string(self.error)}"\n'


class GenUIResponseTextDelta(GenUIDelta):
    text: str

    def toString(self) -> str:
        return f'0:"{escape_string(self.text)}"\n'


class GenUIResponseDataDelta(GenUIDelta):
    data: BaseModel

    def toString(self) -> str:
        return f"2:[{self.data.model_dump_json()}]\n"


class GenUIResponseToolCallPart(GenUIDelta):
    name: str
    arguments: str
    tool_call_id: str
    result: str | None = None

    def toString(self) -> str:
        if self.result is None:
            return (
                '9:{{"toolCallId":"{id}","toolName":"{name}","args":{args}}}\n'.format(
                    id=self.tool_call_id, name=self.name, args=self.arguments
                )
            )
        else:
            return 'a:{{"toolCallId":"{id}","toolName":"{name}","args":{args},"result":{result}}}\n'.format(
                id=self.tool_call_id,
                name=self.name,
                args=self.arguments,
                result=self.result,
            )


FinishReason = Literal["stop", "tool_calls", "error"]


class Usage(BaseModel):
    prompt_tokens: int
    completion_tokens: int

    def toString(self) -> str:
        return f'{{"promptTokens":{self.prompt_tokens},"completionTokens":{self.completion_tokens}}}'


class FinishStepDelta(GenUIDelta):
    finish_reason: FinishReason
    usage: Usage

    def toString(self) -> str:
        return f'e:{{"finishReason":"{self.finish_reason}","usage": {self.usage.toString()}}}\n'


class FinishMessageDelta(GenUIDelta):
    finish_reason: FinishReason
    usage: Usage

    def toString(self) -> str:
        return f'd:{{"finishReason":"{self.finish_reason}","usage": {self.usage.toString()}}}\n'
