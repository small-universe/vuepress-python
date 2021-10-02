__author__ = "nanci"

# !/usr/bin/env python
# -*- coding:utf-8 -*-
import abc

"""
抽象工厂模式
"""


# 1-1、抽象产品角色①
class AbstractCpu(object):
    series_name = ''
    instructions = ''
    arch = ''


# 1-2、具体产品角色
class IntelCpu(AbstractCpu):
    def __init__(self, series):
        self.series_name = series


class AmdCpu(AbstractCpu):
    def __init__(self, series):
        self.series_name = series


# 2-1、抽象产品角色②
class AbstractMainBoard(object):
    series_name = ''


# 2-2、具体产品角色②
class IntelMainBoard(AbstractMainBoard):
    def __init__(self, series):
        self.series_name = series


class AmdMainBoard(AbstractMainBoard):
    def __init__(self, series):
        self.series_name = series


# 3、抽象工厂角色
class AbstractFactory(object):
    computer_name = ''

    def createCpu(self):
        pass

    def createMainBoard(self):
        pass


# 4、具体工厂角色
class IntelFactory(AbstractFactory):
    computer_name = 'Intel I7-series computer '

    def createCpu(self):
        return IntelCpu('I7-6500')

    def createMainBoard(self):
        return IntelMainBoard('Intel-6000')


class AmdFactory(AbstractFactory):
    computer_name = 'Amd 4 computer '

    def createCpu(self):
        return AmdCpu('amd444')

    def createMainBoard(self):
        return AmdMainBoard('AMD-4000')


class ComputerEngineer(object):
    """
    客户端
    """

    def makeComputer(self, factory_obj):
        self.prepareHardwares(factory_obj)

    def prepareHardwares(self, factory_obj):
        self.cpu = factory_obj.createCpu()
        self.mainboard = factory_obj.createMainBoard()

        info = '''------- computer [%s] info:
cpu: %s
mainboard: %s
-------- End --------
        ''' % (factory_obj.computer_name, self.cpu.series_name, self.mainboard.series_name)
        print(info)


if __name__ == "__main__":
    engineer = ComputerEngineer()  # 装机工程师

    intel_factory = IntelFactory()  # intel工厂
    engineer.makeComputer(intel_factory)

    amd_factory = AmdFactory()  # adm工厂
    engineer.makeComputer(amd_factory)
