import unittest
import azure.functions as func
from ResumeCounterFunction import getNewCounterValue

class TestGetCounter(unittest.TestCase):
    def test_counter(self):
        self.assertEqual(getNewCounterValue(1), 2)